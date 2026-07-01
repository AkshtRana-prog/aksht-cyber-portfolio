import {useEffect,useState} from "react";


export default function RandomEvents(){


const [msg,setMsg]=useState(null);



useEffect(()=>{


const messages=[

"Threat intelligence scan completed ✓",

"Unknown signal detected...",

"Background firewall monitoring active",

"New encrypted packet intercepted"

];



const timer=setInterval(()=>{


setMsg(
messages[Math.floor(Math.random()*messages.length)]
);


setTimeout(()=>{

setMsg(null)

},5000);



},30000);



return()=>clearInterval(timer);


},[]);




if(!msg)

return null;



return(

<div

className="
fixed
bottom-10
right-10
z-40
bg-black
border
border-green-500
p-5
text-green-400
font-mono
text-sm
shadow-lg
"

>

{msg}


</div>


)

}