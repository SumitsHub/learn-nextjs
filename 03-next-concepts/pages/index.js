import data from '../data/dummy.json';
function Home(props) {
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

export default Home;
