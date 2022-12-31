import { useMemo, useState } from 'react';

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
          elements.reduce((acc, el) => {
            return [...acc, ...el.tags];
          }, [] as string[])
        )
      ).sort((a, b) => a.localeCompare(b)),
    [elements]
  );

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return {
    /**
     * The list of tags available to select. Auto-sorted alphabetically
     */
    selectableTags,
    /**
     * Sets the  all selected tags. Automatically removes duplicates.
     */
    setSelectedTags: (tags: string[]) =>
      setSelectedTags(Array.from(new Set(...tags))),
    /**
     * Adds the tag to the list of selected tags.
     * Will skip and do nothing if the tag is already selected.
     */
    selectTag: (tag: string) => {
      if (selectedTags.includes(tag)) return;
      setSelectedTags([...selectedTags, tag]);
    },
    unselectTag: (tag: string) => {
      if (!selectedTags.includes(tag)) return;
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    },
    toggleTag: (tag: string) => {
      if (selectedTags.includes(tag)) {
        setSelectedTags(selectedTags.filter((t) => t !== tag));
      } else {
        setSelectedTags([...selectedTags, tag]);
      }
    },
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
