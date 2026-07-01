import {useState} from "react";
import ProjectCard from "./ProjectCard";


export default function Projects(){


const [selected,setSelected]=useState(null);



const projects=[



{

title:"Phishing Detector",

category:"Cybersecurity Tool",

image:"/1234.png",

description:

"A rule based phishing detection system designed to identify suspicious URLs and phishing patterns. The system analyzes URL structure, keywords, domain behavior and known indicators to detect possible phishing attempts. Built with defensive security approach focusing on threat detection and awareness.",


tech:[

"Python",

"Rule Engine",

"Threat Detection",

"Cyber Security"

],

status:"ACTIVE"


},





{

title:"Wazuh Home Lab",

category:"SOC Environment",


description:

"A personal security monitoring laboratory built using Wazuh SIEM. The lab focuses on log collection, security monitoring, alert generation and endpoint visibility. Used for learning SOC operations and defensive security workflows.",


tech:[

"Wazuh",

"SIEM",

"Linux",

"Monitoring"

],

status:"ONLINE"


},





{

title:"Cyber Portfolio",

category:"Security Interface",


description:

"An interactive cybersecurity portfolio built as a terminal inspired security environment. Includes hidden commands, easter eggs, live security feed and cyber themed interface. Designed to showcase security mindset and development skills.",


tech:[

"React",

"Tailwind",

"JavaScript",

"UI/UX"

],

status:"RUNNING"


}



];









return(


<section


id="projects"


className="

w-full

overflow-hidden

px-4

sm:px-6

lg:px-16

py-20

"


>








<h2


className="

text-3xl

sm:text-4xl

lg:text-5xl

text-green-400

font-bold

tracking-[0.15em]

mb-10

font-mono

break-words

"

>


&gt; PROJECT_DATABASE_


</h2>









<div


className="

flex

gap-6

overflow-x-auto

snap-x

snap-mandatory

scroll-smooth

pb-8

"

>







{


projects.map((project,index)=>(


<div


key={index}


className="

snap-center

shrink-0

w-[85vw]

sm:w-[350px]

"

>



<ProjectCard


project={project}


onClick={()=>setSelected(project)}


/>



</div>



))


}







</div>












{

selected && (



<div


onClick={()=>setSelected(null)}


className="

fixed

inset-0

z-50

bg-black/90

backdrop-blur-sm

flex

items-center

justify-center

px-5

"

>






<div


onClick={(e)=>e.stopPropagation()}


className="

w-full

max-w-lg

bg-black

border

border-green-500

rounded-xl

p-6

shadow-[0_0_80px_rgba(0,255,100,.3)]

"

>





<h2


className="

text-2xl

sm:text-3xl

font-bold

text-green-400

break-words

"

>


{selected.title}


</h2>






<p


className="

text-green-400

mt-3

font-mono

"

>


{selected.category}


</p>








<p


className="

text-gray-300

mt-5

leading-relaxed

text-sm

sm:text-base

"

>


{selected.description}


</p>









<div


className="

flex

flex-wrap

gap-2

mt-6

"


>


{


selected.tech.map((tag,i)=>(


<span


key={i}


className="

border

border-green-500/70

px-3

py-1

rounded-full

text-green-400

text-xs

sm:text-sm

"

>


{tag}


</span>



))


}


</div>









<div


className="

mt-6

text-green-400

font-mono

"

>


STATUS :


<span className="ml-2">


{selected.status}


</span>



</div>










<button


onClick={()=>setSelected(null)}


className="

mt-8

border

border-green-500

px-5

py-2

text-green-400

hover:bg-green-500

hover:text-black

transition

"


>


CLOSE


</button>







</div>






</div>



)

}





</section>



)


}