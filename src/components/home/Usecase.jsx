
import  { useState } from "react";
// import img from "next/img";
import { motion } from "framer-motion"

const Usecase = () => {
    const [tooltipVisible, setTooltipVisible] = useState(true);
    const [tooltipimg, setTooltipimg] = useState("/assets/usecaseDefault.png");


    const handleMouseEnter = (img) => {

        setTooltipVisible(true);
        setTooltipimg(img);
    };

    const handleMouseLeave = () => {

        setTooltipimg("/assets/usecaseDefault.png");
        setTooltipVisible(true);
    };


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

    return (
        <>
            <div id="Usecase-main" className='min-h-[100vh] w-[100vw] flex py-20 flex-col justify-center items-center  gap-[4vmax] px-3   md:px-20 '>
                <div id="usecase-heading" className="flex flex-col gap-5 max-w-md mx-auto items-center">
                    <h1 className="text-5xl text-[var(--prime-yellow)]  oxanium ">Use Case</h1>
                    <p className="text-center leading-tight   " >The IPCD Utility Token goes beyond a digital currency, serving as a versatile tool in transactions for candidates, corporates, and institutions, revolutionizing people management interactions and transactions.</p>
                </div>

                <div className="flex  min-h-[100vh] justify-between items-center max-[1000px]:flex-col-reverse max-[1000px]:gap-10 ">
                    <motion.div
                        initial='hidden'
                        whileInView='visible'

                        variants={staggerVariants}

                        id="usecase-left" className='w-[70%] flex flex-col gap-7 justify-center items-center relative max-[1000px]:w-[90%]'>
                        <motion.div variants={childVariants}
                            onMouseEnter={() =>
                                handleMouseEnter("/assets/usecase1.png") // Set the img path for the first use case
                            }
                            onMouseLeave={handleMouseLeave}
                            className=" flex flex-col gap-2 border-b-2 border-white pb-5"
                        >
                            <h2 className="text-3xl oxanium "><span className="text-[var(--prime-yellow)]">Utility Token</span> as a Digital Mode of <span className="text-[var(--prime-yellow)]">Payment</span> </h2>
                            <p className=" leading-tight ">The IPCD Utility Token, a digital currency at its core, provides a secure medium for transactions within the IPCD ecosystem. Using blockchain, it ensures transparent, risk-mitigated financial processes, streamlining accreditation, certification, and professional development. IPCD has acquired an integrated system for scientifically evaluating personal, institutional and corporate credentials. These tools are essential for discerning the significance of their presence in this intricate and diverse global landscape. </p>
                        </motion.div>

                        <motion.div variants={childVariants}
                            onMouseEnter={() =>
                                handleMouseEnter("/assets/usecase2.svg") // Set the img path for the first use case
                            }
                            onMouseLeave={handleMouseLeave}
                            className=" flex flex-col gap-2 border-b-2 border-white pb-5"
                        >
                            <h2 className="text-3xl oxanium ">Usage by <span className="text-[var(--prime-yellow)]">Candidates</span> </h2>
                            <p className=" leading-tight ">The IPCD Utility Token is a valuable asset for professionals, enabling payment for accreditation, certification, and educational resources. It empowers continuous learning and serves as a secure showcase for digital credentials, reinforcing trust in the professional realm.IPCD platform will assist both entry-level and experienced candidates through a comprehensive scoring system that meticulously analyzes key factors. It will generate detailed reports on skills gaps and offer recommendations for improvement. As users acquire these skills and engage in assessments, their score will increase, which can then be shared on social media to attract recruiters. IPCD aims to be a shared platform for recruiters and job seekers, facilitating mutual benefit in a secure manner. </p>
                        </motion.div>

                        <motion.div variants={childVariants}
                            onMouseEnter={() =>
                                handleMouseEnter("/assets/usecase3.svg") // Set the img path for the first use case
                            }
                            onMouseLeave={handleMouseLeave}
                            className=" flex flex-col gap-2 border-b-2 border-white pb-5"
                        >
                            <h2 className="text-3xl oxanium ">Usage by <span className="text-[var(--prime-yellow)]">Institutions  </span>& <span className="text-[var(--prime-yellow)]">Learners  </span>   </h2>
                            <p className=" leading-tight ">The IPCD Utility Token catalyzes innovation for institutions in learning and development. It streamlines accreditation transactions, enhances certification management, and integrates with educational platforms, fostering accessibility and effectiveness in courses.Prospective users have the ability to access alumni rating and other relevant information pertaining to institutions on our platforms. The platform facilities learners in selecting the most suitable institution based on their preferences and desired career path. This platform serves as a conduit for alumni and prospective learners to exchange their learning experiences, adding prospective learners in making informed decision. </p>
                        </motion.div>

                        <motion.div variants={childVariants}
                            onMouseEnter={() =>
                                handleMouseEnter("/assets/usecase4.png") // Set the img path for the first use case
                            }
                            onMouseLeave={handleMouseLeave}
                            className=" flex flex-col gap-2 border-b-2 border-white pb-5"
                        >
                            <h2 className="text-3xl oxanium ">Usage by <span className="text-[var(--prime-yellow)]">Corporates</span> & <span className="text-[var(--prime-yellow)]">Employees</span>   </h2>
                            <p className=" leading-tight ">The IPCD Utility Token streamlines corporate processes, serving as a digital medium for HR transactions. It enables seamless payment, smart contract execution, and access to data-driven insights, enhancing efficiency and transparency.  Working professional can supplementally evaluates the company cognate information shared by employees through rating system. IPCD would be the best platform for employees and working professional to apportion or acquire information about the any company which will availing in apprised decision. </p>
                        </motion.div>

                        <motion.div variants={childVariants}
                            onMouseEnter={() =>
                                handleMouseEnter("/assets/usecase5.svg") // Set the img path for the first use case
                            }
                            onMouseLeave={handleMouseLeave}
                            className=" flex flex-col gap-2 border-b-2 border-white pb-5"
                        >
                            <h2 className="text-3xl oxanium ">    <span className="text-[var(--prime-yellow)]">Reward</span> System    </h2>
                            <p className=" leading-tight ">The IPCD Utility Token streamlines corporate processes, serving as a digital medium for HR transactions. It enables seamless payment, smart contract execution, and access to data-driven insights, enhancing efficiency and transparency.  Working professional can supplementally evaluates the company cognate information shared by employees through rating system. IPCD would be the best platform for employees and working professional to apportion or acquire information about the any company which will availing in apprised decision. </p>
                        </motion.div>

                    </motion.div>

                    <div id="usecase-right" className=" overflow-hidden flex justify-center items-center  h-[100%] object-fill ">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            transition={{ ease: "easeInOut", duration: 0.5, }}
                            whileInView={{ opacity: 1, scale: 1 }}

                            id="tooltip-right"
                            role="tooltip"
                            className={`  ${tooltipVisible ? 'visible' : 'invisible'} bg-cover flex justify-center items-center  overflow-hidden max-w-[100%] max-h-[100%]  px-3 py-2     text-white        `}
                        >

                            <img
                                src={tooltipimg}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />

                        </motion.div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Usecase