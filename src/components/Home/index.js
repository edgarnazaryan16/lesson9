import { useEffect, useState } from "react"
import { API } from "../../assets/constants";
import Card from "./Card";
import "./style.css"
const Home = () => {
    const [cards, setCards] = useState([]);

    const gettingCards = async() => {
        try {
            const response = await fetch(API);
            const data = response.json();
            data.then(items => setCards(items))
        } catch {
            alert("Something goes wrong");
        }
    }

    const handleCardDelete = (id) => {
        setCards(cards.filter((item) => (item.id !== id)))
    } 

    useEffect(() => {
        gettingCards()
    },[])

    return (
        <>
            <h1>{cards.length ? "Our Tours" : "No Tours Left"}</h1>
            <div className="Home">
                {
                    cards.length ? cards.map((item) => {
                        return (<Card 
                                key={item.id}
                                {...item}
                                handleCardDelete = {handleCardDelete}
                                />)
                            }) : <button className="Button" onClick={gettingCards}>Refresh</button>
                }
            </div>
        </>
    )
}
export default Home;