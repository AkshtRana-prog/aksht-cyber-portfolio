import {useEffect,useState} from "react";


export default function BootScreen({finish}){


const [logs,setLogs]=useState([]);

const [alerts,setAlerts]=useState([]);

const [glitch,setGlitch]=useState(false);




const bootLogs=[


"INITIALIZING AKSHT_SECURITY CORE",

"LOADING ENCRYPTION MODULE",

"ANALYZING C60 STRUCTURE",

"C60 CYBER CORE DETECTED",

"CONNECTING THREAT ENGINE",

"WAZUH NODE ONLINE",

"SIEM DATABASE CONNECTED",

"ACCESSING AKSHT_RANA_",

"SYSTEM VERIFIED"


];





const alertWords=[


"PACKET_CAPTURED",

"ROOT_TRACE_FOUND",

"FIREWALL_SCAN",

"WAZUH_SYNC",

"SIEM_LINK",

"ENCRYPTED_CHANNEL",

"NODE_CONNECTED",

"THREAT_ANALYSIS"


];









useEffect(()=>{


let index=0;



const bootTimer=setInterval(()=>{


setLogs(prev=>[

...prev,

bootLogs[index]

]);



index++;




if(index >= bootLogs.length){


clearInterval(bootTimer);


}


},350);







const alertTimer=setInterval(()=>{


setAlerts(prev=>[


...prev.slice(-25),


{


id:Date.now(),


text:
alertWords[
Math.floor(
Math.random()*alertWords.length
)
],



x:
Math.random()*75+5,



y:
Math.random()*65+5


}


]);



},150);









const exitTimer=setTimeout(()=>{


clearInterval(alertTimer);



setGlitch(true);



setTimeout(()=>{


finish();


},1800);



},5200);







return()=>{


clearInterval(bootTimer);

clearInterval(alertTimer);

clearTimeout(exitTimer);


}



},[]);









return(



<div


className="

fixed

inset-0

z-[999]

bg-black

overflow-hidden

font-mono

flex

items-center

justify-center

"

>








{/* SCAN EFFECT */}



<div


className="

absolute

top-0

left-0

w-full

h-[2px]

bg-green-400

animate-[scan_2s_linear_infinite]

shadow-[0_0_20px_#22c55e]

"

/>










{/* C60 CORE */}




<div


className={`


absolute


left-1/2


top-1/2


-translate-x-1/2


-translate-y-1/2



w-[180px]


h-[180px]

sm:w-[240px]


sm:h-[240px]



rounded-full



border

border-green-400



shadow-[0_0_100px_rgba(0,255,100,.8)]



transition-all

duration-1000



${

glitch

?

"scale-[3] opacity-0"

:

"animate-spin"

}



`}



>







<div


className="


absolute

inset-5


border

border-green-500


rounded-full


animate-ping



"

/>









<div


className="


absolute


inset-12


border


border-green-300


rounded-full



"

/>








</div>














{/* FLOATING POPUPS */}





{


alerts.map((item)=>(



<div



key={item.id}




style={{


left:`${item.x}%`,


top:`${item.y}%`


}}



className="



absolute



border

border-green-500



bg-black/90



px-3

py-2



rounded-md



text-green-400



text-[10px]

sm:text-xs



shadow-[0_0_30px_rgba(0,255,100,.5)]



animate-pulse



max-w-[150px]



"



>



{item.text}



</div>



))


}














{/* CENTER TITLE */}





<div


className="

relative

z-20

text-center

px-5

"


>






<h1


className="


text-3xl


sm:text-5xl


lg:text-7xl



font-bold



tracking-widest



text-green-400



"

>




</h1>








<p


className="


mt-5



text-gray-400



text-xs


sm:text-sm



tracking-widest



"



>





</p>






<div


className="


mt-6


text-green-500


text-sm



animate-pulse



"


>





</div>





</div>













{/* TERMINAL LOGS */}





<div



className="



absolute



bottom-5



left-5



right-5



sm:left-10



sm:right-auto



text-green-400



text-xs



sm:text-sm



leading-6



bg-black/40



p-3



rounded-lg



backdrop-blur-sm



max-h-[150px]



overflow-hidden



"

>



{


logs.map((log,i)=>(


<div key={i}>


&gt; {log}


</div>


))


}





<span className="animate-pulse">

_

</span>





</div>














{/* FINAL GLITCH */}




{


glitch &&


<div


className="


absolute


inset-0



flex


items-center


justify-center



bg-green-500/20



animate-pulse



z-30



"


>



<h1


className="


text-3xl


sm:text-5xl



font-bold



tracking-widest



text-green-400



text-center



"



>


ACCESS GRANTED


</h1>



</div>



}







</div>



)

}