import { useRouter } from 'next/router';

function ClientProject() {
  const router = useRouter();
  console.log(router.pathname); // /clients/[id]/[projectId]
  console.log(router.query); // {id: '1', projectId: '123'}
  return <div>Client's Project Page</div>;
}
export default ClientProject;
