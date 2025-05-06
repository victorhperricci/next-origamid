interface ProductProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function ProductSlugPage({ params }: ProductProps) {
  const { slug } = await params;

  // console.log(slug);

  return (
    <div>
      <h1>{slug.join(" ")}</h1>
    </div>
  );
}
