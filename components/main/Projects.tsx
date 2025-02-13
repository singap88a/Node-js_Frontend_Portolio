"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  
   
} 
 
from "react-icons/fa";  
import { FaShoppingBag } from 'react-icons/fa'; // استيراد الأيقونة

import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";


import Link from "next/link";
import { FaLink } from "react-icons/fa";

// تعريف نوع المنتج
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  githubLink?: string;
  projectLink?: string;
}

// تعريف الفئات
const categories: string[] = [
  "All",
  "HTML & CSS",
  "React-js",
  "Next-js",
  "Node-js",
  "JavaScript",
];

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);  
  const productsPerPage = 9;  

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (): Promise<void> => {
    try {
      const res = await axios.get<Product[]>(
        "https://backend-alpha-smoky-74.vercel.app/api/products"
      );
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // تصفية المنتجات حسب الفئة
  const filteredProducts: Product[] =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // حساب المنتجات المعروضة في الصفحة الحالية
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // تغيير الصفحة
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // الانتقال إلى الصفحة السابقة
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // الانتقال إلى الصفحة التالية
  const goToNextPage = () => {
    if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-5 container" id="projects">
    <h2 className="text-center text-2xl font-bold mb-6 text-white z-[500] flex items-center justify-center gap-2">
       <span  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl font-bold " >🛍 All Products</span> {/* العنوان */}
    </h2>

      {/* قائمة الفئات */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1); // إعادة تعيين الصفحة إلى 1 عند تغيير الفئة
            }}
            className={`px-4 py-2 text-lg font-semibold   transition-colors     text-center   cursor-pointer rounded-lg    z-[500] ${
              selectedCategory === category
                ? " bg-[#7126cdad] text-white"
                : "button-primary text-gray-300 hover:bg-[#bf97ff3d]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* عرض المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div
              key={product._id}
              className="border-2 border-[#8d60d4c5] rounded-lg shadow-md text-white h-[392px]"
            >
              {product.image && (
                <div className="relative w-full h-[200px] rounded-t-lg overflow-hidden ">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <div
              // className="bg-[#120d34] backdrop-blur-md rounded-b-lg relative z-[10]"
              >
                <div className="bg-[#1a172f8d] backdrop-blur-md rounded-b-lg  relative z-[500] h-[189px]">
                                  <div className="px-4 z-[600]  ">
                  <h3 className="text-xl font-semibold  pt-4 z-[600]">
                    {product.name}
                  </h3>
                  <p className="mt-2 z-[600] text-gray-400">
                    {product.description}
                  </p>
                </div>
                <div className="flex justify-between items-center p-4  ">
                  <div className="flex gap-2 items-center">
                    <a
                      href="https://github.com/singap88a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-[#8d60d4c5]   px-4 py-2 rounded-md   transition-colors z-[600] w-full button-primary text-white font-bold  "
                    >
                      <FaLink className="z-[600]" />
                    </a>

                    <a href={product.githubLink} className="z-[600] text-3xl">
                      <FaGithub />{" "}
                    </a>
                  </div>
                  <div className="">
                    {product.projectLink && (
                      <a
                        href={product.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <FaExternalLinkAlt className="z-[600] hover:text-[#bf97ffa2] relative transition-all text-2xl" />
                      </a>
                    )}
                  </div>
                </div>
                </div>

              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl font-bold col-span-full text-white">
            🚀 No products available for this category
          </p>
        )}
      </div>

      {/* أزرار الترقيم (Pagination) مع أيقونات السابق والتالي */}
      <div className="flex justify-center items-center mt-8 gap-2 z-[300]">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`px-3 py-3 text-lg font-semibold rounded-md transition-colors z-[300]  relative ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <FaAnglesLeft />
        </button>

        {Array.from(
          { length: Math.ceil(filteredProducts.length / productsPerPage) },
          (_, i) => i + 1
        ).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={`px-4 py-2 text-lg font-semibold rounded-md transition-colors z-[300] relative ${
              currentPage === pageNumber
                ? "bg-[#7126cdad] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={goToNextPage}
          disabled={
            currentPage === Math.ceil(filteredProducts.length / productsPerPage)
          }
          className={`px-3 py-3 text-lg font-semibold rounded-md transition-colors z-[300] relative ${
            currentPage === Math.ceil(filteredProducts.length / productsPerPage)
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <FaAnglesRight />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
