import ProductList from "@/components/product-list";
import products from "@/data/products.json";

export default function ProductSection() {
  return (
    <section className="p-16 flex flex-col items-center">
      <h2 className="font-bold text-4xl">Featured Products</h2>
      <p className="pt-2 pb-8">Explore our finest export commodities</p>
      <ProductList products={products} lang="en" />
    </section>
  );
}
