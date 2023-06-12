import React from "react";
import Education from "./Education";
import Experience from "./Experience";

const About = () => {
  return (
    <div className="mx-24">

      <div class="relative py-4">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-b-2 border-black"></div>
        </div>
        <div class="relative flex">
          <span class="bg-white pr-4 text-black text-3xl font-bold">About Me</span>
        </div>
      </div>
      <p className="pb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        molestias esse distinctio consectetur ut tempora sunt officia aliquam
        doloribus quis inventore neque laudantium quaerat ad, tempore, totam,
        voluptate modi sed dolores enim consequatur ipsa eveniet perferendis
        ducimus. Possimus quo vero, unde ipsum dolore itaque voluptas adipisci
        architecto, similique, quaerat ipsa!
      </p>
      <Education/>
      <Experience/>
    </div>
  );
};

export default About;
