import React, { useState, useEffect } from "react"
import { Link as LinkScroll } from "react-scroll"
import { navigationMenu } from "../mock/data"

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false)
  const [activeLink, setActiveLink] = useState(null)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20)
    })
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 transition-all bg-white ${
          scrollActive ? "shadow-md pt-0" : " pt-4"
        }`}
      >
        <nav className="max-w-screen-2xl px-6 sm:px-8 lg:px:px-16 mx-auto grid grid-flow-col py-3 sm:py-4 font-Poppins">
          <div className="col-start-1 col-end-2 flex items-center">
            <h1 className="text-lg md:text-xl font-bold tracking-wide">
              PT. Rezki Karfadz Utama
            </h1>
          </div>
          <ul className="hidden lg:flex col-start-11 col-end-12 text-black text-sm items-center">
            {navigationMenu.map((data, index) => (
              <LinkScroll
                key={index}
                to={data.linkTo}
                smooth={true}
                spy={true}
                duration={1000}
                activeClass="active"
                onSetActive={() => setActiveLink(data.linkTo)}
                className={`px-4 py-2 cursor-pointer inline-block relative md:text-lg ${
                  activeLink === data.linkTo
                    ? "font-bold text-blue-500 border-b-2 border-blue-500"
                    : "hover:text-blue-500"
                }`}
              >
                {data.title}
              </LinkScroll>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile Navigation starts */}
      <nav className="fixed border-t bg-white lg:hidden bottom-0 inset-x-0 z-20 px-4 sm:px-8">
        <div className="bg-white sm:px-3">
          <ul className="flex w-full justify-between items-center text-black">
            {navigationMenu.map((data, index) => (
              <LinkScroll
                key={index}
                to={data.linkTo}
                smooth={true}
                spy={true}
                duration={1000}
                activeClass="active"
                onSetActive={() => setActiveLink(data.linkTo)}
                className={`mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-sm transition-all ${
                  activeLink === data.linkTo
                    ? "font-bold text-blue-500 border-blue-500"
                    : "hover:text-blue-500"
                }`}
              >
                {data.mobileSVG} {data.title}
              </LinkScroll>
            ))}
          </ul>
        </div>
      </nav>
      {/* Mobile Navigation ends */}
    </>
  )
}

export default Header
