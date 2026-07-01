import {useState,useEffect,useRef} from "react";
import EasterEggPopup from "./EasterEggPopup";


export default function Terminal({active}){


const [history,setHistory]=useState([


"Initializing secure shell...",

"Loading security modules...",


"✓ Wazuh",

"✓ SIEM",

"✓ Threat Detection",

"✓ Automation Framework",


"",


"root@aksht-security:~$",


"Type 'help' for available commands...",


"",

"// hidden commands detected",

"// maybe try: sudo"


]);




const [input,setInput]=useState("");
const [popup,setPopup]=useState(null);
const [prevActive,setPrevActive]=useState(active);

if (active !== prevActive) {
  setPrevActive(active);
  if (active) {
    setHistory(prev => [
      ...prev,
      "",
      "Session unlocked",
      "root access terminal ready",
      "type help for commands"
    ]);
  }
}

const terminalRef=useRef(null);




useEffect(()=>{


terminalRef.current?.scrollTo({

top:terminalRef.current.scrollHeight,

behavior:"smooth"

});


},[history]);








function execute(){


let cmd=input.trim();



if(!cmd)

return;



let output="";



switch(cmd){



case "help":


output=`

Available Commands:


whoami

skills

projects

status

contact

matrix

cd ~

clear

`;

break;







case "whoami":


output=`

Aksht Rana


Cybersecurity Developer


SOC Analyst Aspirant


Focus:

Threat Detection

Security Automation

SIEM

`;

break;







case "skills":


output=`

[✓] Python

[✓] Linux

[✓] Wazuh

[✓] SIEM

[✓] Threat Intelligence

[✓] Security Automation

`;

break;







case "projects":


output=`

01. Phishing Detector


Rule based phishing detection system.


02. Wazuh Home Lab


SIEM monitoring environment.

`;

break;







case "status":


output=`

SYSTEM STATUS : ONLINE


Firewall      : ACTIVE

Threat Level  : LOW

Monitoring    : ENABLED

`;

break;







case "contact":


output=`

Email:

align.akshtrana@gmail.com


Github:

github.com/AkshtRana-prog


LinkedIn:

Aksht Rana

`;

break;







case "cd ~":


output=`

Directory changed:


/home/aksht

`;

break;







case "matrix":


output=`

Initializing secret protocol...


01001011 01010011 01001000


ACCESS GRANTED


Welcome to the matrix.

`;

break;









// =================
// EASTER EGGS
// =================




case "sudo":


output=`

Checking privileges...


USER: Aksht Rana
ACCESS LEVEL:
ROOT ✓
Welcome back, admin.
`;

break;







case "scan":


output=`

Running security scan...


[✓] Firewall

[✓] SIEM

[✓] Endpoint Monitoring

[✓] Threat Detection


No threats detected.


System secure.

`;

break;








case "decrypt":


output=`

Decrypting hidden file...
01001011 01010011 01001000

MESSAGE:
"You found the hidden layer."
Nice exploration.

`;

break;







case "hire":


setPopup(

"🚀 Recruiter protocol activated\n\nEmail draft prepared.\n\nTransmission complete ✓"

);



output=`

Initializing recruiter channel...


Searching contact endpoint...


Email:

align.akshtrana@gmail.com


Opening mail client...


Message prepared ✓


Transmission complete ✓

`;



setTimeout(()=>{


window.location.href =

"mailto:align.akshtrana@gmail.com?subject=We%20need%20you%20for%20our%20team&body=Hello%20Aksht,%0A%0AI%20found%20your%20security%20portfolio.";


},6000);



break;







case "hack":


output=`

ACCESS DENIED 😄
Defensive security only.

`;

break;


case "recruiter_channel.exe":


output=`
Executing recruiter_channel.exe...
Scanning opportunities...
Connection established ✓
Recruiter profile detected.

Hint:
Type "hire" to open communication channel.

`;

break;







case "clear":


setHistory([]);

setInput("");

return;








default:


output=

`

bash: ${cmd}: command not found


type help

`;



}






setHistory(prev=>[

...prev,

`root@aksht-security:~$ ${cmd}`,

output

]);



setInput("");



}










return(


<div


className="

w-full
max-w-[500px]
h-[430px]

bg-[#020202]

border

border-green-500/80

rounded-xl

overflow-hidden

font-mono

shadow-[0_0_80px_rgba(0,255,100,0.25)]

"

>





{/* HEADER */}



<div


className="

flex

items-center

gap-2

px-5

py-3

border-b

border-green-900

"

>



<span className="text-red-500">

●

</span>


<span className="text-yellow-400">

●

</span>


<span className="text-green-400">

●

</span>




<span

className="

text-green-400

ml-5

text-sm

"

>

aksht-terminal

</span>



</div>









{/* BODY */}



<div


ref={terminalRef}


className="

p-5

h-[330px]

overflow-y-auto

text-sm

leading-7

text-gray-300

"

>




{

history.map((line,index)=>(



<pre


key={index}


className={`

whitespace-pre-wrap

mb-2


${

line.includes("$")

||

line.includes("root@")

||

line.includes("[✓]")


?

"text-green-400"

:

""

}


`}


>


{line}


</pre>


))

}





{


active && (



<div className="flex items-center mt-3">


<span className="text-green-400">


root@aksht-security:~$


</span>




<input


autoFocus


value={input}



onChange={(e)=>setInput(e.target.value)}



onKeyDown={(e)=>{


if(e.key==="Enter")

execute();


}}



className="

bg-transparent

outline-none

ml-2

flex-1

text-green-300

"



/>



<span className="animate-pulse text-green-400">

█

</span>



</div>



)

}







{


!active && (


<div

className="

mt-4

text-green-400

animate-pulse

text-sm

"


>

ACCESS LOCKED_

WAITING FOR AUTHORIZATION...


</div>



)

}



</div>

{

popup &&

<EasterEggPopup

message={popup}

onClose={()=>setPopup(null)}

/>

}




</div>


)


}