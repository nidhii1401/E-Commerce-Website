import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewItems = () => {
  const scrollRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [CanScrollLeft, setCanScrollLeft] = useState(false);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jackets",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jackets",
        },
      ],
    },

    {
      _id: "2",
      name: "Stylish Jackets",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Stylish Jackets",
        },
      ],
    },

    {
      _id: "3",
      name: "Stylish Jackets",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Stylish Jackets",
        },
      ],
    },

    {
      _id: "4",
      name: "Stylish Jackets",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Stylish Jackets",
        },
      ],
    },

    {
      _id: "5",
      name: "Stylish Jackets",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Stylish Jackets",
        },
      ],
    },

    {
      _id: "6",
      name: "Stylish Jackets",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Stylish Jackets",
        },
      ],
    },

    {
      _id: "7",
      name: "Stylish Jackets",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Stylish Jackets",
        },
      ],
    },

    {
      _id: "8",
      name: "Stylish Jackets",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Stylish Jackets",
        },
      ],
    },
  ];


  const handleMouseDown = (e) =>{
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }

  const handleMouseUporLeave = (e) => {
    setIsDragging(false);
  }

  const handleMouseMove = (e) => {
    if(!isDragging) return;

    const x = scrollRef.current.offsetLeft;
    const walk = x - startX;

    scrollRef.current.scrollLeft - scrollLeft - walk;

  }

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
  };
  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScroll =
        container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
    }

    console.log({
      scrollLeft: container.scrollLeft,
      clientWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
      offsetLeft: scrollRef.current.offsetLeft,
    });
  };
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      
      return () => container.removeEventListener("scroll",updateScrollButtons )
    }
  },[]);

  return (
    <div className="py-16 px-8">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!CanScrollLeft}
            className={`p-2 rounded-full border ${CanScrollLeft ? "bg-white text-black" : "bg-white text-black cursor-not-allowed"} `}
          >
            <FiChevronLeft className="text-lg" />
          </button>
          <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`p-2 rounded-full border ${canScrollRight ? "bg-white text-black" : "bg-white text-black cursor-not-allowed"} `}
          >
            <FiChevronRight className="text-lg" />
          </button>
        </div>
      </div>

      {/* Image scroller */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUporLeave}
        onMouseLeave={handleMouseUporLeave}
      >
        {newArrivals.map((product) => (
          <div key={product._id} className="min-w-[30%] relative">
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 opacity-90 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to="#" className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1 ">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewItems;
