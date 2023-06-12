import React from "react";

const Skills = () => {
  return (
    <div className="mx-24 pb-6">
      <div className="">
        <div class="relative py-4">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-b-2 border-black"></div>
          </div>
          <div class="relative flex">
            <span class="bg-white pr-4 text-black text-3xl font-bold">
              Skills
            </span>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-[33%] flex justify-center text-xl font-bold">Languages</div>
        <div className="w-[33%] flex justify-center text-xl font-bold">FrontEnd</div>
        <div className="w-[33%] flex justify-center text-xl font-bold">BackEnd</div>
        <div className="w-[33%] flex justify-center text-xl font-bold">Design</div>
      </div>

    </div>
  );
};

export default Skills;
