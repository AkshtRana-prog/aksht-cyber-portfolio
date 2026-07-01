export default function SecurityStatus(){


return(

<div className="
hidden
lg:block
absolute
right-6
top-32
z-20
border
border-green-900
p-5
bg-black/70
text-sm
shadow-[0_0_20px_rgba(0,255,100,0.2)]
backdrop-blur-sm
">


<p className="text-green-400">

SYSTEM MONITOR

</p>


<br/>


<p>
IP:
192.168.1.101
</p>


<p>
LOCATION:
INDIA
</p>


<p>
THREAT LEVEL:

<span className="
text-green-400
animate-pulse
">
LOW
</span>

</p>


</div>


)

}