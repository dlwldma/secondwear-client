import { PRODUCTS } from "@/mock/products";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

export default function Index() {
  return (
    <section className="w-[min(1250px,95vw)] m-auto mt-10">
      <div>
        <section className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4 auto-rows-max">
          {PRODUCTS.map((product: Product, key) => {
            return <ProductCard product={product} key={key} />;
          })}
        </section>
      </div>
    </section>
  );
}
