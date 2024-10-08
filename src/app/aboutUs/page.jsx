// components/AboutUs.jsx
import { statistics } from "@/components/HomePages/utilits";
import Services from "@/components/Services/Services";
import Image from "next/image";
import React from "react";
const AboutUs = () => {

  return (
    <section className="py-12 container mx-auto">
      <div className=" mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 items-center justify-center">
          {/* About Us Title and Description */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-gray-600 text-lg leading-relaxed ">
              Welcome to PureSuper! We are dedicated to creating innovative
              solutions that drive positive change and empower communities. Our
              team of passionate professionals is committed to delivering
              excellence and inspiring others to embrace new technologies and
              opportunities. At PureSuper, we believe in the power of creativity
              and collaboration to solve the {`world's`} most pressing
              challenges. We strive to foster a culture of continuous learning
              and growth, where every idea is valued, and every voice is heard.
              Our focus is on building sustainable, scalable solutions that not
              only meet today’s needs but also anticipate the future. Join us on
              our journey as we work towards a brighter, more connected world.
            </p>
          </div>
          <div className="">
            <Image
              className="rounded-full mx-auto mb-4 "
              src="/images/aboutus2.gif"
              alt="cart image"
              width={"400"}
              height={"400"}
              unoptimized={true}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Our Vision */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our vision is to empower individuals and communities to achieve
              their full potential through innovative and accessible solutions.
              We strive to be a leader in our industry, inspiring others with
              our commitment to excellence and social responsibility.
            </p>
          </div>

          {/* Our Mission */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to create sustainable value for our customers,
              employees, and stakeholders by providing high-quality products and
              services that improve lives and promote positive social and
              environmental impact.
            </p>
          </div>
        </div>

        {/* Our Team */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Team</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto pb-10">
            Our team is a diverse group of talented professionals united by a
            shared passion for innovation and excellence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-center gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-2">
              <Image
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src={"https://i.ibb.co.com/zPzqptC/Daniel-Lee.jpg"}
                alt="Team Member 1"
                width={"100"}
                height={"100"}
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-500">CEO & Founder</p>
              <p className="text-gray-600 mt-2">
                John is an experienced entrepreneur with a passion for
                innovation and leadership.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-2">
              <Image
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src={
                  "https://i.ibb.co.com/FgWbgP0/the-uk-version-of-actress-rebel-wilsons-autobiography-is-set-HCE3-WRRXKFFM3-KKIRCKC7-XRLYU.jpg"
                }
                alt="Team Member 2"
                width={"100"}
                height={"100"}
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-gray-500">Chief Marketing Officer</p>
              <p className="text-gray-600 mt-2">
                Jane is a marketing strategist with over 10 years of experience
                in digital marketing and brand management.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-2">
              <Image
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src={"https://i.ibb.co.com/2YxMvds/Nathan-Johnson.jpg"}
                alt="Team Member 3"
                width={"100"}
                height={"100"}
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Michael Lee
              </h3>
              <p className="text-gray-500">Head of Development</p>
              <p className="text-gray-600 mt-2">
                Michael leads our development team with a focus on innovation,
                quality, and user-centric design.
              </p>
            </div>
          </div>
        </div>
      <Services statistics={statistics} title={"Our Services"} description={'We offer a range of services designed to provide you with the best experience. From secure packaging to round-the-clock support, discover our commitment to quality.'}></Services>
      </div>
    </section>
  );
};

export default AboutUs
