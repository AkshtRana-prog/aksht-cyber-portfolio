import {motion} from "framer-motion";


export default function ProjectCard({project,onClick}){


return(


<motion.div


onClick={onClick}



whileHover={{

rotateY:8,

rotateX:4,

scale:1.03

}}



transition={{

type:"spring",

stiffness:160

}}




className="

w-full

h-[430px]

bg-black/90

border

border-green-500/40

rounded-2xl

p-5

cursor-pointer

overflow-hidden

shadow-[0_0_45px_rgba(0,255,100,.18)]

flex

flex-col

"

>








{

project.image && (



<img


src={project.image}


alt={project.title}


className="

w-full

h-40

sm:h-44

object-cover

rounded-lg

border

border-green-500/30

mb-5

"

/>



)

}









<p


className="

text-green-400

text-sm

font-mono

tracking-wider

"


>


{project.category}


</p>









<h2


className="

text-xl

sm:text-2xl

font-bold

text-white

mt-3

break-words

"

>


{project.title}


</h2>









<p


className="

text-gray-400

mt-4

text-sm

leading-relaxed

line-clamp-5

flex-1

"


>


{project.description}


</p>









<div


className="

flex

flex-wrap

gap-2

mt-5

"

>


{


project.tech.map((tag,i)=>(



<span


key={i}


className="

text-xs

text-green-400

border

border-green-500/50

px-3

py-1

rounded-full

whitespace-nowrap

"


>


{tag}


</span>



))


}



</div>









<div


className="

mt-5

text-green-400

font-mono

text-sm

"

>


STATUS :


<span className="ml-2">


{project.status}


</span>



</div>









<div


className="

mt-4

text-green-400

font-mono

text-sm

animate-pulse

"

>


&gt; OPEN_CASE_FILE_


</div>







</motion.div>



)


}