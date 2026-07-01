import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function App() {

return (

<BrowserRouter>


<div 
className="
relative
min-h-screen
w-full
overflow-hidden
bg-black
"
>


<Navbar />


{/* Cyber Grid Background */}

<div
className="
absolute
inset-0
bg-[linear-gradient(rgba(0,255,100,0.03)1px,transparent 1px),linear-gradient(90deg,rgba(0,255,100,0.03)1px,transparent 1px)]
bg-[size:40px_40px]
pointer-events-none
"
>
</div>



<Routes>

<Route path="/" element={<Home />} />

</Routes>



</div>


</BrowserRouter>


)

}


export default App;