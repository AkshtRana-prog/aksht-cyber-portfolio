import {useState,useEffect} from "react";


export default function Navbar(){



const [active,setActive]=useState("HOME");

const [open,setOpen]=useState(false);





const links=[

{
name:"HOME",
id:"home"
},

{
name:"PROJECTS",
id:"projects"
},

{
name:"SKILLS",
id:"skills"
},

{
name:"TIMELINE",
id:"timeline"
},

{
name:"BLOGS",
id:"blogs"
},

{
name:"CONTACT",
id:"contact"
}

];







useEffect(()=>{


const handleScroll=()=>{


links.forEach((link)=>{


const section=document.getElementById(link.id);


if(section){


const top=section.offsetTop-150;


const height=section.offsetHeight;



if(

window.scrollY>=top &&

window.scrollY<top+height

){


setActive(link.name);


}


}



});


};



window.addEventListener(

"scroll",

handleScroll

);


return()=>{

window.removeEventListener(

"scroll",

handleScroll

)

}


},[]);








function navigate(link){



document

.getElementById(link.id)

?.scrollIntoView({

behavior:"smooth"

});



setActive(link.name);


setOpen(false);



}







return(



<nav


className="

fixed

top-0

left-0

w-full

z-50

border-b

border-green-900

bg-black/70

backdrop-blur-xl

"


>





<div

className="

flex

justify-between

items-center

px-6

md:px-10

py-5

"


>







{/* LOGO */}




<h1


className="

text-green-400

text-xl

font-bold

tracking-wider

font-mono

cursor-pointer

animate-pulse

"


onClick={()=>navigate({

id:"home",

name:"HOME"

})}

>

&gt; AKSHT_RANA_

</h1>









{/* DESKTOP MENU */}




<div


className="

hidden

md:flex

gap-8

font-mono

text-sm

"


>


{

links.map((link)=>(


<button


key={link.name}



onClick={()=>navigate(link)}



className={`


relative

transition

duration-300


${

active===link.name

?

"text-green-400"

:

"text-gray-400"

}



hover:text-green-400



after:absolute

after:left-0

after:-bottom-2

after:h-[2px]

after:bg-green-400

after:w-full

after:scale-x-0

hover:after:scale-x-100

after:transition



`}


>


{link.name}


</button>


))


}


</div>









{/* STATUS */}




<div


className="

hidden

lg:flex

items-center

gap-2

border

border-green-500

px-3

py-2

text-green-400

font-mono

text-xs

"


>


<span className="animate-pulse">

●

</span>


ONLINE


</div>









{/* MOBILE BUTTON */}



<button


onClick={()=>setOpen(!open)}


className="

md:hidden

border

border-green-500

px-3

py-1

text-green-400

font-mono

"


>

&gt;_


</button>







</div>









{/* MOBILE MENU */}




{

open &&


<div


className="

md:hidden

border-t

border-green-900

bg-black

px-6

py-5

flex

flex-col

gap-5

font-mono

"


>


{

links.map((link)=>(


<button


key={link.name}


onClick={()=>navigate(link)}



className="

text-left

text-green-400

hover:text-white

"


>


{link.name}


</button>


))


}


</div>



}








</nav>



)

}