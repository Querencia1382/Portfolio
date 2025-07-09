import Hero from "./Components/hero";
import SlideBar from "../-Components/slideBar";
import Categories from "./Components/categories";
import PurchaseGuide from "./Components/purchaseGuide";
import AboutUs from "./Components/aboutUs";



export default function Home(){

    return(
        <>
        <Hero />
        <h2 className="title--h2">Discounts</h2>
        <SlideBar discount={true}/>
        <h2 className="title--h2">Most popular</h2>
        <SlideBar discount={false}/>
        <h2 className="title--h2">Categories</h2>
        <Categories />
        <PurchaseGuide/>
        <AboutUs />
        </>
    )
}