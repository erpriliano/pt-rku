import React from "react"

import { companyProfile } from "../mock/data"

const About = () => {
  return (
    <div id="about" className="container mx-auto pt-24 pb-12 font-Lato">
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
      </div>
    </div>
  )
}

export default About
