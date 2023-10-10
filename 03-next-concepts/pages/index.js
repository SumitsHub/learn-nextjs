import fs from 'fs/promises';
import path from 'path';

function Home(props) {
  const { products: data } = props;
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {data.map(item => {
          return <li key={item.id}>{item.title}</li>;
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

  return {
    props: {
      products: data,
    },
    revalidate: 10, // seconds
  };
}

export default Home;
