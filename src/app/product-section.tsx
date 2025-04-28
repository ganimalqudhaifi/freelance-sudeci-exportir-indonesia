import ProductList from "@/components/product-list";
import products from "@/data/products.json";

export default function ProductSection() {
  return (
    <section
      className="p-16 flex flex-col items-center bg-neutral-800 border-gray-700"
      id="products"
    >
      <h2 className="font-bold text-5xl text-white">Featured Products</h2>
      <p className="pt-2 pb-8 text-lg text-gray-400">
        Explore our finest export commodities
      </p>
      <ProductList products={products} lang="en" />
    </section>
  );
}
