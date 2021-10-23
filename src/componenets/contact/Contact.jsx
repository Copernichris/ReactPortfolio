import "./contact.scss"
import {useState} from "react"
import {GitHub, LinkedIn} from "@material-ui/icons"

export default function Contact() {
    const [message,setMessage] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <div className="items">
                    <a href="https://github.com/Copernichris" target="blank">
                        <div className="border">                    
                            <GitHub className="icon"/>                       
                        </div>    
                    </a>                  
                </div>     
                <div className="items">
                    <a href="https://www.linkedin.com/in/christopher-thomas-a06433193/" target="blank">
                        <div className="border">                    
                            <LinkedIn className="icon"/>                       
                        </div>    
                    </a>                       
                </div>        
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>                    
                    <input type="text" placeholder="Email"/>                        
                    <textarea placeholder="Send me a message"></textarea>               
                    
                    <button type="submit">Send</button>                    
                    {message && <span>Message sent</span>}
                </form>
            </div>
        </div>
    )
}
