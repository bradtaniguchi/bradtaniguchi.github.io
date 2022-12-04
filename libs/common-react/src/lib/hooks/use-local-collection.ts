import { default as Fuse } from 'fuse.js';
import { useEffect, useMemo, useState } from 'react';

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
 * @param params.limit number that can be passed to limit the number of results
 *
 */
export function useLocalCollection<Element>(params: {
  elements: Array<Element>;
  filters?: Array<CollectionFilter<keyof Element, ValueOf<Element>>>;
  sortBy?: keyof Element;
  sortDir?: 'asc' | 'dsc';
  search?: string;
  searchOptions?: Fuse.IFuseOptions<Element>;
  limit?: number;
}) {
  const {
    elements: initialElements,
    filters,
    sortBy,
    sortDir,
    search,
    searchOptions,
    limit,
  } = params;

  const [fuse, setFuse] = useState<Fuse<Element> | null>(null);
  const [fuseLoadError, setFuseLoadError] = useState<unknown>(null);

  /**
   * Effect to manage the loading of the fuse library.
   */
  useEffect(() => {
    if (!fuse && initialElements && initialElements.length) {
      import('fuse.js')
        .then(
          ({ default: Fuse }) =>
            new Fuse<Element>(initialElements, searchOptions)
        )
        .then((fuse) => {
          setFuse(fuse);
        })
        .catch((err) => {
          setFuseLoadError(err);
        });
    }
  }, [fuse, initialElements, searchOptions]);

  /**
   * Memoize the calculation to save on performance.
   * TODO: might move to multiple chained memo calls
   */
  const results = useMemo(() => {
    let filteredElements: Array<Element>;

    filteredElements = initialElements.filter((element) =>
      (filters || []).every(({ key, value }) => element[key] === value)
    );

    if (fuse && search) {
      fuse.setCollection(filteredElements);
      filteredElements = fuse.search(search).map((result) => result.item);
    }

    if (sortBy && sortDir) {
      filteredElements.sort((a, b) => {
        if (a[sortBy] === b[sortBy]) return 0;
        if (sortDir === 'asc') return a[sortBy] > b[sortBy] ? 1 : -1;
        return a[sortBy] < b[sortBy] ? 1 : -1;
      });
    }

    if (limit && typeof limit === 'number') {
      filteredElements = filteredElements.slice(0, limit);
    }

    return filteredElements;
  }, [initialElements, filters, sortBy, sortDir, search, limit, fuse]);

  return {
    /**
     * The list of filtered results
     */
    results,
    /**
     * The error provided if fuse could not be loaded.
     * If this is provided, then searching will not work.
     */
    fuseLoadError,
    /**
     * The number of results matching
     */
    numOfResults: results.length,
    /**
     * The difference between the inputted elements and the filtered results
     */
    diffResults: initialElements.length - results.length,
  };
}
