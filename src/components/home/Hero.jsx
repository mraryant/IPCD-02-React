

import "./Hero.css";

// import { motion } from "framer-motion"
// import { useAnimate, stagger } from "framer-motion"
import { useState } from 'react';
import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import Popup1 from "./Popup1";

// import v1 from "../../public/assets/homevideo.mp4"
// import v2 from "../../public/assets/white-circle.mp4"



const Hero = () => {


  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, ease: "easeOut" },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };


  const openPDF = () => {
    // Use the `router` from Next.js to open the PDF
    window.open('/assets/IPCD whitepaper.pdf', '_blank');
  };

  const [popup, setpopup] = useState('false');

  // useEffect(() => {
  //   setTimeout(() => {
  //     setpopup('True')
  //   }, 5000);
  // }, []);

  const handlepopup = (state) => {
    if (state === 'true') {
      setpopup('false')
    }
    else {
      setpopup('true');
    }
  }

  return (
    <>
      <motion.div id="hero-main" className=" overflow-hidden relative min-h-[100vh] w-[100vw] flex justify-center items-center px-4 mt-[-88px] pb-20 md:px-8 max-[768px]:flex-col">
        <div className="  absolute left-0 bottom-0 bg-gradient-to-t from-black via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-[100%] h-[100px]  bottom-0 z-3"></div>

        {/* <video className=" w-screen  absolute left-0  h-[1100%] z-0 object-cover flex  opacity-30 max-[900px]:h-[200%] max-[500px]:h-[100%] " autoPlay muted loop src={require('../../public/assets/tokovideo.mp4')} /> */}
        {/* <video className="w-screen  absolute left-0  h-[125%]  object-cover flex opacity-70 z-[-1] max-[900px]:h-[210%] max-[500px]:h-[240%]   " autoPlay muted loop src={require('../../public/assets/homevideo.mp4')} /> */}
        {/* <video className="w-screen  absolute left-0  h-[125%]  object-cover flex opacity-70 z-[-1] max-[900px]:h-[210%] max-[500px]:h-[240%]   " autoPlay muted loop src={v1} /> */}

        <video width="320" height="240" autoPlay muted loop className="w-screen  absolute left-0  h-[125%]  object-cover flex opacity-70 z-[-1] max-[900px]:h-[210%] max-[500px]:h-[240%]   " >
          <source src="/assets/homevideo.mp4" type="video/mp4" />
        </video>

        <div id="hero-left" className=" mt-[100px] w-[60%] h-[100%] flex flex-col justify-center  gap-[4vmax] max-[850px]:w-[90%] ">

          <div id="hero-left-top" className="mt-4 flex flex-col gap-[3 vmax]">
            <motion.h1
              initial={{ x: 0 }}
              whileInView={{ x: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 }, }}

              className=" text-[4vmax] relative  oxanium leading-tight max-[850px]:text-[6vmax]   "> <span className=" text-[--prime-yellow]">INSTITUTE</span>  OF PERSONNEL AND CORPORATE DEVELOPMENT</motion.h1>



            <motion.p
              className="leading-tight text-gray-200 text-[18px] w-[80%] tracking-[0.35px] max-[850px]:w-[100%]"
            >

              <motion.span  >
                The IPCD envisions a world where work fosters human flourishing, not just a means to an end. It aims to professionalize people teams, positioning them as catalysts for societal change. The mission is to enhance effectiveness and recognition in the realm of personnel and corporate development.
              </motion.span>

            </motion.p>
            <div className=" relative">
              <div style={{ display: popup === 'true' ? 'block' : 'none' }} className="  absolute z-10 top-[48%] left-[45%] transform -translate-x-1/2 -translate-y-1/2   max-w-[700px] max-[768px]:w-[90%] max-[768px]:top-[160%]  max-[768px]:transform max-[768px]:-translate-x-0 max-[768px]:-translate-y-0 max-[768px]:left-0" >
                <Popup1 />
              </div>
              <span onClick={() => { handlepopup(popup) }} className=" text-blue-400 cursor-pointer "> READ MORE</span>
            </div>
          </div>

          <div id="hero-left-bottom" className="flex ">
            <div id="hero-l-bottom-left" className="flex   ">
              <h1 className=" font-bold text-5xl text-stroke rotate-[-90deg] ml-[-15px] max-[760px]:hidden  ">IPCD</h1>
            </div>
            <div id="hero-l-bottom-right" className="flex flex-col justify-center   gap-3 max-[760px]:ml-[0px]">
              {/* <h2 className="text-2xl max-[468px]:text-center">INSTITUTE OF PERSONNEL AND CORPORATE DEVELOPMENT</h2> */}
              <motion.div
                initial="hidden"
                transition={{ ease: "easeInOut" }}
                whileInView="visible"
                variants={staggerVariants}

                id="hero-bottom-buttons" className="flex  gap-4 max-[480px]:flex-wrap max-[468px]:justify-center ">
                <a href="https://presale.ipcd.in/" target='blank' ><motion.button variants={childVariants} type="button" className=" oxanium btn text-white   font-medium   text-sm     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Token</motion.button></a>
                <motion.button onClick={openPDF} variants={childVariants} type="button" className=" oxanium btn text-white   font-medium   text-sm     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">White Paper</motion.button>
                <motion.a href="#contract1" variants={childVariants} type="button" className=" oxanium btn text-white   font-medium   text-sm     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  max-[468px]:hidden">Contract</motion.a>

              </motion.div>
            </div>
          </div>

        </div>

        <div id="hero-right" className="relative   w-[40%] h-[100%] flex justify-center gap-0  max-[850px]:w-[100%]">
          <div id="hero-right-container" className="  border-2 mt-20 h-[610px] min-w-[260px] max-w-[260px] overflow-hidden rounded-[200px] bg-[url('/assets/heroCapBg.png')] bg-cover bg-opacity-80 bg-center">
            <div id="hero-rc-top " className="w-[100%] h-[60%] flex flex-col justify-center items-center gap-4 ">
              <h2 className="oxanium text-justify text-3xl w-[90%] px-4 mt-10" >Get In <span className=" text-[--prime-yellow]"></span>Touch   With <span className=" text-[--prime-yellow]">IPCD</span>  </h2>

              <div className="reletive flex left-0 w-[100%] items-center p-3  ">
                <p className="text-[14px] leading-tight w-[70%]  "  >IPCD fosters people excellence, urging organizations to view professionals as drivers of positive change in a human-centered future of work.</p>
                <div id="contact-div" className=" absolute left-[53%] rotate-90 flex flex-col justify-center items-center  ">
                  <motion.h3
                    initial={{ x: 0 }}
                    whileInView={{ x: [0, -20, 10, -10, 10, 0], transition: { duration: 0.5 }, }}
                    whileHover={{ x: [0, -20, 10, -10, 10, 0], transition: { duration: 0.5 }, }}
                    className=" text-xl   text-nowrap ">Connect With Us</motion.h3>

                  <motion.div
                    initial="hidden"
                    transition={{ ease: "easeInOut", delay: 0.5 }}
                    whileInView="visible"
                    variants={staggerVariants}

                    className="flex gap-2" >
                    <motion.a
                      href="https://t.me/ipcdtoken"
                      target="blank"
                      whileHover={{ scale: 1.3 }}
                      variants={childVariants}>
                      <img
                        className="rotate-[-90deg]"
                        src=" /assets/teligram.svg"
                        width={30}
                        height={30}
                        alt="Picture of the author"
                      />
                    </motion.a>

                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      variants={childVariants}>
                      <img
                        className="rotate-[-90deg]"
                        src=" /assets/instagram2.svg"
                        width={30}
                        height={30}
                        alt="Picture of the author"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      variants={childVariants}>
                      <img
                        className="rotate-[-90deg]"
                        src=" /assets/youtube2.svg"
                        width={30}
                        height={30}
                        alt="Picture of the author"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      variants={childVariants}>
                      <img
                        className="rotate-[-90deg]"
                        src=" /assets/tweeter2.svg"
                        width={30}
                        height={30}
                        alt="Picture of the author"
                      />
                    </motion.div>

                  </motion.div>

                </div>
              </div>
            </div>
            <div id="hero-rc-bottom" className="  flex items-center justify-center overflow-hidden  w-[100%]  h-[40%] ">
              {/* <video className="   w-[1000px] scale-[2.1]  " autoPlay muted loop src={require('../../public/assets/white-circle.mp4')} /> */}
              {/* <video className="   w-[1000px] scale-[2.1]  " autoPlay muted loop src={v2}  /> */}
              <video width="320" height="240" autoPlay muted loop className="   w-[1000px] scale-[2.1]" >
                <source src="/assets/white-circle.mp4" type="video/mp4" />
              </video>
            </div>

          </div>
          {/* <h1 className="  absolute top-1/2 left-[500px] transform -translate-x-1/2 -translate-y-1/2  rotate-90">Here we are  top most Lorem ipsum dolor sit amet. </h1> */}

        </div>

      </motion.div >
    </>
  );
};

export default Hero;
