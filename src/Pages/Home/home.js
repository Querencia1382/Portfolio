import Hero from "./Components/hero";
import SlideBar from "../-Components/slideBar";



export default function Home(){

    return(
        <>
        <Hero />
        <SlideBar discount={true} title={"Discounts"}/>
        <SlideBar discount={false} title={"Most popular"}/>
        </>
    )
}


        /* 
            import MostPopular from "./Components/mostPopulars";
            <MostPopular /> 
        */