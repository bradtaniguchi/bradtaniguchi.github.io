import { Header } from '@primer/react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppHeaderProps {}

/**
 * The header bar that appears on every page. Provider navigation
 */
export default function AppHeader(props: AppHeaderProps) {
  return (
    <Header>
      <Header.Item>
        <Header.Link href="#">
          <span>bradtaniguchi.dev</span>
        </Header.Link>
      </Header.Item>
      <Header.Item full>Menu</Header.Item>
    </Header>
  );
}
