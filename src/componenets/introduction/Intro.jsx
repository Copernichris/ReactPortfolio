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
                    <p>Hello! My name is</p>
                    <h1>Christopher Thomas</h1>
                    <p>I am a web developer looking for a full time position</p>
                </div>
            </div>
        </div>
    )
}
