// import React from 'react'
import Tokenomics from './Tokenomics'
import Listing from './Listing'
// import Benifits from './Benifits'
// import img from 'next/img'

const Roadmap = () => {
    return (
        <>



            <div id="roadmap-main" className='relative flex flex-col    items-center   min-h-[140vh] w-[100vw] '>



                {/* <video className="w-full sticky top-0 h-[120vh] z-[-1] object-cover flex  opacity-50  " autoPlay muted loop src={require('../../public/assets/roadmapvideo.mp4')} /> */}

                <video width="320" height="240" autoPlay muted loop className=" w-full sticky top-0 h-[120vh] z-[-1] object-cover flex  opacity-50 " >
                    <source src="/assets/roadmapvideo.mp4" type="video/mp4" />
                </video>

                <div id="roadmap-cont" className='  w-[100%] min-h-[80vh] gap-20 absolute  left-0  flex flex-col justify-center  '>

                    <div id="roadmap-heading" className=" sticky h-fit    top-0 flex flex-col gap-2 bg-black  py-[1.5vmax] items-center max-[768px]:px-3">
                        <h1 className="text-5xl text-[var(--prime-yellow)] oxanium ">Roadmap</h1>
                        <p className="text-center leading-tight max-w-md mx-auto">We’ll meet you where you’re at – and tailor our approach to suit your strategic aims. We’ll do this using our five-stage model for change:</p>
                        <div className="  absolute left-0 top-[99%] bg-gradient-to-b from-black via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-screen h-[50px]  bottom-0 z-3"></div>

                    </div>

                    <div className="flex justify-center max-[768px]:px-5">

                        <div id="rc-left" className='oxanium sticky top-[39vh] text-5xl  justify-center items-center py-3 pb-7  md:block  hidden z-[-1] h-fit '> Phase <span className='text-[var(--prime-yellow)]'>0</span> </div>
                        <div id="rc-right" className='w-[30rem] h-[75vh] overflow-y-auto flex flex-col  gap-10 max-[611px]:container '>

                            <div id="roadmap-step" className='flex items-center justify-center gap-5  container-lg border-b-2 pb-4 max-[370px]:gap-3 '>
                                <h2 className='oxanium text-5xl text-[var(--prime-yellow)] '>1</h2>
                                <p className=' oxanium text-2xl md:text-3xl  w-80 max-[370px]:text-[22px] leading-tight '>TOKEN & PLATFORM LAUNCH</p>
                                <h2 className='oxanium text-5xl max-[370px]:text-4xl  text-[var(--prime-yellow)] '>10%</h2>
                            </div>
                            <div id="roadmap-step" className='flex items-center justify-center gap-5  container-lg border-b-2 pb-4 max-[370px]:gap-3'>
                                <h2 className='oxanium text-5xl text-[var(--prime-yellow)] '>2</h2>
                                <p className=' oxanium text-2xl md:text-3xl  w-80 max-[370px]:text-[22px] leading-tight '>ICO LAUNCH</p>
                                <h2 className='oxanium text-5xl max-[370px]:text-4xl  text-[var(--prime-yellow)]'>20%</h2>
                            </div>
                            <div id="roadmap-step" className='flex items-center justify-center gap-5  container-lg border-b-2 pb-4 max-[370px]:gap-3'>
                                <h2 className='oxanium text-5xl text-[var(--prime-yellow)] '>3</h2>
                                <p className=' oxanium text-2xl md:text-3xl  w-80 max-[370px]:text-[22px] leading-tight '>LISTING ON DEX</p>
                                <h2 className='oxanium text-5xl max-[370px]:text-4xl  text-[var(--prime-yellow)]'>30%</h2>
                            </div>
                            <div id="roadmap-step" className='flex items-center justify-center gap-5  container-lg border-b-2 pb-4 max-[370px]:gap-3'>
                                <h2 className='oxanium text-5xl text-[var(--prime-yellow)] '>4</h2>
                                <p className=' oxanium text-2xl md:text-3xl  w-80 max-[370px]:text-[22px] leading-tight '>LISTING ON CEX</p>
                                <h2 className='oxanium text-5xl max-[370px]:text-4xl  text-[var(--prime-yellow)]'>40%</h2>
                            </div>
                            <div id="roadmap-step" className='flex items-center justify-center gap-5  container-lg border-b-2 pb-4 max-[370px]:gap-3'>
                                <h2 className='oxanium text-5xl text-[var(--prime-yellow)] '>5</h2>
                                <p className=' oxanium text-2xl md:text-3xl  w-80 max-[370px]:text-[22px] leading-tight '>UTILITY MOBILE APP LAUNCH</p>
                                <h2 className='oxanium text-5xl max-[370px]:text-4xl  text-[var(--prime-yellow)]'>50%</h2>
                            </div>
                            <div id="roadmap-step" className='flex items-center justify-center gap-5  container-lg border-b-2 pb-4 max-[370px]:gap-3'>
                                <h2 className='oxanium text-5xl text-[var(--prime-yellow)] '>6</h2>
                                <p className=' oxanium text-2xl md:text-3xl  w-80 max-[370px]:text-[22px] leading-tight '>E-LEARNING PLATFORM LAUNCH</p>
                                <h2 className='oxanium text-5xl max-[370px]:text-4xl  text-[var(--prime-yellow)]'>60%</h2>
                            </div>
                            <div id="roadmap-step" className='flex items-center justify-center gap-5  container-lg border-b-2 pb-4 max-[370px]:gap-3'>
                                <h2 className='oxanium text-5xl text-[var(--prime-yellow)] '>7</h2>
                                <p className=' oxanium text-2xl md:text-3xl  w-80 max-[370px]:text-[22px] leading-tight '>OWN BLOCKCHAIN</p>
                                <h2 className='oxanium text-5xl max-[370px]:text-4xl  text-[var(--prime-yellow)]'>80%</h2>
                            </div>
                            <div id="roadmap-step" className='flex items-center justify-center gap-5  container-lg border-b-2 pb-4 max-[370px]:gap-3'>
                                <h2 className='oxanium text-5xl text-[var(--prime-yellow)] '>8</h2>
                                <p className=' oxanium text-2xl md:text-3xl  w-80 max-[370px]:text-[22px] leading-tight '>ECOSYSTEM EXPANSION</p>
                                <h2 className='oxanium text-5xl max-[370px]:text-4xl  text-[var(--prime-yellow)]'>100%</h2>
                            </div>

                        </div>
                    </div>
                </div>


                <div id="benifit-container" className='flex gap-5'>

                    <div id='carde' className="flex p-5 flex-col items-center      rounded-lg shadow md:flex-row md:max-w-6xl ">

                        <div className="object-cover w-fit rounded-t-lg h-96 md:h-auto md:w-38 md:rounded-none md:rounded-s-lg  max-[768px]:hidden ">
                            <img
                                src="/assets/logo_arro.svg"
                                width={100}
                                height={100}
                                alt='skdj'
                            />
                        </div>
                        <div className="flex w-full flex-col justify-between p-4 leading-normal gap-2">

                            <h5 className="mb-2 text-3xl font-bold tracking-tight   text-white oxanium"><span className='text-[var(--prime-yellow)]'>IPCD</span> CSR </h5>
                            <p className=' leading-tight' > {"➣"} Collaborating with local educational institutions and industry partners to create apprenticeship opportunities for hands-on skill development.</p>

                            <p className=' leading-tight' > {"➣"} Offering scholarships or financial assistance to individuals in rural areas to access skill development courses and training programs.</p>
                            <p className=' leading-tight' > {"➣"} Providing access to online learning platforms and resources for skill development in remote areas with limited educational infrastructure.</p>
                            <p className=' leading-tight' > {"➣"} Partnering with government agencies and non-profit organizations to implement sustainable skill development projects in rural communities.</p>
                            <p className=' leading-tight' > {"➣"} Conducting regular assessments and evaluations to measure the impact of CSR activities on skill development and adjust strategies accordingly for continuous improvement.</p>

                        </div>
                    </div>

                </div>

                <Tokenomics />
                <Listing />
            </div>

        </>
    )
}

export default Roadmap