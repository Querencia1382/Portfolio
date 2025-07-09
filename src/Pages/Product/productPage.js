//Dependecies import
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
//Components import
import Product from "./Components/product";
import SlideBar from "../-Components/slideBar";
import Loading from "../-Components/loading";


export default function ProductPage(){

    const param = useParams().id


    const { data , isLoading , isError , error } = useQuery({
        queryKey : ["product" , param],
        queryFn : async () => {
            const request = await fetch(`https://fakestoreapi.com/products/${param}`)
            const data = await request.json()
            return data
        },
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    })


    if(isLoading){
        return <Loading width="calc(100% - 48px)" height="calc(100dvh - 63px - 48px)" margin="16px 24px" size={56} borderRadius="24px"/>
    }
    else {
        return <>
            <Product product={data}/>
            <h2 className="title--h2">Similar items</h2>
            <SlideBar filterBy={data.category} productID={data.id}/>
        </>
    }
}
