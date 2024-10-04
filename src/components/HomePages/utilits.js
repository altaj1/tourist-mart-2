import axios from "axios"
import { FcOnlineSupport } from "react-icons/fc";
import { GiBoxUnpacking } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
export const photosGallery = [
    {
        images:'/images/gadget-removebg-preview.png',
        images1:'/images/gadget1.jpeg',
        images2:'/images/gadge2.jpg',
        images3:'/images/gadge3.jpg',
    },
    {
        images:'/images/shoes-removebg-preview.png',
        images1:'/images/shoes1.jpeg',
        images2:'/images/shoes2.jpg',
        images3:'/images/shoes3.jpg',
    },
    {
        images:'/images/fatuya-removebg-preview.png',
        images1:'/images/gadget1.jpeg',
        images2:'/images/fatuya2.jpg',
        images3:'/images/fatuya3.jpg',
    },
]
export const imageUpload = async image =>{
    const formData = new FormData()
    // console.log(formData, "this is form data")
    formData.append("image", image)
    const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, formData)
    return data.data.display_url
}

export const statistics = [
    {
      title: 'Product Packing',
      icone: GiBoxUnpacking,
      description:
        'Eco-friendly packaging ensures products arrive safely and sustainably.',
      value: '1,200',
      gradientFrom: 'blue-500',
      gradientTo: 'indigo-500',
    },
    {
      title: '24x7 Support',
      icone: FcOnlineSupport,
      description:
        'Our team is available round-the-clock to assist you with any queries.',
      value: '$50,000',
      gradientFrom: 'green-500',
      gradientTo: 'teal-500',
    },
    {
      title: 'Secure Payment',
      description:
        'Your transactions are protected with advanced security encryption.',
      value: '5',
      icone:RiSecurePaymentLine,
      gradientFrom: 'yellow-500',
      gradientTo: 'orange-500',
    },
  ];