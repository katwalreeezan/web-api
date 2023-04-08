import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import Footer from "../Footer/Footer";

const Home = () => {
  useEffect(()=>{
AOS.init({duration:2000})
  },[])
  return (
    <div>
      <div className=" w-full md:h-screen relative my-2">
        <img
          src="./images/home.png"
          alt="cover"
          className="w-full md:h-screen object-cover "
        />
      </div>

      <h1 className="max-w-sm font-bold text-3xl  mx-auto text-center font-serif text-yellow-500 my-9">
        About Us
      </h1>
      <div className=" relative max-w-9xl mx-auto">
        <p className="max-w-sm mx-auto text-center md:max-w-3xl text-2xl font-bold font-nunito px-4" data-aos='zoom-in'>
          <span className="text-indigo-600">NAXA</span> is a Geo-ICT technology consulting that strives for innovation in
          geospatial technologies to provide solutions to contemporary problems
          of humanity.
        </p>
        <p className="max-w-sm mx-auto text-center md:max-w-5xl font-MyFont text-lg  my-5 px-4" data-aos='fade-up'>
              Since its establishment, it has successfully worked on more than 300
          projects of varying scales with national and local governments, UN
          agencies, private sectors, and CSOs in and outside of Nepal. It has
          more than seven years of experience in developing technological
          solutions and delivering high-quality services that apply to disaster
          risk reduction, infrastructure development, health, education, and
          good governance.
        </p>
        <div className="max-w-9xl mx-auto grid md:grid-cols-2  ">
          <img
            src="./images/bug.png"
            className="block w-[500px] h-72 object-cover mx-auto"
            alt="bug"
          />
          <img
            src="./images/think.png"
            className="block :w-[500px]  h-72 md:object-cover mx-auto"
            alt="think"
          />
        </div>
        <div></div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
