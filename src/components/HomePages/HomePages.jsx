
import Banner from './Banner/Banner';
import AddOffer from './AddOffer/AddOffer';
import SpotCategories from './SpotCatgories/SpotCategories';
import BestSellProduct from '../shared/BestSellProduct';
import Link from 'next/link';
import { statistics } from './utilits';
import Services from '../Services/Services';


const HomePages = () => {

    return (
        <div>
           <Banner></Banner>
           <AddOffer></AddOffer>
           <SpotCategories></SpotCategories>
           <BestSellProduct></BestSellProduct>
           <div className='text-centers mx-auto container w-[100%] mb-5'>
            <p className='text-center font-semibold hover:shadow-lg p-10'>  <Link href={'/allProductData'}>View all</Link></p>
           </div>
          <div className='mb-10'>
          <Services statistics={statistics} title={"Our Services"} description={'We offer a range of services designed to provide you with the best experience. From secure packaging to round-the-clock support, discover our commitment to quality.'}></Services>
          </div>
        </div>
    );
};

export default HomePages;