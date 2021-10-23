import "./header.scss"
import {PhoneAndroid, Email, Menu} from "@material-ui/icons"

export default function Header({ menuOpen, setMenuOpen }) {
    return (
        <div className={"header " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Chris</a>
                    <div className="items">
                        <PhoneAndroid className="icon"/>
                        <span>(919) 601-3271</span>
                    </div>     
                    <div className="items">
                        <Email className="icon"/>
                        <span>christhomas2101@gmail.com</span>
                    </div>              
                </div>               
                <div className="right">
                    <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
                        <Menu className="menuIcon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
