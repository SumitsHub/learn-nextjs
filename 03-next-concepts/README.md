## NextJS Key Features


### Page Pre-Rendering
- Pre building HTML content along with data
- Helps SEO optimization
- 2 forms of Pre-Rendering 
  - Static Generation
  - Server-side Rendering

#### Static Generation with getStaticProps
- NOTE -> in React,by default basic HTML file containing div with id 'root' gets generated without any data in it
- Execute that will run during build time
- Server-side code
```js
  export async function getStaticProps(context) { ... } 
```
- Can't access client API's inside getStaticProps functions
- This function must be exported from component inside "pages" directory only
- Example getStaticProps with server side code
```js
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
  const filePath = path.join(process.cwd(), 'data', 'dummy.json');
  const jsonDdata = await fs.readFile(filePath);
  const data = JSON.parse(jsonDdata);

  return {
    props: {
      products: data,
    },
  };
}

export default Home;

```

#### Incremental Static Generation (ISR)
- Regenerate page after specified time in seconds
- Example code -
```js
export async function getStaticProps() {
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
```


### Pre-Generated Paths (Routes)
- Dynamic pages ([id].js etc) don't just need data, also need to know which [id] values will be available
- Multiple concrete [id] page instances (e.g. id = 1, id = 2, etc) are pre-generated
- export async function getStaticPaths() {...}

### getStaticPaths
- required for dynamic routes
- Example for [productId].js file -

```js
export async function getStaticPaths() {
  return {
    paths: [
      { params: { productId: '1' } },
      { params: { productId: '2' } },
      { params: { productId: '3' } },
      { params: { productId: '4' } },
    ],
    fallback: false,
  };
}

```