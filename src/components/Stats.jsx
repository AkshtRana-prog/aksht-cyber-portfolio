export default function Stats(){


const stats=[

{
number:"03",
title:"PROJECTS",
desc:"Security tools & research"
},

{
number:"12+",
title:"TOOLS",
desc:"Linux | SIEM | Python"
},

{
number:"03",
title:"BLOGS",
desc:"Security writeups"
},

{
number:"04",
title:"CERTIFICATIONS",
desc:"CEH | Cisco | Security"
}

]


return(

<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
px-16
py-10
border-t
border-green-900/50
bg-black/40
">


{

stats.map((item)=>(


<div

key={item.title}

className="
border
border-green-900
bg-black/40
p-8
hover:border-green-400
transition
"

>


<p className="
text-5xl
text-green-400
">

{item.number}

</p>


<p className="
mt-3
text-white
tracking-widest
">

{item.title}

</p>


<p className="
mt-2
text-gray-500
text-sm
">

{item.desc}

</p>


</div>


))

}


</div>

)

}