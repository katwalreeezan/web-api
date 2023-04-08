import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import ReactHtmlParser from 'react-html-parser'
const Services = () => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    setLoading(true);
    fetch("https://admin.naxa.com.np/api/services")
      .then((res) => res.json())
      .then((data) => setValue(data))
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
    <h1 className="max-w-sm font-bold text-3xl  mx-auto text-center font-serif text-yellow-500 my-4">
        Our Services
      </h1>
      <p className="max-w-2xl mx-auto font-semibold text-4xl text-center"><span className="text-indigo-600">NAXA</span> , we work on ideas; ideas that can provide <span className="text-yellow-500">simple solutions</span> to complex problems</p>
    <div className="max-w-[1320px] mx-auto border border-slate-300 my-3  mt-9">
      
      {value.map((item) => (
        <div className="grid md:grid-cols-2 grid-cols-1 items-center my-6  ">
          <img src={item.photo} alt='/'  className="w-[500px] h-72 mx-auto " />
          <div className="md:w-[600px] w-[350px] mx-auto text-justify py-4">
          <h1 className="font-bold text-2xl text-indigo-600">{item.title}</h1>
          <p className="my-3 py-3 " >{ReactHtmlParser(item.description1)}</p>
          <p className="my-3 py-3 bg-neutral-300 px-5" data-aos='zoom-in'>{ReactHtmlParser(item.description2)}</p>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
};

export default Services;
