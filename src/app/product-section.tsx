import ProductList from "@/components/product-list";
import products from "@/data/products.json";

export default function ProductSection() {
  return (
    <section
      className="px-4 md:px-16 py-16 flex flex-col items-center bg-neutral-900 border-gray-700"
      id="products"
    >
      <h2 className="font-bold text-5xl text-neutral-100">Featured Products</h2>
      <p className="pt-2 pb-10 md:pb-8 text-lg text-neutral-300">
        Explore our finest export commodities
      </p>
      <ProductList products={products} lang="en" />
    </section>
  );
}
