import Link from 'next/link';

const clients = [
  { id: 'max', name: 'Maxmilian' },
  { id: 'manu', name: 'Manuel' },
];
function ClientsPage() {
  return (
    <div>
      <h1>Clients Home Page</h1>

      <ul>
        {clients.map(client => {
          return (
            <li key={client.name}>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ClientsPage;
