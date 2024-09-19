"use client";
import CheckoutCouter from "@/components/checkoutProductCart/CheckoutCouter";
import CheckoutProductCart from "@/components/checkoutProductCart/CheckoutProductCart";
import SelectOptions from "@/components/shareComponents/SelectOptions";
import useAxiosSecure from "@/lib/hooks/apiHooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [localStorageProducts, setlocalStorageProducts] = useState([]);
  const [productIds, setProductIds] = useState(null);
 
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [matchingProductData, setMatchingProductData] = useState([])  
  const session = useSession();
  const axiosSecure = useAxiosSecure();
  const mainProductIdes = params.id.split("%2C");


  const subtotal = matchingProductData?.reduce(
    (acc, pd) => parseInt(acc) + parseInt(pd.price) * parseInt(pd.buyProductCount),
    0
  );
  const { data: userData = {}, refetch } = useQuery({
    queryKey: ["userData", session?.data?.user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/checkout/api/update-user/${session?.data?.user?.email}`
      );
      return data;
    },
  });
  const { mutateAsync } = useMutation({
    mutationFn: async (user) => {
      // console.log(user, "tis is user data")
      const { data } = await axiosSecure.put(
        `/checkout/api/update-user/${session?.data?.user?.email}`,
        user
      );
      return data
    },
  });

  const handleLocation = async (e) => {
    e.preventDefault();
    const location = {
      district: districts.find((district) => district.id === selectedDistrict)
        ?.name,
      upazila: upazilas.find((upazila) => upazila.id === selectedUpazila)?.name,
      name: e.target.name.value,
      mobile: e.target.mobile.value,
      road: e.target.road.value,
      home: e.target.homeNo.value,
    };

   const result =  await mutateAsync(location);
    refetch()
  };

  useEffect(() => {
    const storedProducts = localStorage.getItem("product");
    const products = storedProducts ? JSON.parse(storedProducts) : [];
    setlocalStorageProducts(products);
  }, []);
  // district data load
  useEffect(() => {
    fetch("/districts.json")
      .then((res) => res.json())
      .then((data) => setDistricts(data));
  }, []);
  // upazilas data load
  useEffect(() => {
    fetch("/upazilas.json")
      .then((res) => res.json())
      .then((data) => setUpazilas(data));
  }, []);

  // filter selected district upazilas
  useEffect(() => {
    const filteredUpazilas = upazilas.filter(
      (upazila) => upazila.district_id === selectedDistrict
    );
    setFilteredUpazilas(filteredUpazilas);
  }, [selectedDistrict, upazilas]);
  useEffect(()=>{
  
    const matchingData = localStorageProducts.filter((item) =>
      mainProductIdes.includes(item.mainProductId)
    );
    setMatchingProductData(matchingData)
  },[localStorageProducts])
  return (
    <div className="flex container mx-auto bg-[#F4F4F4] gap-5">
      <div className="w-[70%]">
        <div className="flex justify-between items-center p-5 m-5 bg-white">
          <div>
            <p className="font-bold">Shipping address</p>
            <p>
              <span className="font-semibold">{userData?.name}</span>{" "}
              <span>{userData?.mobile}</span>
            </p>
            <div className="flex gap-3">
              {" "}
              <p>
                <span className="font-semibold">District:</span>{" "}
                <span>{userData?.district},</span>
              </p>
              <p>
                <span className="font-semibold">Upazila:</span>{" "}
                <span>{userData?.upazila}</span>
              </p>
            </div>

           <div className="flex gap-3">
           <p>
              <span className="font-semibold">Road:</span>{" "}
              <span>{userData?.road},</span>
            </p>
            <p>
              <span className="font-semibold">Home:</span>{" "}
              <span>{userData?.home}</span>
            </p>
           </div>
          </div>
          {/* modal */}
          <div>
            <button
              className="text-[#293614] font-semibold"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Change
            </button>
            <dialog id="my_modal_3" className="modal ">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <form action="" onSubmit={handleLocation}>
                  <p className="font-semibold">Contact information</p>
                  <div className="flex items-center gap-5">
                    <div>
                      <label htmlFor="">
                        Name*:
                        <input
                          name="name"
                          defaultValue={userData?.name}
                          className="focus:bg-transparent focus:outline-none  w-full px-3 py-2 border rounded-md border-[#8DBE3F]"
                          type="text"
                        />
                      </label>
                    </div>
                    <div>
                      <label htmlFor="">
                        Mobile*:
                        <input
                          name="mobile"
                          defaultValue={userData?.mobile}
                          className="focus:bg-transparent focus:outline-none  w-full px-3 py-2 border rounded-md border-[#8DBE3F]"
                          type="text"
                        />
                      </label>
                    </div>
                  </div>
                  <p className="font-semibold mt-7">Address</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-5">
                      <div className="space-y-2 flex-1">
                        <div className="flex justify-between ">
                          <label className="text-sm">District*</label>
                        </div>
                        <select
                        defaultValue={userData?.district}
                          name="district"
                          value={selectedDistrict}
                          onChange={(e) => {
                            setSelectedDistrict(e.target.value);
                          }}
                          required
                          className="focus:bg-transparent focus:outline-none select select-error w-full px-3 py-2 border rounded-md border-[#8DBE3F]  "
                        >
                          <option disabled value="">
                            Select Your District
                          </option>
                          {districts.map((district) => (
                            <SelectOptions
                              key={district?.id}
                              district={district}
                            ></SelectOptions>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2 flex-1">
                        <div className="flex justify-between">
                          <label className="text-sm">Upazila*</label>
                        </div>
                        <select
                        defaultValue={userData?.upazila}
                          name="upazila"
                          value={selectedUpazila}
                          onChange={(e) => {
                            setSelectedUpazila(e.target.value);
                          }}
                          required
                          className="select select-error w-full px-3 py-2 border rounded-md border-[#8DBE3F] focus:bg-transparent focus:outline-none"
                        >
                          <option disabled value="">
                            Select Your Upazila
                          </option>
                          {filteredUpazilas.map((upazila) => (
                            <option key={upazila?.id} value={upazila.id}>
                              {upazila.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {/* --------------------------------------------------- */}
                    <div className="flex items-center gap-5">
                      <label htmlFor="">
                        Road*:
                        <input
                          name="road"
                          defaultValue={userData?.road}
                          className="focus:bg-transparent focus:outline-none w-full px-3 py-2 border rounded-md border-[#8DBE3F]"
                          type="text"
                        />
                      </label>
                      <div>
                        <label htmlFor="">
                          Home*:
                          <input
                            name="homeNo"
                            defaultValue={userData?.home}
                            className="focus:bg-transparent focus:outline-none w-full px-3 py-2 border rounded-md border-[#8DBE3F]"
                            type="text"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <input
                    method="dialog"
                      className="text-center bg-[#8DBE3F] hover:bg-[#5B8021] hover:text-white w-64 py-3 font-semibold rounded-lg"
                      type="submit"
                      value={"Submit"}
                    />
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </div>
        {/* product cart */}
        <div>
        {/* matchingData */}
        {
          matchingProductData?.map((product, ind)=>(<CheckoutProductCart product={product} key={idx}></CheckoutProductCart> ) )
        }
        </div>
      </div>
      <div className="w-[30%]">
      <CheckoutCouter subtotal={subtotal} matchingData={matchingProductData} setMatchingProductData={setMatchingProductData} mainProductIdes={mainProductIdes}></CheckoutCouter>
        </div>
    </div>
  );
};

export default Page;
