import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { StaticProject } from '../../models/project';

export interface ProjectProps {
  project: StaticProject;
}

export default function Project(props: ProjectProps) {
  const router = useRouter();
  const { name } = router.query;

  return <p>Project: {name}</p>;
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<ProjectProps> {
  const { name } = params;
  // TODO: get projects by name
  const project: StaticProject = {} as unknown as StaticProject;
  return {
    project,
  };
}
