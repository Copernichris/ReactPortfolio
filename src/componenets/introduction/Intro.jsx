import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContain">
                    <img src="./assets/meepicture.jpg" alt="Chris Thomas" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <p>Yo my name</p>
                    <h1>Chris</h1>
                    <p>I am a web developer</p>
                </div>
            </div>
        </div>
    )
}
