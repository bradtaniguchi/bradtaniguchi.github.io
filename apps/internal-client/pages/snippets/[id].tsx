import { useRouter } from 'next/router';

export default function Snippet() {
  const router = useRouter();
  const { id } = router.query;

  return <p>snippet: {id}</p>;
}
