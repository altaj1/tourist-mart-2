"use client"
import SelectOptions from '@/components/shareComponents/SelectOptions';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const page = ({params}) => {
  const [localStorageProducts, setlocalStorageProducts] = useState([]);
  const [productIds, setProductIds] = useState(null);
  // location state 
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);
  const [selectedUpazila, setSelectedUpazila] = useState('');
  const mainProductIdes = params.id.split('%2C')

console.log(mainProductIdes, "this is product id")
const matchingData = localStorageProducts.filter(item => mainProductIdes.includes(item.mainProductId));
// for (let i = 0; i < localStorageProducts.length; i++) {
//    if (localStorageProducts[i].mainProductId == mainProductIdes[i]) {
//     console.log(localStorageProducts[i], "inseide for loop")
//    }
  
// }
// console.log(matchingData, "matchingData");

const handleLocation = (e)=>{
  e.preventDefault();
  const location = {
    district: districts.find(district => district.id === selectedDistrict)?.name,
    upazila: upazilas.find(upazila => upazila.id === selectedUpazila)?.name,
  }
  console.log(location)
}

  useEffect(() => {
    const storedProducts = localStorage.getItem("product");
      const products = storedProducts ? JSON.parse(storedProducts) : [];
    setlocalStorageProducts(products)
  }, []);
    // district data load 
    useEffect(() => {
      fetch('/districts.json')
          .then(res => res.json())
          .then(data => setDistricts(data))
  }, [])

  // upazilas data load
  useEffect(() => {
      fetch('/upazilas.json')
          .then(res => res.json())
          .then(data => setUpazilas(data))
  }, [])

  // filter selected district upazilas
  useEffect(() => {
      const filteredUpazilas = upazilas.filter(upazila => upazila.district_id === selectedDistrict);
      setFilteredUpazilas(filteredUpazilas);
  }, [selectedDistrict, upazilas]);
    return (
        <div>
          <form action="" onSubmit={handleLocation}>
          <div className='flex gap-5'>
                        <div className="space-y-2 flex-1">
                            <div className="flex justify-between">
                                <label className="text-sm">District*</label>
                            </div>
                            <select
                                name="district"
                                value={selectedDistrict}
                                onChange={(e) => {
                                    setSelectedDistrict(e.target.value);
                                }}

                                required
                                className="select select-error w-full px-3 py-2 border rounded-md border-red-500 bg-gray-800 text-gray-100 "
                            >
                                <option disabled value="">Select Your District</option>
                                {districts.map((district) => (
                                    <SelectOptions key={district?.id} district={district}></SelectOptions>
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
                                className="select select-error w-full px-3 py-2 border rounded-md bg-gray-800 text-gray-100 "
                            >
                                <option disabled value="">Select Your Upazila</option>
                                {filteredUpazilas.map((upazila) => (
                                    <option key={upazila?.id} value={upazila.id}>
                                        {upazila.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <input type="submit" value={"submit"} />
          </form>
            thsi is check out page
        </div>
    );
};

export default page;