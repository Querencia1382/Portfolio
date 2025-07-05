import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import SlideBar from "../-Components/slideBar";


export default function Product(){

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
        return <h2>is Loading...</h2>
    }
    else {
        return <>
            <h2>{data.title}</h2>
            <h2 className="title--h2">Similar items</h2>
            <SlideBar filterBy={data.category} productID={data.id}/>
        </>
    }
}
