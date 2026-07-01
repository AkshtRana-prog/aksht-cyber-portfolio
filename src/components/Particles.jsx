import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


export default function CyberParticles(){


const particlesInit = useCallback(async(engine)=>{

await loadSlim(engine);

},[]);



return(


<Particles


init={particlesInit}



options={{


background:{


color:{


value:"transparent"


}


},





fpsLimit:60,





particles:{



number:{


value:70,


density:{


enable:true,


area:800


}


},






color:{


value:"#00ff66"


},







links:{


enable:true,


distance:150,


color:"#00ff66",


opacity:0.4,


width:1


},







move:{


enable:true,


speed:1,


direction:"none",


outModes:{


default:"bounce"


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



)


}