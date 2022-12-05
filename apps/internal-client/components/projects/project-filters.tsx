import { SearchIcon, XIcon } from '@primer/octicons-react';
import { IconButton, TextInput } from '@primer/react';
import { ChangeEventHandler, memo, useCallback, useState } from 'react';
import { useDebounce } from 'react-use';

export interface ListFilterProps {
  /**
   * Callback that is called when the search is finished
   */
  onSearchChange: (searchValue: string) => unknown;
  /**
   * Search debounce in milliseconds, will default to 100.
   */
  searchDebounce?: number;
}

/**
 * Filters that are shown on the different list pages shown.
 *
 */
export const ListFilters = memo(function ListFilters(props: ListFilterProps) {
  // state
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [debouncedValue, setDebouncedValue] = useState<string>('');

  // effects
  const [isReadyFn, cancel] = useDebounce(
    () => props.onSearchChange(debouncedValue),
    props.searchDebounce ?? 100,
    [debouncedValue]
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
      {/* TODO: add sorting+filtering */}
      {showSearch ? (
        <TextInput
          aria-label="search"
          name="search"
          placeholder="Search"
          autoComplete="off"
          onChange={handleSearchChange}
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
    </>
  );
});
