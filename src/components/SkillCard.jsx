export default function SkillCard({skill}){


return(

<div

className="
border
border-green-500/40
p-6
bg-black/40
hover:border-green-400
hover:shadow-[0_0_20px_rgba(0,255,100,0.25)]
transition
duration-300
"


>


<h3

className="
text-xl
text-green-400
mb-4
"

>

{skill.name}

</h3>



<p

className="
text-gray-500
text-sm
"

>

TYPE:

<span className="text-white">

 {skill.type}

</span>

</p>




<p

className="
text-gray-500
text-sm
mt-2
"

>

STATUS:

<span className="text-green-400">

 {skill.level}

</span>


</p>



</div>


)

}