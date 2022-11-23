import { useEffect, useMemo, useState } from 'react';
import { default as Fuse } from 'fuse.js';

export type ValueOf<T> = T[keyof T];

/**
 * A collection filter is used with `useLocalCollection` to
 * filter down values.
 *
 * Currently only supports "equals". In the future we will support functional
 * checks.
 */
export interface CollectionFilter<Key extends string | number | symbol, Value> {
  /**
   * The key to compare to
   */
  key: Key;

  /**
   * The value to compare to
   */
  value: Value;
}

/**
 * Hook that is used to manage a collection of data
 *
 * @param params single param object
 * @param params.elements the actual elements to manage
 * @param params.filters array of filters to apply to returned data
 * @param params.sortBy they key to sort by
 * @param params.search string to search against the elements.
 *
 */
export function useLocalCollection<Element>(params: {
  elements: Array<Element>;
  filters?: Array<CollectionFilter<keyof Element, ValueOf<Element>>>;
  sortBy?: keyof Element;
  sortDir?: 'asc' | 'dsc';
  search?: string;
  searchOptions?: Fuse.IFuseOptions<Element>;
}) {
  const {
    elements: initialElements,
    filters,
    sortBy,
    sortDir,
    search,
    searchOptions,
  } = params;

  const [fuse, setFuse] = useState<Fuse<Element> | null>(null);

  useEffect(() => {
    if (initialElements && initialElements.length) {
      import('fuse.js')
        .then(
          ({ default: Fuse }) =>
            new Fuse<Element>(initialElements, searchOptions)
        )
        .then((fuse) => {
          setFuse(fuse);
        })
        // TODO: add error state
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        .catch(() => {});
    }
  }, [initialElements, searchOptions]);

  const elements = useMemo(() => {
    const filteredElements = initialElements.filter((element) =>
      (filters || []).every(({ key, value }) => element[key] === value)
    );

    return filteredElements;
    // TODO: finalize
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialElements, filters, sortBy, sortDir, search, fuse]);

  return { elements };
}
