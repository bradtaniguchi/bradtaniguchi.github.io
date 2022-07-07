export interface GoogleAnalyticsProps {
  /**
   * The google analytics tracking key.
   * If not added this component will render nothing.
   *
   * **This could be a security risk if dynamic.**
   */
  key?: string;
}

/**
 * A component that adds <script> tags to the document to
 * add and provide google analytics. This should be added
 * to the <head> of the document once.
 */
export function GoogleAnalytics(props: GoogleAnalyticsProps) {
  return props.key ? (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${props.key}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${props.key}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  ) : null;
}
