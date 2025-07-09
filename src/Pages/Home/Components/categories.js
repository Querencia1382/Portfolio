import { Link } from "react-router-dom";

export default function Categories(){

    return (
        <div className="categories">
            <Link to='Products/ManClothing' className="categories--a"></Link>
            <Link to='Products/WomanClothing' className="categories--a"></Link>
            <Link to='Products/Jewlery' className="categories--a"></Link>
            <Link to='Products/Electronics' className="categories--a"></Link>
        </div>
    )
}