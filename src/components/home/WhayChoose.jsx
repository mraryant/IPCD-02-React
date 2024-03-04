 
import { motion } from "framer-motion"
// import img from 'next/img';
const WhayChoose = () => {
   
    return (
        <>
            <div id="whayC-main" className=' overflow-hidden min-h-[100vh] bg-[#060606] w-[100vw] flex flex-col justify-center items-center gap-[6vmax]    md:px-[5vmax] md:py-20 max-[834px]:py-10'>

                <h1 className='  text-5xl oxanium max-[576px]:text-[33px] mx-2 '>WHY <span className='text-[var(--prime-yellow)]'> CHOOSE </span> IPCD</h1>

                <div id="whayC-container" className=' min-h-[80vh] flex gap-[2vmax] px-10 max-[834px]:flex-col'>
                    <div id="whayC-cont-left" className='w-[33%] flex flex-col justify-between items-center gap-[10vmax] max-[834px]:flex-row  max-[834px]:w-[100%] max-[834px]:gap-[7vw] max-[834px]:items-start max-[576px]:flex-col max-[576px]:items-center'>
                        <motion.div
                            initial={{ opacity: 0, x: -30, y: -30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, transition: { ease: "easeInOut", delay: 0.4, duration: 1 } }}

                            className='flex flex-col gap-3 w-[90%] max-[576px]:w-[100%]  '>
                            <h2 className=" oxanium text-2xl leading-tight"> <span className=' text-[var(--prime-yellow)]'>Elevating</span> Excellence in People Management</h2>
                            <p className=' leading-tight   text-wrap  '>In a critical landscape where effective people management defines success, partnering with IPCD will guide you through a five-stage model (Define- Diagnose-Build-Recognize-Sustain) for successful transformation, ensuring a dedication to excellence in human resources, learning and development, and organizational growth.  </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -30, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, transition: { ease: "easeInOut", delay: 0.4, duration: 1 } }}
                            className='flex flex-col gap-3 w-[90%] max-[576px]:w-[100%]'>
                            <h2 className=" oxanium text-2xl leading-tight"> <span className='text-[var(--prime-yellow)]'>Comprehensive</span>  Corporate & University   <span className='text-[var(--prime-yellow)]'>Rating System</span>  </h2>
                            <p className=' leading-tight   text-wrap  '>IPCD has devised a comprehensive corporate assessment system designed to evaluate all the components of a company that significantly influence your career success and also incorporates a university rating system, assisting students and working professionals and selecting the best universities that align with their profiles or interests. </p>
                        </motion.div>

                    </div>

                    <motion.div id="whayC-cont-mid"
                        initial={{ scale: 1.9 }}
                        whileInView={{ scale: 1, transition: { delay: 0.4, duration: 1 }, }}
                        className='w-[30%] overflow-hidden flex max-[834px]:w-[100%] '>
                        {/* <video className="    filter grayscale  scale-[2.2] max-[834px]:scale-[1.2] " autoPlay muted loop src={require('../../public/assets/whayCvid.mp4')} /> */}
                        <video width="320" height="240" autoPlay muted loop className="filter grayscale  scale-[2.2] max-[834px]:scale-[1.2] " >
                            <source src="/assets/whayCvid.mp4" type="video/mp4" />
                        </video>
                        
                    </motion.div>

                    <div id="whayC-cont-right" className='w-[33%] flex flex-col  justify-between items-center gap-[10vmax] max-[834px]:flex-row  max-[834px]:w-[100%] max-[834px]:gap-[7vw]  max-[834px]:items-start max-[576px]:flex-col max-[576px]:items-center '>
                        <motion.div
                            initial={{ opacity: 0, x: 30, y: -30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, transition: { ease: "easeInOut", delay: 0.4, duration: 1 } }}

                            className='flex flex-col gap-3 w-[90%] max-[576px]:w-[100%]'>
                            <h2 className=" oxanium text-2xl leading-tight"> <span className='text-[var(--prime-yellow)]'>Comprehensive</span>  Corporate & University   <span className='text-[var(--prime-yellow)]'>Rating System</span>  </h2>
                            <p className=' leading-tight   text-wrap  '>IPCD has devised a comprehensive corporate assessment system designed to evaluate all the components of a company that significantly influence your career success and also incorporates a university rating system, assisting students and working professionals and selecting the best universities that align with their profiles or interests. </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, transition: { ease: "easeInOut", delay: 0.4, duration: 1 } }}

                            className='flex flex-col gap-3 w-[90%]  max-[576px]:w-[100%]'>
                            <h2 className=" oxanium text-2xl leading-tight"> <span className='text-[var(--prime-yellow)]'>Setting</span> the <span className='text-[var(--prime-yellow)]'>Gold Standard</span> for HR, L&D, and OD Professionals</h2>
                            <p className=' leading-tight   text-wrap  '>IPCD stands as a beacon for HR, learning, and organizational development, setting global standards through rigorous accreditation, comprehensive certification, and ethical conduct, serving as a benchmark for elevating people management practices.</p>
                        </motion.div>
                    </div>
                </div>

                <div id="benifit-container" className='flex  flex-col gap-5 items-center   '>
                    <h5 className="mb-2 text-3xl font-bold tracking-tight  text-white">BENEFIT BY <span className='text-[var(--prime-yellow)]' >IPCD</span></h5>

                    <div id="card-container" className='flex   gap-5 max-[453px]:flex-col '>

                        <div id='carde' className="flex p-5 pr-0 flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  bg-gray-800 hover:bg-gray-700">
                            <div className="object-cover w-fit rounded-t-lg h-96 md:h-auto md:w-38 md:rounded-none md:rounded-s-lg max-[768px]:hidden ">
                                <img
                                    src="/assets/logo_arro.svg"
                                    width={100}
                                    height={100}
                                    alt='skdj'
                                />
                            </div>
                            <div className="flex w-full flex-col justify-between p-4 leading-normal">
                                {/* <h5 className="mb-2 text-3xl font-bold tracking-tight  text-white">BENEFIT BY <span className='text-[var(--prime-yellow)]' >IPCD</span></h5> */}
                                <h5 className="mb-2 oxanium text-3xl font-bold tracking-tight  text-white"><span className='text-[var(--prime-yellow)]' >Corporate</span>   / Institute</h5>
                                <p> {"➣"} Enhanced Scalability </p>
                                <p> {"➣"} Higher flexibility  </p>
                                <p> {"➣"} Customized Solution  </p>
                                <p> {"➣"} Yearly Renewed  </p>
                                <p> {"➣"} Advertising Platform  </p>
                            </div>
                        </div>

                        <div id='carde' className="flex p-5 flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  bg-gray-800 hover:bg-gray-700">

                            <div className="object-cover w-fit rounded-t-lg h-96 md:h-auto md:w-38 md:rounded-none md:rounded-s-lg max-[768px]:hidden">
                                <img
                                    src="/assets/logo_arro.svg"
                                    width={100}
                                    height={100}
                                    alt='skdj'
                                />
                            </div>
                            <div className="flex w-full flex-col justify-between p-4 leading-normal">
                                {/* <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white oxanium ">BENEFIT BY <span className='text-[var(--prime-yellow)]' >IPCD</span></h5> */}
                                <h5 className="mb-2 text-3xl font-bold tracking-tight  text-white oxanium"><span className='text-[var(--prime-yellow)]' >User</span> / Individual</h5>
                                <p> {"➣"} Cost- efficiency  </p>
                                <p> {"➣"} Low Risk   </p>
                                <p> {"➣"} Customized Solution  </p>
                                <p> {"➣"} User Friendly </p>
                                <p> {"➣"} Flexible Plan </p>
                            </div>
                        </div>



                    </div>

                </div>

                <div id="benifit-container" className='flex  flex-col gap-5 items-center  max-[1050px]:w-[80%] max-[500px]:w-[100%]  '>
                    {/* <h5 className="mb-2 text-3xl font-bold tracking-tight  text-white">BENEFIT BY <span className='text-[var(--prime-yellow)]' >IPCD</span></h5> */}

                    <div id="card-container" className='flex    gap-5 max-[1050px]:flex-col   max-[1050px]:w-[100%] max-[1050px]:gap-10 '>

                        <div id='carde' className="flex p-5 flex-col items-center  rounded-lg shadow md:flex-row md:max-w-4xl  border border-gray-200  bg-gray-800 hover:bg-gray-700  ">

                            <div className="object-cover w-fit rounded-t-lg h-96 md:h-auto md:w-38 md:rounded-none md:rounded-s-lg max-[768px]:hidden
                            ">
                                <img
                                    src="/assets/logo_arro.svg"
                                    width={100}
                                    height={100}
                                    alt='skdj'
                                />
                            </div>
                            <div className="flex w-full flex-col justify-between p-4 leading-normal">

                                <h5 className="mb-2 text-3xl font-bold tracking-tight  text-white oxanium"><span className='text-[var(--prime-yellow)]'>IPCD</span>  Platform enables our user to</h5>
                                <p>{"➣"}  SAVE EFFORT - By accessing integrated network .  </p>
                                <p> {"➣"}  SAVE MONEY – By choosing customized requirement  </p>
                                <p>{"➣"} SAVE TIME - Protect & easily transfer Transaction and important document through blockchain technology. </p>
                                <p>{"➣"}   GROW QUICK – Data based, AI Recommended solution  </p>
                            </div>
                        </div>

                        <div id='carde' className="flex p-5 flex-col items-center   rounded-lg shadow md:flex-row md:max-w-4xl   border border-gray-200  bg-gray-800 hover:bg-gray-700  ">

                            <div className="object-cover w-fit rounded-t-lg h-96 md:h-auto md:w-38 md:rounded-none md:rounded-s-lg max-[768px]:hidden">
                                <img
                                    src="/assets/logo_arro.svg"
                                    width={100}
                                    height={100}
                                    alt='skdj'
                                />
                            </div>
                            <div className="flex w-full flex-col justify-between p-4 leading-normal">

                                <h5 className="mb-2 text-3xl font-bold tracking-tight  text-white oxanium"><span className='text-[var(--prime-yellow)]'>IPCD</span> Key Partner</h5>
                                <p>{"➣"} HR Professional</p>
                                <p>{"➣"} Recruitment Expert</p>
                                <p>{"➣"} Professional Expertise</p>
                                <p>{"➣"} Universities</p>
                                <p>{"➣"} Education Institution</p>
                                <p>{"➣"} Government Bodies</p>
                                <p>{"➣"} Companies</p>
                                <p>{"➣"} Regulatory Bodies</p>
                                <p>{"➣"} Financial Institution</p>
                            </div>
                        </div>






                    </div>

                </div>
            </div >

        </>
    )
}

export default WhayChoose