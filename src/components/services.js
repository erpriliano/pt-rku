import React from "react"

import { servicesData } from "../mock/data"

const Services = () => {
  return (
    <div id="services" className="container mx-auto px-6 pt-24 pb-24 font-Lato">
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide mb-4">
          Layanan Kami
        </h1>
      </div>
      <div className="flex flex-wrap -m-4">
        {servicesData.map((service, index) => (
          <div key={index} className="p-4 lg:w-1/3 mb:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 hover:border-blue-500 flex flex-col relative overflow-hidden">
              <h1 className="text-xl font-semibold text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                {service.title}
              </h1>
              {service.services.map((data, index) => (
                <div key={index} className="flex items-center mb-2">
                  <span className="w-5 mr-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </span>
                  <p className="w-full text-sm">{data}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
