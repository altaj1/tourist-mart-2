import { signIn } from 'next-auth/react';

import { useRouter } from 'next/router';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialSignin = () => {
    
    // const searchParams = useSearchParams()
  
    // const path = searchParams.get('redirect')
    
      const handleSocialLogin = (provider) => {
          const resp = signIn(provider, {
            redirect : true,
            callbackUrl : path ? path : '/'
          })
      }
    return (
        <div className="flex gap-8 items-center justify-center mt-10">
        <button className=""onClick={() => handleSocialLogin('google')}>
          <p className="bg-white rounded-full overflow-hidden">
            <span className="text-4xl  text-[#0866FF] overflow-hidden hover:shadow-lg ">
            <FcGoogle />
            </span>
          </p>
        </button>
        <button className="" onClick={() => handleSocialLogin('facebook')}>
          <p className="bg-white rounded-full overflow-hidden">
            <span className="text-4xl  text-[#0866FF] overflow-hidden hover:shadow-lg ">
              <FaFacebook />
            </span>
          </p>
        </button>
        {/* <button className="">
          <p className="bg-[#DDDDDD] rounded-full overflow-hidden">
            <span className="text-4xl  text-[#333333] overflow-hidden hover:shadow-lg ">
              <FaApple />
            </span>
          </p>
        </button> */}
      </div>
    );
};

export default SocialSignin;