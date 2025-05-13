import Hero from "./Components/hero";
import SlideBar from "../-Components/slideBar";
import Categories from "./Components/categories";



export default function Home(){

    return(
        <>
        <Hero />
        <SlideBar discount={true} title={"Discounts"}/>
        <SlideBar discount={false} title={"Most popular"}/>
        <Categories />
        </>
    )
}


        /* 
            import MostPopular from "./Components/mostPopulars";
            <MostPopular /> 
        */