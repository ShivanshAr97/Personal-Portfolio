import React from "react";
import { AiOutlineGithub, AiOutlineGoogle, AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="flex mx-16 items-center my-24">
      <div className="flex mx-8 w-[50%] flex-col">
        <span className="text-2xl font-medium">
          Hey! 👋
          <br />
        </span>
        <div className="flex items-end text-2xl my-2 font-medium">
          <span className="pr-2">I am </span>
          <span className="text-4xl font-bold text-red-600">
            Shivansh Arora
          </span>
        </div>
        <br />
        <span className="text-lg capitalize">
          a self-taught programmer, full stack web developer, open source
          enthusiast, problem solver
        </span>
        <div className="my-6 flex">
          <span className=" transform duration-300 cursor-pointer hover:bg-blue-700 p-2 mx-2 text-white rounded-full bg-blue-500"><FaLinkedinIn size="24px"/></span>
          <span className=" transform duration-300 cursor-pointer hover:bg-green-700 p-2 mx-2 text-white rounded-full bg-green-900"><AiOutlineGithub size="28px"/></span>
          <span className=" transform duration-300 cursor-pointer hover:bg-pink-700 p-2 mx-2 text-white rounded-full bg-pink-500"><FaInstagram size="28px"/></span>
          <span className=" transform duration-300 cursor-pointer hover:bg-green-700 p-2 mx-2 text-white rounded-full bg-green-500"><AiOutlineGoogle size="28px"/></span>
          <span className=" transform duration-300 cursor-pointer hover:bg-blue-600 p-2 mx-2 text-white rounded-full bg-blue-400"><AiOutlineTwitter size="28px"/></span>
        </div>
        <div className="flex">
        <button className="bg-red-500 w-32 text-white font-medium px-3 py-1 rounded-lg mx-2">Contact Me</button>
        <button className="bg-red-500 w-32 text-white font-medium px-3 py-1 rounded-lg mx-2">Resume</button>
        </div>
      </div>
      <div className="w-[50%] flex justify-center">
        <img
          className="w-[30vw] object-cover rounded-lg"
          src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default Main;
