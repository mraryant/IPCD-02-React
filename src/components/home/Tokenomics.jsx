// import img from 'next/img'
// import React from 'react'
import { motion } from 'framer-motion';

const Tokenomics = () => {

    const staggerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, ease: "easeOut" },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: -60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };


    const staggerVariantsutil = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, ease: "easeOut" },
        },
    };

    const childVariantsutil = {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    };

    return (
        <>
            <div id="toko-main" className='  overflow-hidden relative bg-black  flex flex-col gap-[4vmax] min-h-[100vh] w-[100vw] px-10  max-[400px]:px-5      '>

                <div className="  absolute left-0 top-0 bg-gradient-to-b from-black via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-screen h-[100px]  bottom-0 z-[1] "></div>
                <div className="  absolute left-0 bottom-0 bg-gradient-to-t from-black via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-screen h-[100px]  bottom-0 z-[1] "></div>

                {/* <video className=" w-screen  absolute left-0  h-[110%] z-0 object-cover flex  opacity-30 max-[900px]:h-[100%] max-[500px]:h-[100%] " autoPlay muted loop src={require('../../public/assets/tokovideo.mp4')} /> */}

                <video width="320" height="240" autoPlay muted loop className="w-screen  absolute left-0  h-[110%] z-0 object-cover flex  opacity-30 max-[900px]:h-[100%] max-[500px]:h-[100%]  " >
                    <source src="/assets/tokovideo.mp4" type="video/mp4" />
                </video>

                <div className='py-20 z-[0] flex flex-col gap-10'>


                    <div id="toko-heading" className="  flex flex-col gap-5 max-w-md mx-auto items-center">
                        <h1 className="text-5xl text-[var(--prime-yellow)]  oxanium ">Tokenomics</h1>
                        <p className="text-center leading-tight   " >We’ll meet you where you’re at – and tailor our approach to suit your strategic aims. We’ll do this using our five-stage model for change:</p>
                    </div>

                    <div id="toko-contaienr" className='  flex  gap-10 w-[100%] min-h-[60vh] max-[900px]:flex-col  max-[900px]:items-center'>
                        <div id="toko-left" className='w-[50%] max-[900px]:w-[100%]  items-center flex flex-col    max-[900px]:items-center '>
                            <motion.div
                                initial="hidden"
                                transition={{ ease: "easeInOut" }}
                                whileInView="visible"
                                variants={staggerVariants}
                                id="toko-left-imgs" className='flex reletive cover-fit  gap-[2vmax] justify-center items-baseline '>
                                <motion.div variants={childVariants}>
                                    <img
                                        src="/assets/toko1.png"
                                        width="100"
                                        height="100"
                                        alt="Picture of the author"

                                    />
                                </motion.div>
                                <motion.div variants={childVariants}>
                                    <img
                                        src="/assets/toko2.png"
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                </motion.div>

                                <motion.div variants={childVariants}>
                                    <img
                                        src="/assets/toko3.png"
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                </motion.div>

                                <motion.div variants={childVariants}>
                                    <img
                                        src="/assets/toko4.png"
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                </motion.div>

                                {/* <motion.div variants={childVariants}>
                                    <img
                                        src="/assets/toko5.svg"
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                </motion.div> */}
                            </motion.div>
                            <h1 className='  text-4xl ml-10 tracking-[1.3vw] oxanium max-[400px]:text-2xl max-[400px]:ml-[0rem]  max-[900px]:tracking-[2.5vw] max-[900px]:text-3xl max-[900px]:ml-[0px] '>DISTRIBUTION</h1>
                            {/* <h1 className='text-4xl ml-10 tracking-[1.3vw] max-w-[400px]:text-2xl max-w-[400px]:ml-0 max-w-[900px]:tracking-[3vw] max-w-[900px]:text-3xl max-w-[900px]:ml-0'>DISTRIBUTION</h1> */}


                        </div>
                        <div id="toko-right" className='oxanium w-[50%] max-[900px]:w-[100%] flex flex-col justify-end items-center gap-5'>
                            <h1 className='text-3xl' >Token  <span className='text-[var(--prime-yellow)]'>Utility</span> </h1>

                            <motion.div
                                initial="hidden"
                                transition={{ ease: "easeInOut" }}
                                whileInView="visible"
                                variants={staggerVariantsutil}
                                className='flex flex-col gap-4'>
                                <motion.div variants={childVariantsutil} id="util-card" className='  bg-gradient-to-b from-zinc-700 to-neutral-950 flex justify-center items-center gap-5 max-w-[450px] border-2 px-5  rounded-[100px]'>
                                    <h4 className=' text-nowrap'>Token Name</h4>
                                    <div className=' leading-tight max-[471px]:overflow-x-auto '>Institute of personnel and corporate development TOKEN</div>
                                </motion.div>
                                <motion.div variants={childVariantsutil} id="util-card" className='bg-gradient-to-b from-zinc-700 to-neutral-950 flex gap-5 border-2 px-5 py-2 rounded-[100px]'>
                                    <h4 className=" ">Token Logo</h4>
                                    <h4 className=" pl-2">IPCD</h4>
                                </motion.div>
                                <motion.div variants={childVariantsutil} id="util-card" className='bg-gradient-to-b from-zinc-700 to-neutral-950 flex gap-5 border-2 px-5 py-2 rounded-[100px]'>
                                    <h4 className=" ">Total Supply</h4>
                                    <h4 className="pl-1 ">10 Billion</h4>
                                </motion.div>
                                <motion.div variants={childVariantsutil} id="util-card" className='bg-gradient-to-b from-zinc-700 to-neutral-950 flex gap-5 border-2 px-5 py-2 rounded-[100px]'>
                                    <h4 className=" ">Decimal</h4>
                                    <h4 className="pl-9 ">18</h4>
                                </motion.div>
                                <motion.div variants={childVariantsutil} id="util-card" className='bg-gradient-to-b from-zinc-700 to-neutral-950 flex gap-5 border-2 px-5 py-2 rounded-[100px]'>
                                    <h4 className=" ">Network</h4>
                                    <h4 className=" pl-8">BEP 20</h4>
                                </motion.div>
                            </motion.div>



                        </div>

                    </div>
                    <div id="benifit-container" className='flex    flex-col gap-5   z-[1] w-full  '>
                        <div id='carde' className="flex   flex-col items-center   rounded-lg shadow md:flex-row md:max-w-4xl  ">

                            <div className="object-cover w-fit rounded-t-lg h-96 md:h-auto md:w-38 md:rounded-none md:rounded-s-lg max-[768px]:hidden">
                                <img
                                    src="/assets/logo_arro.svg"
                                    width={100}
                                    height={100}
                                    alt='skdj'
                                />
                            </div>
                            <div className="flex w-[100%]   flex-col justify-between p-4 leading-normal">

                                <h5 className="mb-2 text-3xl font-bold tracking-tight   text-white oxanium"><span className='text-[var(--prime-yellow)]'>IPCD</span> REVENUE STREAM</h5>
                                <p className=' leading-tight'> {"➣"} Subscription from User/Companies/Institution.</p>
                                <p className=' leading-tight'> {"➣"} Premium features through subscription.</p>
                                <p className=' leading-tight'> {"➣"} Licensing fees for educational institutions & Companies.</p>
                                <p className=' leading-tight'> {"➣"} In-app advertisements from relevant educational service providers and hiring companies.</p>
                                <p className=' leading-tight'> {"➣"} Partnership with universities for featured listing and targeted advertising.</p>
                                <p className=' leading-tight'> {"➣"} Data licensing.</p>
                                <p className=' leading-tight'> {"➣"} Commission for facilitating transactions between users and companies.</p>
                                <p className=' leading-tight'> {"➣"} In-app advertisements from relevant service providers.</p>
                                <p className=' leading-tight'> {"➣"} Partnership with other platforms or services.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Tokenomics