 
import { motion } from "framer-motion"

const About = () => {
    const staggerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, ease: "easeOut" },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    return (
        <>
            {/* bg-[url('/assets/aboutbg.svg')] */}
            <div id="about-main" className=" relative flex justify-center py-20 min-h-[100vh] gap-10 w-[100vw] bg-[url('/assets/aboutbg.png')]  overflow-hidden max-[850px]:flex-col max-[850px]:items-center " >

                <div className="  absolute left-0 top-0 bg-gradient-to-b from-black via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-screen h-[100px]  bottom-0 z-3"></div>
                <div className="  absolute left-0 bottom-0 bg-gradient-to-t from-black via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-screen h-[100px]  bottom-0 z-3"></div>


                <div id="about-left" className=' flex justify-center items-center h-[90%] w-[40%] max-[850px]:w-[80%] max-[500px]:w-[90%]'>
                    <img
                        src="/assets/about-img.png"
                        width={600}
                        height={600}
                        alt="Picture of the author"
                    />
                </div>

                <div id="about-right" className=' h-[100%] w-[60%] flex flex-col justify-center items-center    gap-[20px]  max-[850px]:w-[80%]'>
                    <div className='w-[100%] flex flex-col justify-center gap-[20px]'>
                        <div>
                            <h3 className=' text-[var(--prime-yellow)] text-2xl '>ABOUT US</h3>
                            <motion.h1
                                initial={{ x: 0 }}
                                whileInView={{ x: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 }, }}
                                whileHover={{ x: [0, -20, 10, -10, 10, 0], transition: { duration: 0.5 }, }}
                                className='text-5xl oxanium '>Do You Know <span className='text-[var(--prime-yellow)]' >?</span></motion.h1>
                        </div>
                        <p className='text-xl leading-tight'> IPCD, a century innovative institution, is a beacon of transformation in organizational dynamics, steadfastly partnering with organizations to elevate their people functions and champion better work and working lives.     </p>

                        <motion.ul
                            variants={staggerVariants}
                            initial="hidden"
                            whileInView="visible"


                            className='flex flex-col gap-[20px] w-[85%] max-[850px]:w-[100%] leading-tight'>
                            <motion.li variants={childVariants}>
                                IPCD fosters collaborative growth and excellence, serving as a trusted partner with insights to catalyze positive change in human resources, learning, and organizational development.
                            </motion.li>
                            <motion.li variants={childVariants}>
                                Rooted in a shared vision, {"IPCD's"} partnerships go beyond transactions, envisioning a future where work brings fulfillment and productivity, co-creating impact within and beyond the workplace.
                            </motion.li>
                            <motion.li variants={childVariants}>
                                IPCD collaborates to understand organizational challenges, crafting tailored strategies aligning people functions with business objectives, guiding leaders through the complexities of the contemporary workplace.
                            </motion.li>
                            <motion.li variants={childVariants}>
                                Beyond consultation, IPCD implements transformative practices, providing tools and resources to professionalize people functions, ensuring organizations navigate the dynamic HR landscape with agility and foresight.
                            </motion.li>
                        </motion.ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About