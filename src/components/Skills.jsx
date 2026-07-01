import {useState} from "react";


export default function Skills(){


const [selected,setSelected]=useState(null);



const skills=[


{
title:"SECURITY OPERATIONS",

items:[
" SOC Operations",
" SIEM Monitoring",
" Wazuh",
" Log Analysis",
" Threat Monitoring"
],


desc:
"Focused on defensive security, monitoring environments, analysing events and building SOC workflows."

},



{
title:"THREAT & VULNERABILITY",

items:[
"Threat Detection",
"Vulnerability Management",
"Phishing Analysis",
"Security Assessment"
],


desc:
"Understanding attack patterns, detecting malicious activity and creating defensive solutions."

},



{
title:"SECURITY TOOLS",

items:[
"Linux",
"Nmap",
"Wireshark",
"Git"
],


desc:
"Hands-on experience with security tools used for investigation and testing."

},



{
title:"PROGRAMMING & AUTOMATION",

items:[
"Python",
"Bash",
"Security Scripts",
"Automation",
"React"
],


desc:
"Building security tools and automating repetitive security tasks."

},




{
title:"CLOUD & INFRASTRUCTURE",

items:[
"Networking",
"Firewalls",
"Cloud Basics",
"System Administration"
],


desc:
"Understanding infrastructure, communication systems and defensive architecture."

},





{
title:"SOFT SKILLS",

items:[
"Problem Solving",
"Research",
"Team Collaboration",
"Adaptability",
"Time Management"
],


desc:
"Professional skills required to analyse problems and work effectively in security environments."

}



];




return(


<section

id="skills"

className="
w-full
max-w-6xl
mx-auto
px-6
py-24
"


>


<h2

className="
text-4xl
text-green-400
font-bold
tracking-widest
mb-12
"

>

&gt; SKILL_MATRIX_

</h2>




<div

className="
grid
md:grid-cols-3
gap-6
"


>


{

skills.map((skill,index)=>(



<div


key={index}

onClick={()=>setSelected(skill)}

className="

cursor-pointer

bg-black

border

border-green-500/40

rounded-xl

p-6

hover:border-green-400

hover:shadow-[0_0_30px_rgba(0,255,100,0.3)]

transition

"


>


<h3

className="
text-green-400
font-bold
mb-5
"

>

{skill.title}

</h3>




<ul

className="
text-gray-300
space-y-2
text-sm
"

>


{

skill.items.map((x,i)=>(

<li key={i}>

[✓] {x}

</li>


))

}


</ul>



<p

className="
text-xs
text-gray-500
mt-5
"

>

CLICK_TO_ACCESS_

</p>




</div>



))

}



</div>







{


selected &&

<div

className="

fixed

inset-0

bg-black/70

flex

items-center

justify-center

z-50

"


onClick={()=>setSelected(null)}

>


<div

onClick={(e)=>e.stopPropagation()}

className="

w-[400px]

bg-black

border

border-green-500

rounded-xl

p-8

shadow-[0_0_50px_rgba(0,255,100,0.4)]

font-mono

"


>



<div

className="
text-green-400
mb-5
"

>

root@aksht-security:~$

</div>




<h3

className="
text-white
text-xl
font-bold
mb-4
"

>

{selected.title}

</h3>




<p

className="
text-gray-300
leading-relaxed
"

>

{selected.desc}

</p>




<div

className="
mt-5
text-green-400
"

>


{

selected.items.map((x,i)=>(


<div key={i}>

&gt; {x}

</div>


))


}


</div>





<button

className="

mt-6

border

border-green-500

px-5

py-2

text-green-400

hover:bg-green-500

hover:text-black

"

onClick={()=>setSelected(null)}

>

CLOSE_SESSION

</button>



</div>


</div>


}



</section>


)

}