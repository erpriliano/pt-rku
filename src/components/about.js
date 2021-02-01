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
          <div key={index} className="w-full">
            <img
              className="object-cover object-center inset-0 h-full w-full transition-all hover:shadow-2xl hover:scale-110 ease-in-out duration-700"
              alt={`gallery-img-${index}`}
              src={photo}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
