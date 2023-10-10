import fs from 'fs/promises';
import path from 'path';

function ProductPage(props) {
  const { loadedProduct } = props;
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context; // dynamic route paramter value

  const productId = params.productId;

  console.log('(Re-)Generating Product detail ...');
  const filePath = path.join(process.cwd(), 'data', 'dummy.json');
  const jsonDdata = await fs.readFile(filePath);
  const data = JSON.parse(jsonDdata);
  const product = data.find(item => item.id === parseInt(productId));

  return {
    props: {
      loadedProduct: product,
    },
  };
}

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

export default ProductPage;
