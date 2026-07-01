import {useEffect} from "react";


export default function EasterEggPopup({message,onClose}){


useEffect(()=>{


const timer=setTimeout(()=>{

onClose();

},10000);



return()=>clearTimeout(timer);


},[onClose]);




return(


<div


className="

fixed

top-10

right-10

z-50

w-[380px]

bg-black

border

border-green-500

rounded-xl

shadow-[0_0_50px_rgba(0,255,100,0.4)]

font-mono

overflow-hidden

"


>



{/* email header */}

<div

className="

flex

items-center

justify-between

px-5

py-3

border-b

border-green-900

bg-green-950/20

"

>


<span className="text-green-400">

✉ SECURE MAIL

</span>


<span className="text-green-400">

●

</span>


</div>






{/* email body */}



<div className="p-5 text-sm">


<p className="text-gray-400">

FROM:

</p>


<p className="text-green-400 mb-3">

aksht-security@system.local

</p>





<p className="text-gray-400">

TO:

</p>


<p className="text-green-400 mb-3">

Recruiter / Hiring Team

</p>






<p className="text-gray-400">

SUBJECT:

</p>


<p className="text-white mb-5">

We need you for our security team 🚀

</p>







<div

className="

border-t

border-green-900

pt-4

text-white

leading-relaxed

"

>


Hello Aksht,


<br/><br/>


We discovered your cybersecurity portfolio.


<br/><br/>


Your skills in:

<br/>

✓ Threat Detection

<br/>

✓ Security Automation

<br/>

✓ SIEM

<br/>

✓ Wazuh


<br/><br/>


We would like to discuss an opportunity.


<br/><br/>



<span className="text-green-400">

STATUS: SENT ✓

</span>



</div>



</div>







</div>


)

}