import CarouselCard from "../Components/CarouselCard";
import Navbard from "../Components/Navbard";
import SmallCarousel from "../Components/SmallCarousel";


const HomePage=()=>{
    return(
        <>
<Navbard/>
<CarouselCard/>
<SmallCarousel/>
<div className="w-screen h-[40vh] bg-slate-400">

</div>
        </>
    )
}

export default HomePage;