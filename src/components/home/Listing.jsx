
// import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

const Listing = () => {
    // typing effect  p tag
 

    return (
        <>
            <div id="listing" className=' relative min-h-[100vh] w-[100vw] px-10 py-20   flex flex-col gap-20'>

                <div className="  absolute left-0 top-0 bg-gradient-to-b from-black via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-screen h-[100px]  bottom-0 z-[1] "></div>
                <div className="  absolute left-0 bottom--1 bg-gradient-to-t from-black via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-screen h-[100px]  bottom-0 z-[1] "></div>


                <div id="Listed-main" className=' flex gap-5  max-[700px]:flex-col max-[700px]:gap-10'>
                    <div id="listed-left" className='max-w-[50%] flex flex-col justify-center gap-[1vmax] max-[700px]:max-w-[100%] ' >
                        <h1 className='oxanium text-5xl'>We Are <span className='text-[var(--prime-yellow)]'>Listed</span>  On</h1>
                        <motion.p
                         
                            className='text-xl leading-tight'
                        // className="leading-tight text-gray-200 text-[18px] w-[80%] tracking-[0.35px] max-[850px]:w-[100%]"
                        >
                            
                                <motion.span  >
                                    IPCD aims to redefine people management globally, setting gold standards in HR, learning, and organizational development, with the IPCD Token, grounded in blockchain, as a catalyst for transformative success.
                                </motion.span>
                            
                        </motion.p>
                        {/* <p>IPCD aims to redefine people management globally, setting gold standards in HR, learning, and organizational development, with the IPCD Token, grounded in blockchain, as a catalyst for transformative success.</p> */}
                    </div>
                    <div id="listed-right" className='flex justify-center max-w-[50%] gap-5 flex-wrap max-[700px]:max-w-[100%]'>
                        <div id="util-card" className='bg-gradient-to-b from-zinc-700 to-neutral-950  h-[45px] w-[250px]  flex gap-5 border-2 px-5 py-2 rounded-[100px]'>

                            <img
                                src='/assets/pr1.svg'
                                alt='IPCD Logo'
                                width={500}
                                height={500}
                            />
                        </div>
                        <div id="util-card" className='bg-gradient-to-b from-zinc-700 to-neutral-950 h-[45px] w-[250px] flex justify-center gap-5 border-2 px-5 py-2 rounded-[100px]'>

                            <img
                                src='/assets/pr2.png'
                                alt='IPCD Logo'
                                width={150}
                                height={200}
                            />
                        </div>
                        <div id="util-card" className='bg-gradient-to-b from-zinc-700 to-neutral-950 h-[45px] w-[250px] flex justify-center gap-5 border-2 px-5 py-2 rounded-[100px]'>

                            <img
                                src='/assets/pr3.png'
                                alt='IPCD Logo'
                                width={150}
                                height={200}
                            />
                        </div>
                        <div id="util-card" className='bg-gradient-to-b from-zinc-700 to-neutral-950 h-[45px] w-[250px] flex gap-5 border-2 px-5 py-2 rounded-[100px]'>

                            <img
                                src='/assets/pr4.svg'
                                alt='IPCD Logo'
                                width={700}
                                height={700}
                            />
                        </div>
                    </div>
                </div>




                <div id="filler-main" className='flex w-full gap-10 max-[800px]:flex-col max-[800px]:items-center '>
                    <div id="filler-left" className='w-[40%] flex max-[800px]:w-[80%] max-[800px]:justify-center '>
                        <img
                            src='/assets/bottomcross.svg'
                            alt='IPCD Logo'
                            width={400}
                            height={500}
                        />
                    </div>
                    <div id="filler-right" className=' w-[60%] flex flex-col justify-center items-center gap-10 max-[800px]:w-[100%] max-[800px]: '>
                        <h1 className='text-5xl oxanium max-[800px]:text-4xl  '> <span className='text-[var(--prime-yellow)]' >INSTITUTE</span> OF PERSONNEL AND CORPORATE <span className='text-[var(--prime-yellow)]'>DEVELOPMENT</span> </h1>
                        <motion.p
                            
                            className="text-xl max-[800px]:text-justify"
                        >
                            
                                <motion.span  >
                                    IPCD envisions a future of holistic well-being, strategic alignment, and innovation in global people management. The IPCD Token symbolizes a secure, borderless, and collaborative approach to reshaping the future of work.
                                </motion.span>
                            
                        </motion.p>
                        {/* <p className='text-xl max-[800px]:text-justify'>IPCD envisions a future of holistic well-being, strategic alignment, and innovation in global people management. The IPCD Token symbolizes a secure, borderless, and collaborative approach to reshaping the future of work.</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listing