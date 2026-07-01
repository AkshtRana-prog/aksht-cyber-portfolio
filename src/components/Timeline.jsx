import {motion} from "framer-motion";


const timeline=[


{
year:"2026",

title:"Cyber Security Internship",

company:"Craw Security",

desc:
"Working on practical cybersecurity operations, security tools, vulnerability analysis and defensive security practices."

},



{
year:"2026",

title:"Cybersecurity Portfolio",

company:"Personal Project",

desc:
"Built an interactive cybersecurity portfolio featuring terminal interface, security dashboard, projects and automation concepts."

},



{
year:"2026",

title:"Wazuh Home Lab",

company:"Self Learning",

desc:
"Created SIEM based monitoring environment using Wazuh for threat detection, log analysis and security monitoring."

},



{
year:"2025",

title:"Phishing Detector",

company:"Security Project",

desc:
"Developed a rule based phishing detection system to analyze suspicious URLs and identify potential phishing attempts."

}



];




export default function Timeline(){



return(


<section

id="timeline"

className="

px-5

sm:px-8

py-20

max-w-6xl

mx-auto

"

>



<h2

className="

text-3xl

sm:text-4xl

text-green-400

font-mono

tracking-widest

mb-12

"

>

&gt; CAREER_TIMELINE_

</h2>






<div

className="

border-l

border-green-500/40

space-y-10

pl-8

"

>





{

timeline.map((item,index)=>(



<motion.div


key={index}


initial={{

opacity:0,

x:-40

}}


whileInView={{

opacity:1,

x:0

}}


transition={{

duration:.5

}}



className="relative"

>




<div

className="

absolute

-w-[10px]

-h-[10px]

w-3

h-3

bg-green-400

rounded-full

-left-[38px]

top-3

shadow-[0_0_20px_#22c55e]

"

/>







<div

className="

bg-black

border

border-green-500/40

rounded-xl

p-6

shadow-[0_0_30px_rgba(0,255,100,.15)]

"

>



<p className="text-green-400 font-mono">

{item.year}

</p>




<h3 className="text-white text-xl font-bold mt-3">

{item.title}

</h3>




<p className="text-green-400 mt-2">

{item.company}

</p>



<p className="text-gray-400 mt-4">

{item.desc}

</p>



</div>






</motion.div>


))


}




</div>




</section>


)

}