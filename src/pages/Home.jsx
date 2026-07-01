import {useEffect,useState} from "react";


import Background from "../components/Background";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import SecurityStatus from "../components/SecurityStatus";
import Particles from "../components/Particles";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import CyberHints from "../components/CyberHints";
import RandomEvents from "../components/RandomEvents";
import BootScreen from "../components/BootScreen";
import Certifications from "../components/Certifications";
import CyberCursor from "../components/CyberCursor";





export default function Home(){



const [boot,setBoot]=useState(true);





useEffect(()=>{


window.scrollTo(0,0);


},[]);







return(


<>


{


boot &&


<BootScreen

finish={()=>setBoot(false)}

/>


}






<div


className="

relative

w-full

min-h-screen

overflow-x-hidden

bg-[radial-gradient(circle_at_center,rgba(0,255,100,0.08),transparent_40%)]

"


>





{/* CYBER CURSOR */}

<CyberCursor/>







{/* BACKGROUND */}



<div

className="

absolute

inset-0

-z-10

"


>

<Background/>

</div>








{/* CYBER EFFECTS */}



<Particles/>


<CyberHints/>


<RandomEvents/>






{/* SYSTEM STATUS */}



<SecurityStatus/>









{/* HERO */}



<main


id="home"


className="

w-full

min-h-[calc(100vh-70px)]

flex

items-center

justify-center

px-4

sm:px-6

py-10

"


>


<Hero/>


</main>











{/* STATS */}



<section


className="

w-full

px-4

sm:px-6

pb-20

"


>


<Stats/>


</section>









{/* MAIN SECTIONS */}



<Projects/>





<Skills/>





<Certifications/>





<Timeline/>





<Blogs/>





<Contact/>







</div>



</>


)

}