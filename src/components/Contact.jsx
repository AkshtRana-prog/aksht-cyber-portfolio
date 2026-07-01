import {useState} from "react";

import {
FaGithub,
FaLinkedin,
FaEnvelope
} from "react-icons/fa";



export default function Contact(){


const [command,setCommand]=useState("");

const [output,setOutput]=useState(

"Type 'help' to see available commands..."

);



const [popup,setPopup]=useState(false);





const runCommand=(e)=>{


if(e.key==="Enter"){


const cmd=command.toLowerCase().trim();


let response="";



switch(cmd){



case "help":


response=
`
AVAILABLE COMMANDS:


about

github

linkedin

email

skills


(hidden)

recruiter_channel.exe

hire

clear

`;

break;







case "about":


response=
`
Aksht Rana


Cybersecurity Developer

SOC Analyst Aspirant


Focus:


Threat Detection

Security Automation

SIEM

`;

break;







case "github":


response=
`
Opening GitHub...


github.com/AkshtRana-prog

`;

window.open(

"https://github.com/AkshtRana-prog",

"_blank"

);


break;








case "linkedin":


response=
`
Opening LinkedIn...


linkedin.com/in/aksht-rana-009515373

`;

window.open(

"https://www.linkedin.com/in/aksht-rana-009515373",

"_blank"

);


break;








case "email":


response=
`
Email:


align.akshtrana@gmail.com

`;

break;







case "skills":


response=
`
[✓] Python

[✓] Linux

[✓] Wazuh

[✓] SIEM

[✓] Threat Intelligence

[✓] Security Automation

`;

break;







case "recruiter_channel.exe":


response=
`
Executing recruiter_channel.exe...


Scanning opportunities...


Connection established ✓


Candidate detected:


Aksht Rana


Hint:

Type "hire"

`;

break;








case "hire":


response=
`
Recruiter protocol activated...


Preparing email draft...


To:

align.akshtrana@gmail.com


Status:

READY TO SEND ✓

`;



setPopup(true);



setTimeout(()=>{


window.location.href=

"mailto:align.akshtrana@gmail.com?subject=Security%20Opportunity%20for%20Aksht";


},3000);



break;








case "secret":


response=
`
ACCESS GRANTED 🚀


SYSTEM OWNER DETECTED


Welcome to Aksht's security lab.

`;

break;







case "clear":


setOutput("");

setCommand("");

return;







default:


response=
`
Command not found:


${cmd}


Type help

`;



}





setOutput(response);


setCommand("");



}


}








return(



<section

id="contact"

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

text-3xl

md:text-4xl

text-green-400

tracking-widest

mb-12

"

>

&gt; CONTACT_TERMINAL_

</h2>









<div

className="

border

border-green-500/50

bg-black/90

rounded-xl

p-6

shadow-[0_0_50px_rgba(0,255,100,0.25)]

"

>






{/* terminal header */}



<div

className="

flex

gap-2

mb-6

"

>


<span className="w-3 h-3 bg-red-500 rounded-full"/>

<span className="w-3 h-3 bg-yellow-500 rounded-full"/>

<span className="w-3 h-3 bg-green-500 rounded-full"/>


</div>







<p className="text-green-400">


root@aksht-contact:~$

</p>








<p


className="

text-gray-300

whitespace-pre-line

mt-5

min-h-32

leading-relaxed

"


>

{output}

</p>









<div className="flex mt-6">


<span className="text-green-400">

$

</span>



<input


className="

bg-transparent

outline-none

text-green-300

ml-2

w-full

"



value={command}



onChange={(e)=>setCommand(e.target.value)}



onKeyDown={runCommand}



/>




<span

className="

text-green-400

animate-pulse

"

>

█

</span>




</div>







</div>









{/* SOCIAL LINKS */}




<div

className="

flex

flex-wrap

gap-8

mt-10

"

>






<a


href="https://github.com/AkshtRana-prog"


target="_blank"


className="

flex

items-center

gap-3

text-gray-400

hover:text-green-400

transition

"

>

<FaGithub size={25}/>

GitHub

</a>








<a


href="https://www.linkedin.com/in/aksht-rana-009515373"


target="_blank"


className="

flex

items-center

gap-3

text-gray-400

hover:text-green-400

transition

"

>


<FaLinkedin size={25}/>


LinkedIn


</a>








<a


href="mailto:align.akshtrana@gmail.com"


className="

flex

items-center

gap-3

text-gray-400

hover:text-green-400

transition

"

>


<FaEnvelope size={25}/>


Email


</a>







</div>









<footer


className="

mt-20

border-t

border-green-500/20

pt-8

text-center

text-gray-500

text-sm

"

>




<p>

SYSTEM STATUS:

<span className="text-green-400">

 ONLINE 

</span>

</p>





<p className="mt-3">

© 2026 Aksht Rana | Cybersecurity Portfolio

</p>





<p className="mt-2">

Built with React + Tailwind + Security Mindset

</p>






</footer>









{

popup &&

<div

className="

fixed

top-10

right-10

z-50

bg-black

border

border-green-500

p-6

rounded-xl

shadow-[0_0_40px_rgba(0,255,100,0.5)]

font-mono

text-green-400

animate-pulse

"

>


<h3>

EMAIL_CLIENT

</h3>


<p className="mt-3 text-white">

Message prepared ✓

<br/>

Sending recruiter request...

</p>



</div>

}




</section>


)

}