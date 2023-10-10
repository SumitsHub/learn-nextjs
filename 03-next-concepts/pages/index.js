import fs from 'fs/promises';
import Link from 'next/link';
import path from 'path';

function Home(props) {
  const { products: data } = props;
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {data.map(item => {
          return (
            <li key={item.id}>
              <Link href={`/products/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  console.log('(Re-)Generating...');
  const filePath = path.join(process.cwd(), 'data', 'dummy.json');
  const jsonDdata = await fs.readFile(filePath);
  const data = JSON.parse(jsonDdata);

  if (!data) {
    return {
      redirect: {
        destination: '/no-data', // app route
      },
    };
  }

  if (data.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data,
    },
    revalidate: 10, // seconds
  };
}

export default Home;
