"use client";
import CustomImage from "@/components/custom-image";
import React from "react";

type Product = {
  id: string;
  visible: boolean;
  name: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  // details: Record<string, string | undefined>;
  details: Record<string, string | string[] | undefined>;
  exportInformation?: {
    seasonality: string;
    portOfLoading: string[];
    packing: string;
    paymentTerm: string[];
    processingTime: string;
    minOrderQuantity: {
      sea: string;
      air: string;
    };
  };
  advantages?: string[];
  icon: string;
  imagePath: string;
};

type Props = {
  products: Product[];
  lang?: "en" | "id";
};

const ProductList: React.FC<Props> = ({ products, lang = "en" }) => {
  const visibleProducts = products.filter((product) => product.visible);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-content-center">
      {visibleProducts.map((product) => (
        <div
          className="max-w-sm flex flex-col border rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out group bg-neutral-800 border-neutral-700"
          key={product.id}
        >
          <a href={`/product/${product.id}`}>
            <div className="rounded-t-lg overflow-hidden">
              <CustomImage
                className="group-hover:scale-120 transition-transform duration-300 ease-in-out"
                src={product.imagePath}
                alt=""
                width={640}
                height={640}
              />
            </div>
          </a>
          <div className="p-5 flex flex-col flex-1">
            <a href={`/product/${product.id}`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-200">
                {product.name[lang]}
              </h5>
            </a>
            <p className="mb-3 font-normal text-neutral-500">
              {product.description[lang]}
            </p>
            <a
              href={`/product/${product.id}`}
              className="mt-auto w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-neutral-400 rounded-lg focus:ring-4 focus:outline-none  bg-neutral-700 border border-neutral-600 hover:bg-neutral-600 hover:text-white focus:ring-neutral-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
