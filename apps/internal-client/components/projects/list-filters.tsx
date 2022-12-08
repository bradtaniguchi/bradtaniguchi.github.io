import { SearchIcon, XIcon } from '@primer/octicons-react';
import { Box, IconButton, TextInput } from '@primer/react';
import {
  ChangeEventHandler,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useDebounce } from 'react-use';

export interface ListFilterProps {
  /**
   * Callback that is called when the search is finished
   */
  onSearchChange?: (searchValue: string) => unknown;
  /**
   * Search debounce in milliseconds, will default to 100.
   */
  searchDebounce?: number;
  /**
   * Default search value used when the search is opened.
   */
  defaultSearchValue?: string;
}

/**
 * Filters that are shown on the different list pages shown.
 *
 */
export const ListFilters = memo(function ListFilters(props: ListFilterProps) {
  const { searchDebounce, onSearchChange, defaultSearchValue } = props;

  // state
  const [showSearch, setShowSearch] = useState<boolean>();
  const [debouncedValue, setDebouncedValue] =
    useState<string>(defaultSearchValue);

  // effects
  useEffect(() => {
    if (defaultSearchValue) {
      setShowSearch(!!defaultSearchValue);
      setDebouncedValue(defaultSearchValue);
    }
  }, [defaultSearchValue]);

  const [isReadyFn, cancel] = useDebounce(
    () => onSearchChange(debouncedValue),
    searchDebounce ?? 100,
    [debouncedValue, onSearchChange]
  );

  // event handlers
  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => setDebouncedValue(e.target.value),
    []
  );
  const handleShowSearch = useCallback(
    () => setShowSearch(true),
    [setShowSearch]
  );
  const handleSearchClose = useCallback(() => {
    if (isReadyFn()) {
      setShowSearch(false);
      setDebouncedValue('');
    } else {
      cancel();
    }
  }, [setShowSearch, setDebouncedValue, cancel, isReadyFn]);

  return (
    <>
      <Box display="flex" flexDirection="row" alignItems="center">
        <div>
          {showSearch ? (
            <TextInput
              aria-label="search"
              name="search"
              placeholder="Search"
              autoComplete="off"
              onChange={handleSearchChange}
              value={debouncedValue}
              trailingAction={
                <TextInput.Action
                  onClick={handleSearchClose}
                  icon={XIcon}
                  aria-label="Clear input"
                />
              }
            />
          ) : (
            <IconButton
              aria-label="Search"
              icon={SearchIcon}
              onClick={handleShowSearch}
            />
          )}
        </div>
      </Box>
    </>
  );
});
