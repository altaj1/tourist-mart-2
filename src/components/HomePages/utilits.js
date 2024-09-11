import axios from "axios"

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