import { getMarkdown } from '../utils/get-markdown';

export function Index(props: { content: string }) {
  console.log('props', props);
  return <div dangerouslySetInnerHTML={{ __html: props.content }}></div>;
}

export default Index;

export async function getStaticProps() {
  const content = await getMarkdown('README.md');
  return {
    props: {
      content,
    },
  };
}
