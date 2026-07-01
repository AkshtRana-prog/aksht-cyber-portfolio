import {useEffect,useState} from "react";


export default function CyberCursor(){


const [pos,setPos]=useState({

x:0,
y:0

});



useEffect(()=>{


const move=(e)=>{


setPos({

x:e.clientX,

y:e.clientY

});


};



window.addEventListener(

"mousemove",

move

);


return()=>{

window.removeEventListener(
"mousemove",
move
)

}



},[]);





return(


<div

className="

fixed

w-5

h-5

border

border-green-400

rounded-full

pointer-events-none

z-[9999]

shadow-[0_0_20px_rgba(0,255,100,.8)]

"

style={{

left:pos.x-10,

top:pos.y-10

}}

/>


)

}