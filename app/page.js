export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(params.id);

  return {
    title: product.title,
  };
}

export default function Page() {
  return <>App page</>;
}
