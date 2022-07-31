import { Theme, useLogger } from '@bradtaniguchi-dev/common-react';
import {
  CodeIcon,
  Icon,
  MarkdownIcon,
  PersonIcon,
  ProjectIcon,
  QuestionIcon,
  ThreeBarsIcon,
} from '@primer/octicons-react';
import {
  ActionMenu,
  Box,
  Button,
  Header,
  IconButton,
  NavList,
  StyledOcticon,
} from '@primer/react';
import { ThemeContext } from '../../utils/theme-context';
import { useRouter } from 'next/router';
import { useCallback, useContext, useMemo } from 'react';
import { AppHeaderSearch } from './app-header-search';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppHeaderProps {
  /**
   * Feature flag if we are to display the search field.
   * This requires support for auto-complete, and
   * data to be passed.
   */
  showSearch?: boolean;
  /**
   * Feature flag for snippets feature.
   */
  showSnippets?: boolean;
  /**
   * Feature flag for the blog feature
   */
  showBlog?: boolean;
}

/**
 * The header bar that appears on every page. Provider navigation
 */
export default function AppHeader(props: AppHeaderProps) {
  const router = useRouter();
  const logger = useLogger();
  const { theme, setTheme } = useContext(ThemeContext);

  const themeToggleHandle = useCallback(() => {
    let nextTheme: Theme;

    if (theme === 'light') {
      nextTheme = 'grey';
    } else if (theme === 'grey') {
      nextTheme = 'dark';
    } else {
      nextTheme = 'light';
    }

    logger.log('[AppHeader]', {
      currentTheme: theme,
      nextTheme,
    });

    setTheme(nextTheme);
  }, [logger, setTheme, theme]);

  const isCurrent = useCallback(
    (href: string) => router.asPath === href,
    [router]
  );

  const links: Array<{
    href: string;
    icon: Icon;
    name: string;
  }> = useMemo(
    () => [
      {
        href: '/projects',
        icon: ProjectIcon,
        name: 'Projects',
      },
      ...(props.showSnippets
        ? [
            {
              href: '/snippets',
              icon: CodeIcon,
              name: 'Snippets',
            },
          ]
        : []),
      ...(props.showBlog
        ? [
            {
              href: '/blog',
              icon: MarkdownIcon,
              name: 'Blog',
            },
          ]
        : []),
      {
        href: '/about',
        icon: QuestionIcon,
        name: 'About',
      },
    ],
    []
  );

  return (
    <Header>
      <Header.Item>
        <Header.Link href="/">
          <StyledOcticon icon={PersonIcon} size={16} sx={{ mr: 2 }} />
          <span>bradtaniguchi.dev</span>
        </Header.Link>
      </Header.Item>

      {props.showSearch ? (
        <Header.Item full>
          {/* TODO: Add support for icon version for mobile*/}
          <AppHeaderSearch mode="full" />
        </Header.Item>
      ) : (
        <Header.Item full></Header.Item>
      )}

      {links.map(({ href, icon, name }) => (
        <Box display={['none', 'block']} key={href}>
          <Header.Item>
            <Header.Link href={href}>
              <StyledOcticon icon={icon} size={16} sx={{ mr: 2 }} />
              <span>{name}</span>
            </Header.Link>
          </Header.Item>
        </Box>
      ))}

      <Box>
        {/* theme switcher */}
        <Button onClick={themeToggleHandle}>theme</Button>
      </Box>

      <Box display={['block', 'none']}>
        <Header.Item>
          <ActionMenu>
            <ActionMenu.Anchor>
              <IconButton icon={ThreeBarsIcon} aria-label="Menu" />
            </ActionMenu.Anchor>

            <ActionMenu.Overlay>
              <NavList>
                {links.map(({ href, icon, name }) => (
                  <NavList.Item
                    href={href}
                    key={href}
                    aria-current={isCurrent(href)}
                  >
                    <StyledOcticon icon={icon} size={16} sx={{ mr: 2 }} />
                    <span>{name}</span>
                  </NavList.Item>
                ))}
              </NavList>
            </ActionMenu.Overlay>
          </ActionMenu>
        </Header.Item>
      </Box>
    </Header>
  );
}
