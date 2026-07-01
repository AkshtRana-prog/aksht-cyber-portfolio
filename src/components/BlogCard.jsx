import {motion} from "framer-motion";


export default function BlogCard({blog,onClick}){


return(

<motion.div


whileHover={{
rotateX:8,
rotateY:-8,
scale:1.05
}}


transition={{
type:"spring",
stiffness:200
}}



onClick={onClick}


className="

min-w-[330px]

h-[360px]

bg-black/90

border

border-green-500/40

rounded-xl

p-6

cursor-pointer

shadow-[0_0_40px_rgba(0,255,100,0.25)]

"



>



<p className="text-green-400 text-sm">

{blog.category}

</p>



<h2 className="text-white text-2xl mt-6">

{blog.title}

</h2>



<p className="text-gray-400 mt-5">

{blog.description}

</p>



<div className="text-green-400 mt-10">

&gt; OPEN_REPORT_

</div>



</motion.div>


)

}