import React from "react"
import { Link } from "gatsby"
import { footerData } from "../mock/data"

const Footer = () => {
  return (
    <div className="bg-blue-200 max-w-screen-2xl mx-auto flex items-center sm:flex-row flex-col px-6 pt-14 pb-24">
      <Link
        to="/"
        className="flex items-center md:justify-start justify-center"
      >
        <h1 className="font-medium text-gray-800 mr-1">
          {footerData.companyName}
        </h1>
      </Link>
      <p>
        © {new Date().getFullYear()} - {footerData.author}
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 lg:mr-12 justify-center sm:justify-start">
        <a
          className="hover:text-blue-500 text-gray-500"
          href={footerData.facebook}
        >
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
        <a
          className="hover:text-blue-500 ml-4 text-gray-500"
          href={footerData.twitter}
        >
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
        <a
          className="hover:text-blue-500 ml-4 text-gray-500"
          href={footerData.instagram}
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a
          className="hover:text-blue-500 ml-4 text-gray-500"
          href={footerData.linkedIn}
        >
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            ></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  )
}

export default Footer
