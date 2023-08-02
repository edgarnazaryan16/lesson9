import { useState } from "react"
import "./style.css"
const Card = ({id, image, info, name, price, handleCardDelete}) => {
    const [isShow, setIsShow] = useState("false")
    const handleTextChange = () => {
        setIsShow(!isShow)
    }
    return (
    <div className="Card">
        <img className="img" src={image}/>
        <h3>{name}</h3>
        <p>{isShow && (info.length >= 150) ? `${info.slice(0,150)}...` : info}</p>
        <button className="Button" onClick={handleTextChange}>{isShow ? "Read More" : "Show Less"}</button>
        <p className="Price">{price}</p>
        <button className="Button"onClick={() => handleCardDelete(id)}>Not interested</button>
    </div>)
}
export default Card;