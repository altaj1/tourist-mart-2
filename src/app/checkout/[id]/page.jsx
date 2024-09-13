"use client";
import SelectOptions from "@/components/shareComponents/SelectOptions";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [localStorageProducts, setlocalStorageProducts] = useState([]);
  const [productIds, setProductIds] = useState(null);
  // location state
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const mainProductIdes = params.id.split("%2C");

  console.log(mainProductIdes, "this is product id");
  const matchingData = localStorageProducts.filter((item) =>
    mainProductIdes.includes(item.mainProductId)
  );
  // for (let i = 0; i < localStorageProducts.length; i++) {
  //    if (localStorageProducts[i].mainProductId == mainProductIdes[i]) {
  //     console.log(localStorageProducts[i], "inseide for loop")
  //    }

  // }
  // console.log(matchingData, "matchingData");

  const handleLocation = (e) => {
    e.preventDefault();
    const location = {
      district: districts.find((district) => district.id === selectedDistrict)
        ?.name,
      upazila: upazilas.find((upazila) => upazila.id === selectedUpazila)?.name,
    };
    console.log(location);
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
  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
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
                    defaultValue={"altaj"}
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
                    defaultValue={"Mobile"}
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
                    defaultValue={"Mobile"}
                    className="focus:bg-transparent focus:outline-none w-full px-3 py-2 border rounded-md border-[#8DBE3F]"
                    type="text"
                  />
                </label>
              <div>
               
                <label htmlFor="">
                  Home*:
                  <input
                  name="homeNo"
                    defaultValue={"Home No"}
                    className="focus:bg-transparent focus:outline-none w-full px-3 py-2 border rounded-md border-[#8DBE3F]"
                    type="text"
                  />
                </label>
              </div>
            
            </div >
            </div>
            <div className="text-center mt-3">
              <input
                className="text-center bg-[#8DBE3F] hover:bg-[#5B8021] hover:text-white w-64 py-3 font-semibold rounded-lg"
                type="submit"
                value={"Submit"}
              />
            </div>
          </form>
        </div>
      </dialog>
      thsi is check out page
    </div>
  );
};

export default page;
