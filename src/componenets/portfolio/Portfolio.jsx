import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import { useEffect, useState } from "react";
import { featuredPortfolio, nodePortfolio, ectPortfolio} from "../../projectData"

export default function Portfolio() {
    const [selected,setSelected] = useState("featured")
    const [data,setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "node",
            title: "Node",
        },
        {
            id: "ect",
            title: "Ect",
        },
    ];

    useEffect(()=>{
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
                case "node":
                setData(nodePortfolio);
                break;
                case "ect":
                setData(ectPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul> 
                {list.map((item)=>(
                    <PortfolioList
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}         
            </ul>
            <div className="container">
                {data.map(d=>(
                    <a href={d.link} target="blank">
                        <div className="item">
                            <img src={d.img} alt="" />
                            <h2>{d.title}</h2>                    
                        </div>
                    </a>
                ))}    
                
            </div>
        </div>
    )
}
