
// import a from 'next/a';
// import img from 'next/img';
import { useEffect, useState } from 'react';


const Navbar = () => {


  const [isScrolled, setisScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.scrollY > 0);
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])


  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };


  return (

    <>

      <nav
        className={`${isScrolled ? 'bg-black transparent' : 'bg-transparent'
          } w-full overflow-x-hidden z-[99] top-0 start-0 border-b border-none border-gray-600`}
      >
        <div className=" max-w-full   flex flex-wrap items-center justify-between mx-auto p-4 px-4 md:p-4 md:px-8">
          <a href="#">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/assets/ipcd-white.png" width={82} height={82} alt="Nhi" />

            </div>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="https://presale.ipcd.in/" target='blank' > <button type="button" className="btn oxanium text-white   font-medium   text-sm     bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Buy Token</button></a>
            <button
              onClick={toggleNav}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-[--prime-yellow] text-[--prime-yellow] ring-[--prime-yellow] hover:bg-gray-900 focus:ring-[--prime-yellow]"
              aria-controls="navbar-sticky1"
              aria-expanded={isNavVisible}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            id="navbar-sticky1"
            className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${isNavVisible ? 'block' : 'hidden'
              }`}
          >
            <ul className=" navcar  flex    flex-col p-4 gap-2 md:gap-0  md:py-1.5   mt-4 font-medium border border-gray-100 md:rounded-[50px] rounded-lg   md:space-x-[1vmax] rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent  bg-gray-900     md:text-black   ">
              {/* <li>
                <a href="#">
                  <div className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:text-blue-500" aria-current="page">Home</div>
                </a>
              </li> */}
              <li className=' btn1 md:border-none border-b-[1px] border-[#F7A00B] '>
                <a href="#hero-main">
                  <div className=" flex gap-2 font-semibold  py-2 px-3  rounded     md:p-0  text-white md:text-white  hover:text-white md:hover:bg-transparent border-gray-700">Home
                    <img
                      src="/assets/singlearr.svg"
                      width={15}
                      height={15}
                      alt=">>"
                    />
                  </div>
                </a>
              </li>
              <li className=' btn1 md:border-none border-b-[1px] border-[#F7A00B]'>
                <a href="#about-main">
                  <div className=" flex gap-2 font-semibold   py-2 px-3  rounded    md:p-0  text-white md:text-white  hover:text-white md:hover:bg-transparent border-gray-700">About Us

                    <img
                      src="/assets/singlearr.svg"
                      width={15}
                      height={15}
                      alt=">>"
                    />

                  </div>
                </a>
              </li>
              <li className='   btn1  md:border-none border-b-[1px] border-[#F7A00B] '>
                <a href="#Usecase-main">
                  <div className=" flex gap-2 font-semibold  py-2 px-3  rounded     md:p-0  text-white md:text-white  hover:text-white md:hover:bg-transparent border-gray-700">Use Case
                    <img
                      src="/assets/singlearr.svg"
                      width={15}
                      height={15}
                      alt=">>"
                    />
                  </div>
                </a>
              </li>
              <li className=' btn1 md:border-none border-b-[1px] border-[#F7A00B] '>
                <a href="#roadmap-main">
                  <div className=" flex gap-2 font-semibold  py-2 px-3  rounded     md:p-0  text-white md:text-white  hover:text-white md:hover:bg-transparent border-gray-700">Roadmap
                    <img
                      src="/assets/singlearr.svg"
                      width={15}
                      height={15}
                      alt=">>"
                    />
                  </div>
                </a>
              </li>
              <li className=' btn1 md:border-none border-b-[1px] border-[#F7A00B] '>
                <a href="#toko-main">
                  <div className=" flex gap-1 font-semibold  py-2 px-3  rounded     md:p-0  text-white md:text-white  hover:text-white md:hover:bg-transparent border-gray-700">Tokenomics
                    <img
                      src="/assets/singlearr.svg"
                      width={15}
                      height={15}
                      alt=">>"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>





    </>
  )
}

export default Navbar