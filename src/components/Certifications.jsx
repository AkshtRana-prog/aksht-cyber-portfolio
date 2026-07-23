import {useState} from "react";
import {motion} from "framer-motion";


const certifications=[


{

name:"Certified Ethical Hacker (CEH)",

issuer:"Cryptus Cyber Security",

image:"/CEH.png"

},



{

name:"Introduction to Blue Teaming",

issuer:"LetsDefend",

image:"/Lets.jpeg"

},



{

name:"Introduction to Cybersecurity",

issuer:"Cisco Networking Academy",

image:"/intro.jpeg"

},



{

name:"Basic Networking",

issuer:"Cisco Networking Academy",

image:"/networking.png"

},



{

name:"Cyber Job Simulation",

issuer:"Deloitte - Forage",

image:"/deloitte.png"

},


{

name:"SOC L1",

issuer:"TryHackMe",

image:"/THMSOCL1.png"

}


];





export default function Certifications(){



const [selected,setSelected]=useState(null);




return(


<section

id="certifications"

className="

px-4

sm:px-6

py-20

max-w-7xl

mx-auto

"

>





<h2

className="

text-3xl

sm:text-4xl

text-green-400

font-mono

tracking-widest

mb-10

"

>

&gt; CERTIFICATIONS_

</h2>







<div

className="

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

gap-8

"

>





{

certifications.map((cert,index)=>(



<motion.div


key={index}



whileHover={{

rotateY:10,

rotateX:5,

scale:1.04

}}



transition={{

type:"spring",

stiffness:180

}}



className="

bg-black/90

border

border-green-500/40

rounded-xl

p-5

cursor-pointer

shadow-[0_0_40px_rgba(0,255,100,.2)]

"

>









<img

src={cert.image}

alt={cert.name}


onClick={()=>setSelected(cert.image)}


className="

w-full

h-48

object-cover

rounded-lg

cursor-pointer

border

border-green-500/30

"

/>









<h3

className="

text-white

text-xl

font-bold

mt-5

"

>

{cert.name}

</h3>








<p

className="

text-green-400

mt-3

font-mono

text-sm

"

>

ISSUER:

{cert.issuer}

</p>







<p

className="

text-green-400

mt-5

font-mono

"

>

&gt; VIEW_CERTIFICATE_

</p>







</motion.div>



))


}



</div>









{/* IMAGE POPUP */}




{

selected &&



<div

className="

fixed

inset-0

bg-black/80

flex

items-center

justify-center

z-50

p-5

"


onClick={()=>setSelected(null)}

>



<div

className="

relative

max-w-4xl

max-h-[90vh]

"

>


<img

src={selected}

className="

max-h-[85vh]

rounded-xl

border

border-green-500

shadow-[0_0_80px_rgba(0,255,100,.4)]

"

/>



<button

className="

absolute

top-3

right-3

bg-black

text-green-400

border

border-green-500

px-3

py-1

rounded

"

>


X


</button>



</div>



</div>



}




</section>


)

}