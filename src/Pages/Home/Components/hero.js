import { useQuery } from "@tanstack/react-query";
import React from "react"
import { Link } from "react-router-dom"
import rightArrowSvg from "../../../icons/arrow-narrow-right-Svg.svg"
import leftArrowSvg from "../../../icons/arrow-narrow-left-Svg.svg"
import Loading from "../../-Components/loading";


export default function Hero(){

    const { data : items , isSuccess , isError , error } = useQuery({
        queryKey : ["products"],
        queryFn : async () => {
            try {
                const request = await fetch(`https://fakestoreapi.com/products`)
                const data = await request.json()
                return data
            }catch(error){
                console.log(error)
            }
        }
    })


    const [currentItem , setCurrent] = React.useState(0)


    const numberBtns = React.useRef(document.getElementsByClassName("number--btn"))


    const changeCurrent = React.useCallback((input , current) => {
        switch(true){
            case (input === "next" && current < 3):
                numberBtns.current[current].classList.remove("current--number")
                setCurrent(prevCurrent => prevCurrent + 1)
                numberBtns.current[current + 1].classList.add("current--number")
                break
            case (input === "prev" && current > 0):
                numberBtns.current[current].classList.remove("current--number")
                setCurrent(prevCurrent => prevCurrent - 1)
                numberBtns.current[current - 1].classList.add("current--number")
                break
            case (input === 0) :
                setCurrent(0)
                numberBtns.current[current].classList.remove("current--number")
                numberBtns.current[input].classList.add("current--number")
                break
            case (input === 1) :
                setCurrent(1)
                numberBtns.current[current].classList.remove("current--number")
                numberBtns.current[input].classList.add("current--number")
                break
            case (input === 2) :
                setCurrent(2)
                numberBtns.current[current].classList.remove("current--number")
                numberBtns.current[input].classList.add("current--number")
                break
            case (input === 3) :
                setCurrent(3)
                numberBtns.current[current].classList.remove("current--number")
                numberBtns.current[input].classList.add("current--number")
                break
            default :
                return null
        }
    },[])


    if(!isSuccess){
        return <Loading width="calc(100% - 48px)" height="calc(100dvh - 63px - 48px)" margin="16px 24px" size={56} borderRadius="24px"/>
    }
    else{
        return (
            <div className="hero">
                <h2 className="hero--h1">Newest</h2>
                <img src={items[currentItem].image} className="hero--img" alt={items[currentItem].title}/>
                <div className="hero--detail">
                    <div className="detail--imgs">
                        <img 
                            src={items[(currentItem + 1) % 4].image} 
                            className="detail--img" 
                            onClick={() => {
                                changeCurrent((currentItem + 1) % 4, currentItem)
                                }
                            } 
                            alt={items[(currentItem + 1) % 4].title}
                        />
                        <img 
                            src={items[(currentItem + 2) % 4].image} 
                            className="detail--img" 
                            onClick={() => {
                                changeCurrent((currentItem + 2) % 4, currentItem)
                                }
                            } 
                            alt={items[(currentItem + 2) % 4].title}
                        />
                        <img 
                            src={items[(currentItem + 3) % 4].image} 
                            className="detail--img" 
                            onClick={() => {
                                changeCurrent((currentItem + 3) % 4, currentItem)
                                }
                            } 
                            alt={items[(currentItem + 3) % 4].title}
                        />
                    </div>
                    <h2 className="hero--h2">{items[currentItem].title}</h2>
                    <p>{items[currentItem].description}</p>
                    <div className="detail--sb">
                        <h3>Price : {items[currentItem].price}$</h3>
                        <Link to={`/Product/${items[currentItem].id}`} className="arrow--anchor">Visit</Link>
                    </div>
                </div>
                <div className="hero--btns">
                    <button 
                        className="arrow--btn" 
                        onClick={() => {
                            changeCurrent("prev", currentItem)
                            }
                        }
                    >
                        <img srcSet={leftArrowSvg} />
                    </button>
                    <button className="number--btn current--number"onClick={() => {
                        changeCurrent(0, currentItem)
                    }}>1</button>
                    <button className="number--btn"onClick={() => {
                        changeCurrent(1, currentItem)
                    }}>2</button>
                    <button className="number--btn"onClick={() => {
                        changeCurrent(2, currentItem)
                    }}>3</button>
                    <button className="number--btn"onClick={() => {
                        changeCurrent(3, currentItem)
                    }}>4</button>
                    <button 
                        className="arrow--btn"
                        onClick={() => {
                            changeCurrent("next", currentItem)
                            }
                        }
                    >
                        <img srcSet={rightArrowSvg} />
                    </button>
                </div>
            </div>
        )
    }
}