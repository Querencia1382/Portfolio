import React from "react"
import { Link } from "react-router-dom"


export default function Hero(){

   const [items , setItems] = React.useState(null)


    const [currentItem , setCurrent] = React.useState(0)


    const changeCurrent = React.useCallback((input , current) => {
        switch(true){
            case (input == "next" && current < 3):
                setCurrent(prevCurrent => prevCurrent + 1)
                break
            case (input == "prev" && current > 0):
                setCurrent(prevCurrent => prevCurrent - 1)
                break
            case (input == 0) :
                setCurrent(0)
                break
            case (input == 1) :
                setCurrent(1)
                break
            case (input == 2) :
                setCurrent(2)
                break
            case (input == 3) :
                setCurrent(3)
                break
            default :
                return null
        }
    },[])


    React.useEffect(() => {
        const dataFetcher = async () => {
            const req = await fetch("https://fakestoreapi.com/products")
            const data = await req.json()
            setItems(data)
        }
    
        dataFetcher()
    },[])


    if(items){
        return (
            <div className="hero">
                <h1>Newest</h1>
                <div className="item">
                    <img src={items[currentItem].image} />
                    <div className="item--intro">
                        <h2>{items[currentItem].title}</h2>
                        <p>{items[currentItem].description} <Link to="/" className="nav-anchor-txt">Visit</Link></p>
                    </div>
                </div>
                <div className="hero--btns">
                    <button className="arrow--btn" onClick={() => {
                        changeCurrent("prev", currentItem)
                    }}>prev</button>
                    <button className="circle--btn"onClick={() => {
                        changeCurrent(0, currentItem)
                    }}>1</button>
                    <button className="circle--btn"onClick={() => {
                        changeCurrent(1, currentItem)
                    }}>2</button>
                    <button className="circle--btn"onClick={() => {
                        changeCurrent(2, currentItem)
                    }}>3</button>
                    <button className="circle--btn"onClick={() => {
                        changeCurrent(3, currentItem)
                    }}>4</button>
                    <button className="arrow--btn"onClick={() => {
                        changeCurrent("next", currentItem)
                    }}>next</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <h1>Newest</h1>
        )
    }
}