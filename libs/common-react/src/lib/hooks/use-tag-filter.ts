import { useCallback, useMemo, useState } from 'react';

/**
 * Hook that is used to manage tag filter/selection against
 * an object with `tags` property, which needs to be an array of unique strings.
 *
 * @param params single param object
 * @param params.elements the actual elements to manage
 */
export function useTagFilter<Element extends { tags: string[] }>(params: {
  elements: Array<Element>;
}) {
  const { elements } = params;

  const selectableTags = useMemo(
    () =>
      Array.from(
        new Set(
          elements.reduce(
            (acc, el) =>
              el && el.tags && Array.isArray(el.tags) && el.tags.length
                ? [...acc, ...el.tags]
                : acc,
            [] as string[]
          )
        )
      ).sort((a, b) => a.localeCompare(b)),
    [elements]
  );

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // returned callbacks
  const setSelectedTagsWithoutDuplicates = useCallback(
    (tags: string[]) => setSelectedTags(Array.from(new Set(tags))),
    []
  );
  const selectTag = useCallback(
    (tag: string) => {
      if (selectedTags.includes(tag)) return;
      setSelectedTags([...selectedTags, tag]);
    },
    [selectedTags]
  );
  const unselectTag = useCallback(
    (tag: string) => {
      if (!selectedTags.includes(tag)) return;
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    },
    [selectedTags]
  );
  const toggleTag = useCallback(
    (tag: string) => {
      if (selectedTags.includes(tag)) {
        setSelectedTags(selectedTags.filter((t) => t !== tag));
      } else {
        setSelectedTags([...selectedTags, tag]);
      }
    },
    [selectedTags]
  );

  return {
    /**
     * Sets the  all selected tags. Automatically removes duplicates.
     */
    setSelectedTags: setSelectedTagsWithoutDuplicates,
    /**
     * Adds the tag to the list of selected tags.
     * Will skip and do nothing if the tag is already selected.
     */
    selectTag,
    /**
     * Removes the tag from the list of selected tags.
     */
    unselectTag,
    /**
     * Toggles the tag in the list of selected tags.
     */
    toggleTag,
    /**
     * The list of tags available to select. Auto-sorted alphabetically
     */
    selectableTags,
    /**
     * The list of currently selected tags.
     */
    selectedTags,
    /**
     * Boolean if all items are selected
     */
    isAllSelected: selectedTags.length === selectableTags.length,
  };
}
