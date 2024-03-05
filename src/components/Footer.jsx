// import img from 'next/img'
// import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className=" bg-slate-950 py-4 px-10 text-gray-400">
          <div className="container px-4 mx-auto">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 my-4 w-full xl:w-1/5">
                <a href="/" className="block w-56 mb-10">
                  <img
                    src="/assets/ipcd-white.png"
                    width={100}
                    height={100}
                    alt='Logo'
                  />
                </a>
                <p className=" ">
                  The IPCD Utility Token, with its dynamic Profession Map, redefines accreditation and certification, setting global standards for excellence in people management through innovation, collaboration, and transformative change.
                </p>
              </div>

              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-[var(--prime-yellow)] oxanium">Company</h2>
                </div>
                <ul className="leading-8">
                  <li><a href="#about-main" className="hover:text-[var(--prime-yellow)]">About Us</a></li>
                  {/* <li><a href="#" className="hover:text-[var(--prime-yellow)]">Terms &amp; Conditions</a></li> */}
                  {/* <li><a href="#" className="hover:text-[var(--prime-yellow)]">Privacy Policy</a></li> */}
                  <li><a href="#hero-right" className="hover:text-[var(--prime-yellow)]">Contact Us</a></li>
                </ul>
              </div>
              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-[var(--prime-yellow)] oxanium ">Important Links</h2>
                </div>
                <ul className="leading-8">
                  <li><a href="#hero-main" className="hover:text-[var(--prime-yellow)]">Home</a></li>
                  <li><a href="#contract1" className="hover:text-[var(--prime-yellow)]">Contract Address</a></li>
                  <li><a href="#Usecase-main" className="hover:text-[var(--prime-yellow)]">Use Case</a></li>
                  <li><a href="#toko-main" className="hover:text-[var(--prime-yellow)]">Tokenomics</a></li>
                  <li><a href="#listing" className="hover:text-[var(--prime-yellow)]">Listing</a></li>
                </ul>
              </div>
              <div className="px-4 my-4  w-full sm:w-auto xl:w-1/5">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-[var(--prime-yellow)] oxanium ">Connect With Us</h2>
                </div>
                <div className="flex gap-3 " >
                  <a href="https://t.me/ipcdtoken"
                    target="blank" className="inline-flex items-center justify-center h-8 w-8  ">
                    <img
                      className=" "
                      src=" /assets/teligram.svg"
                      width={30}
                      height={30}
                      alt="Picture of the author"
                    />
                  </a>
                  <a href="#" className="inline-flex items-center justify-center h-8 w-8  ">
                    <img
                      className=""
                      src=" /assets/instagram2.svg"
                      width={30}
                      height={30}
                      alt="Picture of the author"
                    />
                  </a>
                  <a href="#" className="inline-flex items-center justify-center h-8 w-8  ">
                    <img
                      className=""
                      src=" /assets/youtube2.svg"
                      width={30}
                      height={30}
                      alt="Picture of the author"
                    />
                  </a>
                  <a href="#" className="inline-flex items-center justify-center h-8 w-8  ">
                    <img
                      className=""
                      src=" /assets/tweeter2.svg"
                      width={30}
                      height={30}
                      alt="Picture of the author"
                    />
                  </a>


                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black py-4 px-10 text-gray-100">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 w-full text-center sm:w-auto sm:text-left oxanium">
                Copyright © 2023
                - 2024
                . All Rights Reserved.
              </div>
              <div className="px-4 w-full text-center sm:w-auto sm:text-left">

              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer