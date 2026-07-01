import { useState } from "react";
import Terminal from "./Terminal";


export default function Hero(){


const [terminalOpen,setTerminalOpen] = useState(false);



return(


<section 

className="
relative
grid
grid-cols-1
lg:grid-cols-2
gap-8
items-center
px-4
sm:px-6
md:px-10
lg:px-16
min-h-[80vh]
w-full
max-w-7xl
mx-auto
"


>



{/* LEFT SIDE */}



<div>



<div 

className="
inline-block
border
border-green-500
px-5
py-2
text-green-400
mb-8
font-mono
text-sm
"

>

SYSTEM STATUS : ONLINE ●

</div>





<h1

className="
text-4xl
sm:text-5xl
lg:text-6xl
font-bold
text-green-400
tracking-wider
"

>

AKSHT_RANA_

</h1>





<h2

className="
text-xl
sm:text-2xl
mt-5
text-white
"

>

CYBERSECURITY DEVELOPER_

</h2>





<p

className="
mt-3
text-green-500
tracking-widest
text-sm
sm:text-lg
"

>

SOC | THREAT DETECTION | SECURITY AUTOMATION

</p>








<p

className="
mt-5
text-gray-400
text-base
sm:text-lg
"

>

Building security tools, automation systems and defensive solutions.

</p>







<div

className="
mt-5
text-gray-500
text-sm
"

>


Currently researching:


<span

className="
text-green-400
"

>


SOC Operations | Threat Intelligence | Security Automation


</span>


</div>







<div

className="
mt-8
flex
flex-col
sm:flex-row
gap-5
"

>



<button


onClick={()=>setTerminalOpen(true)}



className="
border
border-green-500
px-6
py-3
text-green-400
hover:bg-green-500
hover:text-black
transition
font-mono
"

>


&gt; ACCESS TERMINAL


</button>






<button


onClick={()=>


document.getElementById("projects")
?.scrollIntoView({

behavior:"smooth"

})


}



className="
border
border-gray-600
px-6
py-3
text-white
hover:border-green-500
transition
font-mono
"


>


VIEW PROJECTS


</button>



</div>





</div>









{/* TERMINAL */}




<div

className="
flex
justify-center
items-center
w-full
"


>


<div

className="
w-full
max-w-[500px]
"

>


<Terminal active={terminalOpen}/>


</div>


</div>







{/* SCROLL INDICATOR */}





<div

className="
absolute
bottom-5
left-1/2
-translate-x-1/2
text-green-400
animate-bounce
text-sm
font-mono
"

>

↓ SCROLL_

</div>




</section>


)

}