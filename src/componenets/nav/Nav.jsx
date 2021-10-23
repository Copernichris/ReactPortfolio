import "./nav.scss"

export default function Nav({ menuOpen, setMenuOpen }) {
    return (
        <div className={"nav "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                <a href="./assets/resume2021.pdf" download="Thomas_Christohper_Resume">Download Resume</a>
                </li>
            </ul>
        </div>
    )
}
