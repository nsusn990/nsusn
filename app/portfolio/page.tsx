import Image from "next/image";
import React from "react";

function Portfolio() {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h1 className="text-4xl font-bold">
        Our <span className="text-[#4464AD]">Portfolio</span>
      </h1>

      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-4 py-6 z-0">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-300">
            <Image
              src="https://mxgqqsaqzf.ufs.sh/f/OZf1u5pmfTq8R3JIJNepO9hbjdDIRwJnZHx2PGUu35BzYvNe"
              alt=""
              width={220}
              height={220}
            />
            <div className="absolute opacity-0 hover:opacity-100 aspect-square bg-gray-800 text-white inset-0 bg-opacity-50 flex items-end p-3">
              <div className="w-full">
                <h1 className="text-xl font-semibold">Hello Boys</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                  pariatur exercitationem enim rerum!
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-300">
            <Image
              src="https://mxgqqsaqzf.ufs.sh/f/OZf1u5pmfTq8R3JIJNepO9hbjdDIRwJnZHx2PGUu35BzYvNe"
              alt=""
              width={220}
              height={220}
            />
            <div className="absolute opacity-0 hover:opacity-100 aspect-square bg-gray-800 text-white inset-0 bg-opacity-50 flex items-end p-3">
              <div className="w-full">
                <h1 className="text-xl font-semibold">Hello Boys</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                  pariatur exercitationem enim rerum!
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-300">
            <Image
              src="https://mxgqqsaqzf.ufs.sh/f/OZf1u5pmfTq8R3JIJNepO9hbjdDIRwJnZHx2PGUu35BzYvNe"
              alt=""
              width={220}
              height={220}
            />
            <div className="absolute opacity-0 hover:opacity-100 aspect-square bg-gray-800 text-white inset-0 bg-opacity-50 flex items-end p-3">
              <div className="w-full">
                <h1 className="text-xl font-semibold">Hello Boys</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                  pariatur exercitationem enim rerum!
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-300">
            <Image
              src="https://mxgqqsaqzf.ufs.sh/f/OZf1u5pmfTq8R3JIJNepO9hbjdDIRwJnZHx2PGUu35BzYvNe"
              alt=""
              width={220}
              height={220}
            />
            <div className="absolute opacity-0 hover:opacity-100 aspect-square bg-gray-800 text-white inset-0 bg-opacity-50 flex items-end p-3">
              <div className="w-full">
                <h1 className="text-xl font-semibold">Hello Boys</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                  pariatur exercitationem enim rerum!
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-300">
            <Image
              src="https://mxgqqsaqzf.ufs.sh/f/OZf1u5pmfTq8R3JIJNepO9hbjdDIRwJnZHx2PGUu35BzYvNe"
              alt=""
              width={220}
              height={220}
            />
            <div className="absolute opacity-0 hover:opacity-100 aspect-square bg-gray-800 text-white inset-0 bg-opacity-50 flex items-end p-3">
              <div className="w-full">
                <h1 className="text-xl font-semibold">Hello Boys</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                  pariatur exercitationem enim rerum!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
