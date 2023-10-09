import { useRouter } from 'next/router';

function Client() {
  const router = useRouter();
  const loadProject = () => {
    // ...

    // router.push(`/clients/max/123`);
    // router.replace(`/clients/max/123`);
    router.push({
      pathname: `/clients/[id]/[projectId]`,
      query: { id: 'max', projectId: '123' },
    });
  };
  return (
    <div>
      <h1>Single Client</h1>
      <button onClick={loadProject}>Go to project</button>
    </div>
  );
}
export default Client;
