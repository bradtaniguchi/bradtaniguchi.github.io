export interface MetaTagProps {
  /**
   * The description of the page.
   */
  description: string;
  /**
   * The keywords for this page.
   */
  keywords: string[];
}

/**
 * Component that renders meta tags for SEO
 */
export const MetaTags = function MetaTags(props: MetaTagProps) {
  const { description, keywords } = props;
  return (
    <>
      <meta data-react-helmet="true" name="description" content={description} />
      <meta
        data-react-helmet="true"
        property="og:description"
        content={description}
      />
      <meta
        data-react-helmet="true"
        property="og:title"
        content="bradtaniguchi.dev"
      />
      <meta
        data-react-helmet="true"
        property="og:url"
        content="https://bradtaniguchi.dev"
      />
      <meta data-react-helmet="true" property="og:site_name" content="npm" />
      <meta
        data-react-helmet="true"
        name="keywords"
        content={keywords.join(',')}
      />
      <meta data-react-helmet="true" name="twitter:card" content="summary" />
      <meta
        data-react-helmet="true"
        name="twitter:url"
        content="https://bradtaniguchi.dev"
      />
      <meta
        data-react-helmet="true"
        name="twitter:title"
        content="https://bradtaniguchi.dev"
      />
      <meta
        data-react-helmet="true"
        name="twitter:description"
        content={description}
      />
    </>
  );
};
