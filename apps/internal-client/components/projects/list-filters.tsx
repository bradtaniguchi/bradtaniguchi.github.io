import { FilterIcon, SearchIcon, XIcon } from '@primer/octicons-react';
import { Box, IconButton, Label, TextInput } from '@primer/react';
import {
  ChangeEventHandler,
  memo,
  MouseEventHandler,
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
   * Callback that is called when the user closes/clears the search.
   */
  onSearchClear?: () => unknown;
  /**
   * Callback that is called when the user changes the selected tags.
   * Returns all tags to filter against.
   */
  onTagChange?: (tags: string[]) => unknown;
  /**
   * Search debounce in milliseconds, will default to 100.
   */
  searchDebounce?: number;
  /**
   * Default search value used when the search is opened.
   */
  defaultSearchValue?: string;
  /**
   * The list of tags that can be selected
   */
  selectableTags?: string[];
  /**
   * The list of tags selected.
   */
  selectedTags?: string[];
  /**
   * If we are to show the tag filter or not.
   */
  hideTagFilter?: boolean;
}

/**
 * Filters that are shown on the different list pages shown.
 *
 */
export const ListFilters = memo(function ListFilters(props: ListFilterProps) {
  const {
    searchDebounce,
    onSearchChange,
    onSearchClear,
    onTagChange,
    defaultSearchValue,
    selectableTags,
    selectedTags,
    hideTagFilter,
  } = props;

  // state
  const [showTags, setShowTags] = useState<boolean>(false);
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
  const handleShowTagFilter: ChangeEventHandler<HTMLInputElement> =
    useCallback(() => {
      setShowTags(!showTags);
    }, [showTags]);
  const handleClickTag: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      if (typeof onTagChange !== 'function') return;
      const tag = e.currentTarget.value;
      const isSelected = (selectedTags || []).includes(tag);
      if (isSelected) {
        onTagChange((selectedTags || []).filter((t) => t !== tag));
      }
      onTagChange([...(selectedTags || []), tag]);
    },
    [onTagChange, selectedTags]
  );
  const handleShowTagFilterClose = useCallback(() => {
    setShowTags(false);
  }, []);
  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => setDebouncedValue(e.target.value),
    []
  );
  const handleShowSearch = useCallback(() => setShowSearch(true), []);
  const handleSearchClose = useCallback(() => {
    if (isReadyFn()) {
      setShowSearch(false);
      setDebouncedValue('');
      if (typeof onSearchClear === 'function') onSearchClear();
    } else {
      cancel();
    }
  }, [cancel, isReadyFn, onSearchClear]);

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{ gap: 2 }}
      >
        {!hideTagFilter && (
          <div>
            {showTags ? (
              <Box display="flex" sx={{ gap: 1 }} alignItems="center">
                {(selectableTags || []).map((selectableTag) => (
                  <Label
                    as="button"
                    variant={
                      (selectedTags || []).includes(selectableTag)
                        ? 'success'
                        : 'accent'
                    }
                    key={selectableTag}
                    onClick={handleClickTag}
                    value={selectableTag}
                  >
                    {selectableTag}
                  </Label>
                ))}
                <IconButton
                  aria-label="hide tags"
                  icon={XIcon}
                  onClick={handleShowTagFilterClose}
                />
              </Box>
            ) : (
              <IconButton
                aria-label="show tags"
                icon={FilterIcon}
                onClick={handleShowTagFilter}
              />
            )}
          </div>
        )}
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
                  aria-label="close search"
                />
              }
            />
          ) : (
            <IconButton
              aria-label="show search"
              icon={SearchIcon}
              onClick={handleShowSearch}
            />
          )}
        </div>
      </Box>
    </>
  );
});
