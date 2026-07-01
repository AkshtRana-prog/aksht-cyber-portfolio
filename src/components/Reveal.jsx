import {motion} from "framer-motion";


export default function Reveal({children}){


return(


<motion.div


initial={{

opacity:0,

y:50

}}



whileInView={{

opacity:1,

y:0

}}



transition={{

duration:.7

}}



viewport={{

once:true

}}


>


{children}


</motion.div>


)

}