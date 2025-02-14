"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import imageCompression from "browser-image-compression";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLink } from "react-icons/fa";
import LoginComponent from "./Login";

interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  githubLink: string;
  projectLink: string;
  category: string;
}

interface FormData {
  name: string;
  description: string;
  image: string;
  githubLink: string;
  projectLink: string;
  category: string;
}

const ProductFormComponent = () => {
  const categories: string[] = [
    "HTML & CSS",
    "React-js",
    "Next-js",
    "Node-js",
    "JavaScript",
  ];

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    image: "",
    githubLink: "",
    projectLink: "",
    category: "",
  });
  const [editId, setEditId] = useState<string | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isAuthenticated) fetchProducts();
  }, [isAuthenticated]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get<Product[]>(
        "https://backend-alpha-smoky-74.vercel.app/api/products"
      );
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size is too large. Please upload an image less than 5MB.");
        return;
      }

      const options = {
        maxSizeMB: 5,  
        maxWidthOrHeight: 1920,  
        useWebWorker: true,
        fileType: "image/jpeg", 
      };
      try {
        const compressedFile = await imageCompression(file, options);
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, image: reader.result as string });
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error("Image compression error:", error);
        toast.error("Failed to compress image. Please try again.");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(
          `https://backend-alpha-smoky-74.vercel.app/api/products/${editId}`,
          formData
        );
        toast.success("Product updated successfully!");
      } else {
        const res = await axios.post(
          "https://backend-alpha-smoky-74.vercel.app/api/products",
          formData
        );
        toast.success("Product added successfully!");
        setProducts([res.data, ...products]); // Add the new product at the beginning of the list
      }
      setFormData({
        name: "",
        description: "",
        image: "",
        githubLink: "",
        projectLink: "",
        category: "",
      });
      setEditId(null);
    } catch (error) {
      console.error("Error adding/updating product:", error);
      toast.error("An error occurred while adding/updating the product!");
    }
  };

  const handleEdit = (product: Product) => {
    setFormData(product);
    setEditId(product._id);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDeleteClick = (id: string) => {
    setProductToDelete(id);
    setShowConfirmModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (productToDelete) {
      try {
        await axios.delete(
          `https://backend-alpha-smoky-74.vercel.app/api/products/${productToDelete}`
        );
        setProducts(products.filter(product => product._id !== productToDelete));
        toast.success("Product deleted successfully!");
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error("An error occurred while deleting the product!");
      }
    }
    setShowConfirmModal(false);
    setProductToDelete(null);
  };

  const handleDeleteCancel = () => {
    setShowConfirmModal(false);
    setProductToDelete(null);
  };

  return (
    <div className="p-6 z-[500] min-h-screen top-20 relative">
      {!isAuthenticated ? (
        <LoginComponent onLoginSuccess={() => setIsAuthenticated(true)} />
      ) : (
        <div className="max-w-4xl mx-auto container">
          <div className="text-center pb-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl font-bold">
              {editId ? "Edit Product" : "Add New Product"}
            </span>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 p-6 rounded-lg shadow-lg items-center justify-between bg-[#1a172f5e] backdrop-blur-md relative z-[500] border-[#8d60d4c5] border text-white"
            ref={formRef}
          >
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 bg-gray-800 text-white border-2 border-[#8d60d4c5]"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 bg-gray-800 text-white border-2 border-[#8d60d4c5]"
            />
            <input
              type="text"
              name="githubLink"
              placeholder="GitHub Link"
              value={formData.githubLink}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 bg-gray-800 text-white border-2 border-[#8d60d4c5]"
            />
            <input
              type="text"
              name="projectLink"
              placeholder="Project Link"
              value={formData.projectLink}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 bg-gray-800 text-white border-2 border-[#8d60d4c5]"
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 bg-gray-800 text-white border-2 border-[#8d60d4c5]"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              required
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 bg-gray-800 text-white border-2 border-[#8d60d4c5]"
            />
            <button
              type="submit"
              className="w-full button-primary text-white font-bold py-3 px-6 rounded-lg"
            >
              {editId ? "Update Product" : "Add Product"}
            </button>
          </form>

          <div className="text-2xl font-bold mt-8 mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl font-bold">
              All Projects
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-36">
            {products.map((product) => (
              <div
                key={product._id}
                className="border-2 border-[#bf97ff7b] rounded-lg shadow-md text-white"
              >
                {product.image && (
                  <div className="relative w-full h-[200px] rounded-t-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      
                      onError={(e) => {
                        console.error("Image failed to load:", e);
                        toast.error("Failed to load image. Please try again.");
                      }}
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                  <p className="mt-2 z-[600] text-gray-400">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center space-x-4">
                    <a
                      href={product.githubLink}
                      className="text-[#8d60d4c5] hover:underline flex items-center font-bold"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                    <a
                      href={product.projectLink}
                      className="text-[#8d60d4c5] hover:underline flex items-center font-bold"
                    >
                      <FaLink className="mr-2" /> Project
                    </a>
                  </div>
                  <div className="mt-4 space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(product._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-6">
              Are you sure you want to delete this product?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleDeleteCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        style={{ marginTop: "60px" }}
      />
    </div>
  );
};

export default ProductFormComponent;