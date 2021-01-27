import React from "react"

import { companyProfile, gallery } from "../mock/data"

const About = () => {
  return (
    <div
      id="about"
      className="w-full max-w-screen-2xl container mx-auto pt-20 lg:pt-28 px-6 pb-12 font-Lato bg-gray-100"
    >
      <h1 className="text-2xl md:text-3xl text-center mb-6 font-bold">
        Tentang Kami
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        <div className="p-4 flex items-center">
          <p className="leading-loose text-sm text-justify md:text-left">
            {companyProfile.shortHistory}
          </p>
        </div>
        <div className="p-4 flex flex-col">
          <div className="text-center md:text-left">
            <h1 className="font-bold tracking-wide mb-2 text-lg">
              Visi Perusahaan
            </h1>
            <p className="italic text-sm">"{companyProfile.companyVision}"</p>
          </div>
          <div className="mt-4">
            <h1 className="font-bold tracking-wide mb-2 text-lg text-center md:text-left">
              Misi Perusahaan
            </h1>
            <p className="text-sm text-justify md:text-left leading-loose">
              {companyProfile.companyMission.join(", ")}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">
        {gallery.map((photo, index) => (
          <div key={index} className="w-full bg-black">
            <img
              className="object-cover h-48 w-full transition-all hover:shadow-2xl hover:scale-110 ease-in-out duration-700"
              alt={`gallery-img-${index}`}
              src={photo}
            />
          </div>
        ))}
      </div>

      {/* {console.log(electricImg)}

      <div className="grid grid-cols-3 gap-6 mt-16">
        <img className="object-cover bg-black" src={electricImg} />
        <img className="object-cover bg-black" src={electricImg} />
        <img className="object-cover bg-black" src={electricImg} />
        <img className="object-cover bg-black" src={electricImg} />
        <img className="object-cover bg-black" src={electricImg} />
        <img className="object-cover bg-black" src={electricImg} />
      </div> */}
      {/* <div className="flex flex-col text-center w-full mb-10">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide mb-4">
          Tentang Kami
        </h1>
      </div>
      <div className="flex flex-col md:flex-row px-6">
        <div className="w-full md:w-1/2 mx-auto text-center mb-12 sm:mb-12 lg:mb-24 lg:mx-0">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide mb-4">
            Sejarah Perusahaan
          </h1>
          <p className="text-sm leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto">
            {companyProfile.shortHistory}
          </p>
        </div>

        <div className="w-full md:w-1/2 mx-auto text-center mb-12 sm:mb-12 lg:mb-24 lg:mx-0">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide mb-4">
            Nilai Perusahaan
          </h1>
          <p className="text-sm leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto">
            {companyProfile.companyValue}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap px-6">
        <div className="p-4 md:w-1/2 w-full">
          <div className="h-full bg-gray-100 p-8 rounded">
            <h1 className="text-center font-bold text-2xl md:text-3xl mb-4">
              Visi Perusahaan
            </h1>
            <p className="text-sm text-center italic">
              "{companyProfile.companyVision}"
            </p>
          </div>
        </div>

        <div className="p-4 md:w-1/2 w-full">
          <div className="h-full bg-gray-100 p-8 rounded">
            <h1 className="text-center font-bold text-2xl md:text-3xl mb-4">
              Misi Perusahaan
            </h1>
            <p className="text-sm text-center italic">
              "{companyProfile.companyMission.join(", ")}"
            </p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default About
