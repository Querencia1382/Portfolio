import Hero from "./Components/hero";
import SlideBar from "../-Components/slideBar";
import Categories from "./Components/categories";
import PurchaseGuide from "./Components/purchaseGuide";



export default function Home(){

    return(
        <>
        <Hero />
        <SlideBar discount={true} title={"Discounts"}/>
        <SlideBar discount={false} title={"Most popular"}/>
        <Categories />
        <PurchaseGuide/>
        </>
    )
}


        /* 
            import MostPopular from "./Components/mostPopulars";
            <MostPopular /> 
        */