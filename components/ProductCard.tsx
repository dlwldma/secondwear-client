import { Product } from "@/types/product";
import Image from "next/image";
export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col justify-start self-start relative">
      <div
        className="aspect-square w-full relative m-auto
        rounded-xl
        hover:cursor-pointer bg-gray-50"
      >
        <div
          className="flex justify-center p-2 items-center min-w-[2rem] min-h-[2rem] w-[12%] h-[12%] absolute z-50 top-4 right-4 bg-white rounded-[100%]
        hover:bg-red-200"
        >
          <Image
            className=""
            src="/icon/heart-icon.svg"
            width={25}
            height={25}
          />
        </div>
        <Image
          className="rounded-xl object-contain"
          fill
          alt="una imagen"
          src={product.image}
        />
      </div>
      <span className="flex justify-between">
        <h3 className="font-semibold font-lg">{product.title}</h3>
        <h3 className="font-semibold font-lg">${product.price}</h3>
      </span>
      <h5 className="font-sm">{product.description}</h5>
      <div>
        {[...Array(product.stars)].map((x, i) => {
          return (
            <span className="text-[#9b6484] text-lg " key={i}>
              &#9733;
            </span>
          );
        })}
      </div>
      <button
        className="w-[fit-content] px-5 py-2 
        text-sm
      border-2 border-[#9b6484]
      rounded-3xl text-[#9b6484]"
      >
        Añadir al carro
      </button>
    </article>
  );
}
