 
import { motion } from "framer-motion"


const Popup1 = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };


    return (
        <>
            <motion.div

                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                transition={{ duration: 0.5 }}
                id="wa-popup"  >

                <p className='  text-black leading-tight '>The IPCD envisions a world where work fosters human flourishing, not just an expedient to a cessation. It aims to professionalize people teams, situating them as catalysts for societal change. The mission is to enhance efficacy and apperception in the realm of personnel and corporate development. IPCD has devised a comprehensive corporate assessment system designed to evaluate all the components of a company that significantly influence your vocation prosperity. It withal incorporates a university rating system, availing students and working professionals and culling the best universities that align with their profiles or fascinates. IPCDs unique candidate assessment system. This implement sanctions recruiters to gage a {"candidate's"} felicitousness for a concrete role, analyzing sundry factors such as edification, work experience, skills, and achievements. But wait, {"there's"} more. A robust recommendation engine provides feedback predicated on your online screening test performance. It suggests indispensable courses or training plans to ameliorate any destitute of skills, proving invaluable for those aspiring for a job or promotion. IPCD has ingeniously engendered an integrated platform to cater to your desiderata and aspirations. </p>


            </motion.div>


        </>
    )
}

export default Popup1