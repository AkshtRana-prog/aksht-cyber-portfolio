import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


export default function Background(){


const particlesInit = useCallback(async(engine)=>{


await loadSlim(engine);


},[]);





return(


<div className="absolute inset-0 -z-10">


<Particles


init={particlesInit}



options={{



background:{


color:{


value:"#000000"


}


},





fpsLimit:60,





particles:{



number:{


value:80,


density:{


enable:true,


area:900


}


},






color:{


value:"#00ff66"


},







links:{


enable:true,


distance:140,


color:"#00ff66",


opacity:0.25,


width:1


},







move:{


enable:true,


speed:0.8,


direction:"none",


outModes:{


default:"out"


}


},







size:{


value:{


min:1,


max:3


}


},







opacity:{


value:0.5


}






},





detectRetina:true



}}


/>



</div>


)


}