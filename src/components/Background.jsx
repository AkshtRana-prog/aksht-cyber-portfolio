import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";


export default function Background(){


const particlesInit = async(engine)=>{

await loadFull(engine);

};


return(

<Particles

init={particlesInit}


options={{

background:{
color:"#05070a"
},


particles:{


number:{
value:70
},


color:{
value:"#00ff66"
},


links:{

enable:true,

distance:150,

color:"#00ff66",

opacity:0.15

},


move:{

enable:true,

speed:0.6

},


size:{

value:2

}


}


}}


/>


)

}