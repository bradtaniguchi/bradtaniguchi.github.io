import { useRouter } from 'next/router';

export default function Project() {
  const router = useRouter();
  const { name } = router.query;

  return <p>Project: {name}</p>;
}
