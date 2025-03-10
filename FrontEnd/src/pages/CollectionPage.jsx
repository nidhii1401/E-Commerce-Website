import React, { useEffect, useRef, useState } from "react";
import FilterSideBar from "../components/Products/FilterSideBar";
import { FaFilter } from "react-icons/fa";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from '../components/Products/ProductGrid'

const CollectionPage = () => {

  const [product, setProduct] = useState([]);
  const sideRef = useRef(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    // close sidebar if clicked outside
    if (sideRef.current && !sideRef.current.contains(e.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    // add event listner for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // clean event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

    }
  },[]);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500?random=11",
              altText: "Stylish Jacket 1",
            },

            {
              url: "https://picsum.photos/500?random=21",
              altText: "Stylish Jacket 2",
            },
          ],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500?random=31",
              altText: "Stylish Jacket 1",
            },

            {
              url: "https://picsum.photos/500?random=41",
              altText: "Stylish Jacket 2",
            },
          ],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500?random=55",
              altText: "Stylish Jacket 1",
            },

            {
              url: "https://picsum.photos/500?random=65",
              altText: "Stylish Jacket 2",
            },
          ],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500?random=73",
              altText: "Stylish Jacket 1",
            },

            {
              url: "https://picsum.photos/500?random=83",
              altText: "Stylish Jacket 2",
            },
          ],
        },
        {
          _id: 5,
          name: "Product 5",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500?random=73",
              altText: "Stylish Jacket 1",
            },

            {
              url: "https://picsum.photos/500?random=86",
              altText: "Stylish Jacket 2",
            },
          ],
        },
        {
          _id: 6,
          name: "Product 6",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500?random=72",
              altText: "Stylish Jacket 1",
            },

            {
              url: "https://picsum.photos/500?random=81",
              altText: "Stylish Jacket 2",
            },
          ],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500?random=71",
              altText: "Stylish Jacket 1",
            },

            {
              url: "https://picsum.photos/500?random=88",
              altText: "Stylish Jacket 2",
            },
          ],
        },
        {
          _id: 8,
          name: "Product 8",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500?random=70",
              altText: "Stylish Jacket 1",
            },

            {
              url: "https://picsum.photos/500?random=89",
              altText: "Stylish Jacket 2",
            },
          ],
        },
      ];
      setProduct(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Filter Sidebar */}

      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      <div
        ref={sideRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0  left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSideBar />
      </div>

      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4"> all Collection</h2>

        {/* sort option */}
        <SortOptions/>

        {/* Product grid  */}
        <ProductGrid products={product}/>
      </div>
    </div>
  );
};

export default CollectionPage;
