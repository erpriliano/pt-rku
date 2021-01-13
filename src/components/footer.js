import React from "react"
import { Link } from "gatsby"
import { footerData, companyProfile } from "../mock/data"

const Footer = () => {
  return (
    <div className="bg-gray-200 max-w-screen-2xl mx-auto flex items-center flex-col pb-16 lg:pb-0">
      <div className="bg-white w-full flex flex-wrap p-6">
        <div className="w-full md:w-1/2">
          <h1 className="text-lg font-bold tracking-wide mb-4 md:mb-2">
            {footerData.companyName}
          </h1>
          <p className="text-sm text-justify">{companyProfile.address}</p>
          <span className="md:flex">
            <p className="text-sm my-1 md:mr-2">
              Phone: {companyProfile.phoneNumber}
            </p>
            <p className="text-sm my-1">
              Mobile: {companyProfile.mobileNumber}
            </p>
          </span>
        </div>
        <div className="flex justify-center md:items-center md:justify-end w-full pt-4 md:w-1/2 py-2">
          <span className="w-6 h-6 items-center rounded-full border-2 border-gray-500 hover:border-blue-500 mr-2 md:mr-4">
            <a className="hover:text-blue-500 text-gray-500" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </span>
          <span className="w-6 h-6 items-center rounded-full border-2 border-gray-500 hover:border-blue-500 mr-2 md:mr-4">
            <a className="hover:text-blue-500 text-gray-500" href="#">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
          </span>
          <span className="w-6 h-6 items-center rounded-full border-2 border-gray-500 hover:border-blue-500">
            <a className="hover:text-blue-500 text-gray-500" href="#">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>

      <div className="w-full p-6 flex justify-center">
        <p>© {new Date().getFullYear()} - @erpriliano</p>
      </div>
    </div>
  )
}

export default Footer
