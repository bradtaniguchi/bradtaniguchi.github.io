import { SearchIcon, XCircleIcon } from '@primer/octicons-react';
import { IconButton, TextInput } from '@primer/react';
import { memo, useCallback, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppHeaderSearchProps {
  mode?: 'full' | 'icon';
}

export const AppHeaderSearch = memo(function AppHeaderSearch(
  props: AppHeaderSearchProps
) {
  const [showFullSearch, setShowFullSearch] = useState(false);

  const onShowSearchHandler = useCallback(() => setShowFullSearch(true), []);

  const onCloseSearchHandler = useCallback(() => setShowFullSearch(false), []);

  const fullSearch = (
    <>
      <TextInput
        block
        type="search"
        trailingVisual={props.mode === 'full' ? SearchIcon : undefined}
        trailingAction={
          props.mode === 'icon' ? (
            <IconButton
              aria-label="Close Search"
              icon={XCircleIcon}
              onClick={onCloseSearchHandler}
            />
          ) : undefined
        }
        aria-label="Search"
        name="Search"
        placeholder="Search"
        autoComplete="search"
        loading={false}
      />
    </>
  );

  if (props.mode === 'full') return fullSearch;
  if (showFullSearch) return fullSearch;

  return (
    <IconButton
      aria-label="Search"
      icon={SearchIcon}
      onClick={onShowSearchHandler}
    />
  );
});
