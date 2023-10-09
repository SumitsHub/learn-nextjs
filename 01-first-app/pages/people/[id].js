import { useRouter } from 'next/router';

export default function () {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query); // {id: '1'}

  return (
    <div>
      <h1>Person</h1>
    </div>
  );
}
