import { useEffect, useState } from 'react';
import { default as Fuse } from 'fuse.js';

/**
 * Hook that abstracts away the fuse.js library. This should be loaded
 * only once, but on the side to keep the bundle from including
 * it by default.
 */
export function useFuse<Element>(params: {
  elements: Array<Element>;
  searchOptions?: Fuse.IFuseOptions<Element>;
}) {
  const { elements: initialElements, searchOptions } = params;
  const [fuse, setFuse] = useState<Fuse<Element> | null>(null);
  const [fuseLoading, setFuseLoading] = useState<boolean>(false);
  const [fuseLoadError, setFuseLoadError] = useState<unknown>(null);

  // calculated state
  const fuseLoaded = !!fuse;

  // effects
  useEffect(() => {
    if (!fuse && initialElements && initialElements.length) {
      setFuseLoading(true);
      import('fuse.js')
        .then(
          ({ default: Fuse }) =>
            new Fuse<Element>(initialElements, searchOptions)
        )
        .then((fuse) => setFuse(fuse))
        .catch((err) => setFuseLoadError(err))
        .finally(() => setFuseLoading(false));
    }
  }, [fuse, initialElements, searchOptions]);

  return {
    /**
     * The fuse object instance loaded.
     */
    fuse,
    /**
     * If the fuse library was loaded successfully
     */
    fuseLoaded,
    /**
     * If the fuse library is currently loading
     */
    fuseLoading,
    /**
     * The error that occurred while loading the fuse library
     */
    fuseLoadError,
  };
}
