import BannerSection from "./banner-section";
import ProductList from "./product-list";
import products from "@/data/products.json";

export default function Page() {
  return (
    <>
      <BannerSection />
      <ProductList products={products} lang="en" />
    </>
  );
}
