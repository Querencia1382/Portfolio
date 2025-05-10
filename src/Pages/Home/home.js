import Hero from "./Components/hero";
import SlideBar from "../-Components/slideBar";
import MostPopular from "./Components/mostPopulars";


export default function Home(){

    return(
        <>
        <Hero />
        <SlideBar discount={true} title={"Discounts"}/>
        <SlideBar discount={false} title={"Most popular"}/>
        {/* <MostPopular /> */}
        </>
    )
}