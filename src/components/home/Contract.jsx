 
import   { useState } from "react";
import { motion } from "framer-motion"
 

const Contract = () => {
    const [copied, setCopied] = useState(false);
    const text = "0xc755377CD13ca4BedB87EED8D2C5105d46FFC3";

    const handleCopy = () => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000); // Hide the popup after 2 seconds
            })
            .catch((err) => {
                console.error("Copy failed: ", err);
            });
    };




    return (
        <>


            <div id="contract1" className=" z-0 ">
                {/* <div className="shadow"></div>
        <div className="shadow2"></div> */}

                <div id="contract">
                    <motion.h5
                        initial={{ x: 0 }}
                        whileInView={{ x: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 }, }}
                        className=" text-[var(--prime-yellow)]  oxanium text-3xl">Contract Address</motion.h5>
                    <h3 style={{ color: "white" }}>{text}</h3>


                    <div id="contract-button">

                        <motion.button
                            initial={{ x: -40 }}
                            transition={{ duration: 1 }}
                            whileInView={{ x: 0 }}
                            className="btn "
                            style={{ width: "230px" }}
                            onClick={handleCopy}
                        >
                            <span className="flex oxanium">
                                <img
                                    src="/assets/copy (1).webp"
                                    height={25}
                                    width={25}
                                    style={{ marginRight: 15 }}
                                    alt="B"
                                />
                                Copy Address
                            </span>
                        </motion.button>
                        <motion.button
                            initial={{ x: 40 }}
                            transition={{ duration: 1 }}
                            whileInView={{ x: 0 }}
                            className="btn "
                            style={{ width: "230px" }}
                            onClick={() =>
                                window.open(
                                    "#",
                                    "_blank"
                                )
                            }
                        >
                            <span className="flex oxanium">
                                <img
                                    src="/assets/bsc.webp"
                                    height={25}
                                    width={25}
                                    style={{ marginRight: 15 }}
                                    alt="B"
                                />
                                BSC SCAN
                            </span>
                        </motion.button>
                    </div>
                    {copied && (
                        <div className="popup mt-3" style={{ zIndex: 1, color: "white" }}>
                            Copied to clipboard!
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Contract;
