import { useLogger } from '@bradtaniguchi-dev/common-react';
import { SearchIcon, TriangleDownIcon, XIcon } from '@primer/octicons-react';
import { Box, Button, IconButton, SelectPanel, TextInput } from '@primer/react';
import { ItemInput } from '@primer/react/lib/deprecated/ActionList/List';
import { ChangeEventHandler, memo, useCallback, useState } from 'react';
import { useDebounce } from 'react-use';

export interface ListFilterProps {
  /**
   * Callback that is called when the search is finished
   */
  onSearchChange?: (searchValue: string) => unknown;
  /**
   * Callback that is called when the tags are changed.
   *
   * Will provide the list of **all** the selected tags, so the parent
   * can update its state.
   */
  onTagChange?: (selectedTags: string[]) => unknown;
  /**
   * Search debounce in milliseconds, will default to 100.
   */
  searchDebounce?: number;
  /**
   * The list of tags that are available to filter on.
   * If not given, then will not show the dropdown option.
   */
  availableTags?: string[];
  /**
   * The list of available tags that are selected.
   * Will be returned by the `onTagChange` callback as well.
   */
  selectedTags?: string[];
}

/**
 * Filters that are shown on the different list pages shown.
 *
 */
export const ListFilters = memo(function ListFilters(props: ListFilterProps) {
  const {
    searchDebounce,
    onSearchChange,
    availableTags,
    selectedTags,
    onTagChange,
  } = props;

  const logger = useLogger();

  // state
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [debouncedValue, setDebouncedValue] = useState<string>('');
  const [tagsOpened, setTagsOpened] = useState<boolean>(false);

  // derived state
  const showTags = availableTags?.length > 0;
  const availableTagItems =
    availableTags?.map((text) => ({ key: text, text } as ItemInput)) ?? [];
  const selectedTagItems = availableTagItems.filter((availableTagText) =>
    selectedTags?.includes(availableTagText.text)
  );
  // effects
  const [isReadyFn, cancel] = useDebounce(
    () => onSearchChange(debouncedValue),
    searchDebounce ?? 100,
    [debouncedValue, onSearchChange]
  );

  // event handlers
  /**
   * Callback that is called when the user types to search
   * a tag
   */
  const handleTagFilterChange = useCallback(
    (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
      logger.log('handleTagFilterChange', value, e);
      // TODO: implement, will probably need to filter using fuse.js
    },
    [logger]
  );
  const handleTagSelectedChange = useCallback(
    (selected: ItemInput[]) => {
      if (typeof onTagChange === 'function' && Array.isArray(selected))
        onTagChange(selected.map((item) => item.text));
    },
    [onTagChange]
  );
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
        {/* TODO: This isn't working select wise. Needs testing */}
        {showTags ? (
          <SelectPanel
            renderAnchor={({
              children,
              'aria-labelledby': ariaLabelledBy,
              ...anchorProps
            }) => (
              <Button
                trailingIcon={TriangleDownIcon}
                aria-labelledby={` ${ariaLabelledBy}`}
                {...anchorProps}
              >
                {children || 'Select Labels'}
              </Button>
            )}
            placeholderText="Filter Tags"
            open={tagsOpened}
            onOpenChange={setTagsOpened}
            onFilterChange={handleTagFilterChange}
            onSelectedChange={handleTagSelectedChange}
            items={availableTagItems}
            selected={selectedTagItems}
          />
        ) : null}
        <div>
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
        </div>
      </Box>
    </>
  );
});
