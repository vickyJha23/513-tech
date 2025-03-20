import React, { useState } from "react";
import { toast } from "sonner";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsEnvelopePaper } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa";


import Map from "../components/Map"


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handlSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (name && email && message) {
    } else {
      toast.error("All field required");
    }
  };

  return (
    <section className="h-auto pt-16">
      <div className="container mx-auto h-full">
        <div
          className="flex
                flex-col gap-4 items-center"
        >
          <h2 className="text-center text-3xl tracking-wide font-semibold">
            Contacts{" "}
            <span className="w-3 h-3 bg-yellow-500 inline-block rounded-[50%]"></span>
          </h2>
          <p className="text-center max-w-md mx-auto text-gray-500">
            Feel free to reach out to us for any inquiries or collaborations.
            We're here to help!
          </p>
          <form
            className="mx-4 md:mx-0 flex flex-col
                       gap-4 items-center max-w-xl mt-5 border py-10 px-6 rounded-lg border-gray-300 relative"
          >
            <div className="w-full flex flex-col md:flex-row gap-4">
              <input
                type="text"
                className="border border-gray-300 rounded-lg w-full px-3 py-2"
                placeholder="Name"
                name="name"
                id="name"
              />
              <input
                type="email"
                className="border border-gray-300 rounded-lg w-full px-3 py-2"
                placeholder="Email"
                name="email"
                id="email"
              />
            </div>
            <input
              type="tel"
              className="border border-gray-300 rounded-lg w-full px-3 py-2"
              placeholder="Phone"
              name="phone"
              id="phone"
            />
            <textarea
              name="query"
              placeholder="Enquiry"
              className="border border-gray-300 rounded-lg w-full resize-none px-3 py-2"
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <button
              onClick={handlSubmit}
              className="bg-gradient-to-r from-cyan-500 to-sky-500  px-3 py-2 inline-block uppercase relative top-15 rounded text-white cursor-pointer"
            >
              send query
            </button>
          </form>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center md:items-stretch gap-4 mt-16">
  {[
    { icon: <IoPhonePortraitOutline />, text: "+91 7798-546-927\n+91 7020-197-056" },
    { icon: <BsEnvelopePaper />, text: "513techvision@gmail.com" },
    { icon: <LuMapPin />, text: "Plot no.6 indradev niwas near iskcon temple palghar east 401404" },
    { icon: <FaGlobe />, text: "https://513techvision.com/" },
  ].map((item, index) => (
    <div key={index} className="w-[320px] max-w-md md:w-2/5 lg:w-1/5 flex flex-col gap-2 items-center justify-center rounded py-4 h-full">
      <div className="text-5xl text-yellow-400">{item.icon}</div>
      <p className="text-slate-300 text-center max-w-[220px] whitespace-pre-line">{item.text}</p>
    </div>
  ))}
        </div>
      </div>
      <Map />
    </section>
  );
};

export default Contact;
