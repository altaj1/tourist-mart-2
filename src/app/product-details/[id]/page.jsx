"use client";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import useAxiosSecure from "@/lib/hooks/apiHooks/useAxiosSecure";
import { productId } from "@/lib/store/features/cart/cartSlice";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page = ({ params }) => {
  const [buyProductCount, setBuyProductCount] = useState(1);
  const [localStorageProduct, setLocalStorageProduct] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image
  const session = useSession();
  const axiosSecure = useAxiosSecure();
  const dispatch = useDispatch();
  const [userLoading, setUserLoading] = useState(true);

  const router = useRouter();
  
  const handleAddToCart = (id) => {
    dispatch(productId(id));
  };

  const { data: productDetails = {}, isLoading } = useQuery({
    queryKey: ["detailsProduct"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/product-details/api/${params.id}`);
      return data?.data;
    },
  });

  const {
    SpotName,
    _id,
    coverImage,
    currentPrice,
    description,
    discount,
    name,
    groupImage,
    price,
  } = productDetails;

  const handleBuy = async () => {
    const buyData = {
      ...productDetails,
      addEmail: session?.data?.user?.email,
      mainProductId: productDetails._id,
      buyProductCount: buyProductCount,
    };
    delete buyData._id;
    localStorage.setItem(
      "product",
      JSON.stringify([...localStorageProduct, buyData])
    );
  };

  useEffect(() => {
    const storedProducts = localStorage.getItem("product");
    const products = storedProducts ? JSON.parse(storedProducts) : [];
    setLocalStorageProduct(products);
  }, []);

  useEffect(() => {
    if (session?.status === "loading") {
      return;
    }
    if (session?.status === "unauthenticated" || !session?.data.user) {
      setUserLoading(false);
      router.push("/login");
    } else {
      setUserLoading(true);
    }
  }, [session?.data?.user, userLoading]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="lg:flex md:flex mx-auto container p-5 gap-5">
      {/* Main Cover Image Section */}
      <div className="w-full md:w-1/2 lg:w-1/2 mx-auto ">
       <div className="bg-[#F5F5F5] p-3 rounded-md shadow-md">
       <Image
          height={300}
          width={400}
          className="w-full lg:h-[500px] xl:h-[500px] md:h-[500px] rounded-md duration-500"
          src={selectedImage || coverImage} // Display selected or default cover image
          alt="Cover Image"
        />
       </div>

        {/* Group Images */}
        <div className="flex flex-wrap  gap-5 mt-4 rounded-md ">
          {groupImage.map((img, idx) => (
            <div
              key={idx}
              className=" rounded-md hover:outline outline-[#8dbe3f] transition-all duration-150 ease-in-out"
              onMouseEnter={() => setSelectedImage(img)} // Update main image on hover
              onMouseLeave={() => setSelectedImage(null)} // Reset on hover out
            >
              <Image
                height={150}
                width={150}
                className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover rounded-lg"
                src={img}
                alt={`Group Image ${idx + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Information Section */}
      <div className="space-y-8 lg:w-[50%] md:w-[50%]">
        <h1 className="text-2xl font-medium">{name}</h1>
        {/* Rating Section */}
        <div className="rating">
          {/* Rating input elements */}
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#8dbe3f]" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#8dbe3f]" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#8dbe3f]" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#8dbe3f]" defaultChecked />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#8dbe3f]" />
        </div>
        <p className="text-lg">
          <span>Brand:</span> <span className=" font-medium text-[#5a7a25]">{SpotName}</span>
        </p>
        <hr />
        <p className="text-[#5a7a25] text-2xl font-semibold">
          BDT <span>{currentPrice}</span>
        </p>
        <p className="font-semibold">
          <span className="opacity-70">BDT {price}</span> <span>-{discount}%</span>
        </p>
        <hr />
        <p>{description}</p>
        <hr />
        <p className="flex space-x-5 text-lg">
          <span className="p-2">Quantity</span>
          <div className="flex gap-2 items-center text-lg font-semibold">
            <button
              disabled={buyProductCount === 1}
              onClick={() => setBuyProductCount(buyProductCount - 1)}
            >
              <FiMinus />
            </button>
            <p>{buyProductCount}</p>
            <button onClick={() => setBuyProductCount(buyProductCount + 1)}>
              <FaPlus />
            </button>
          </div>
        </p>
        <div className="space-x-10">
          <button onClick={handleBuy}>
            <Link
              href={`/checkout/${_id}`}
              className="px-8 py-3 bg-[#8DBE3F] font-semibold hover:bg-[#5B8021] hover:text-white"
            >
              Buy Now
            </Link>
          </button>
          <button
            onClick={() => handleAddToCart(_id)}
            className="px-6 py-3 bg-[#5B8021] font-semibold hover:bg-[#8DBE3F] hover:text-gray-800 text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
