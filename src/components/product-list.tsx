"use client";
import CustomImage from "@/components/custom-image";
import React from "react";

type Product = {
  id: string;
  name: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  details: Record<string, string | undefined>;
  icon: string;
  imagePath: string;
};

type Props = {
  products: Product[];
  lang?: "en" | "id";
};

const ProductList: React.FC<Props> = ({ products, lang = "en" }) => {
  return (
    <div className="p-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-content-center ">
      {products.map((product) => (
        <div
          className="max-w-sm flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm"
          key={product.id}
        >
          <a href="#">
            <CustomImage
              className="rounded-t-lg"
              src={product.imagePath}
              alt=""
              width={640}
              height={640}
            />
          </a>
          <div className="p-5 flex flex-col flex-1">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {product.name[lang]}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">
              {product.description[lang]}
            </p>
            <a
              href="#"
              className="mt-auto w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
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
