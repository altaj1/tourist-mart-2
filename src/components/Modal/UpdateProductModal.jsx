"use client"
import useAxiosSecure from "@/lib/hooks/apiHooks/useAxiosSecure";
import useGetProductDetails from "@/lib/hooks/getDataHook/useGetProductDetails";
import { useQuery } from "@tanstack/react-query";
const UpdateProductModal = ({productId}) => {
  // const {productDetails, isLoading} = useGetProductDetails(productId);
 
  //   if (!productId) {
  //       return null; // or a loading spinner
  //   }
  // console.log(productId)
    const axiosSecure = useAxiosSecure();
    const { data: productDetails = {}, isLoading } = useQuery({
        queryKey: ["detailsProduct", productId],
        queryFn: async () => {
          const { data } = await axiosSecure(`/product-details/api/${productId}`);
          return data?.data;
        },
      });
    console.log(productDetails, "or a use get prduct details")
    return (
        <dialog id="my_modal_update_product" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">{productDetails.name}</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    );
};

export default UpdateProductModal;