import { notFound } from "next/navigation";
import productData from "@/data/productContent.json";
import CustomImage from "@/components/custom-image";
import { formatLabel } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productData.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productData.find((item) => item.slug === slug);

  if (!product) return notFound();

  return (
    <main className="p-8 pb-14 max-w-6xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold">{product.title}</h1>
      <CustomImage
        alt=""
        src={product.imagePath}
        width={640}
        height={640}
        className="max-h-80 object-cover w-full"
      />
      <h2 className="text-xl text-neutral-800">{product.subtitle}</h2>
      <p className="mt-4 text-neutral-700">{product.description}</p>

      <section>
        <h3 className="text-2xl font-semibold mt-8">🌱 Product Overview</h3>
        <ul className="list-disc pl-12 mt-3.5 text-neutral-700">
          {Object.entries(product.details).map(([key, value], index) => {
            const label = formatLabel(key);
            return (
              <li key={index}>
                <strong>{label}:</strong> {value}
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mt-8">🔍 Applications</h3>
        {product.applications.map((app, index) => (
          <div key={index} className="mt-3">
            <h4 className="text-xl font-bold">
              {index + 1}. {app.title}
            </h4>
            <ul className="list-disc pl-12 mt-3.5 text-neutral-700">
              {app.content.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        ))}
      </section>

      {product.quality && product.quality.length > 0 && (
        <section>
          <h3 className="text-2xl font-semibold mt-8">✅ Quality Assurance</h3>
          <p className="mt-2">
            We adhere to strict quality control standards:{" "}
          </p>
          <ul className="mt-3.5 list-disc pl-12 text-neutral-700">
            {product.quality.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {product.responsibility && (
        <section>
          <h3 className="text-2xl font-semibold mt-8">
            🌱 Sustainability & Responsibility
          </h3>
          <p className="mt-2">{product.responsibility}</p>
        </section>
      )}

      {product.sustainability && (
        <section>
          <h3 className="text-2xl font-semibold mt-8">
            🌱 Our Commitment to Sustainability
          </h3>
          <p className="mt-2">{product.sustainability}</p>
        </section>
      )}

      <section>
        <h3 className="text-2xl font-semibold mt-8">📦 Logistics</h3>
        <ul className="list-disc pl-12 mt-3.5 text-neutral-700">
          {Object.entries(product.logistics).map(([key, value], index) => {
            const label = formatLabel(key);
            return (
              <li key={index}>
                <strong>{label}:</strong> {value}
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
