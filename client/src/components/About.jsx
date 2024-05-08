import horse from '../assets/horse.svg'
import picOfMe from '../assets/picOfMe.jpeg'



const About = () => {
    return (
        <div id="About"className="hero min-h-screen min-w-screen bg-base-300">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img src={picOfMe} className="max-w-sm rounded-lg shadow-2xl" /> */}
                <a href={"https://www.chess.com/member/sorrab"} target='_blank'><img src={horse} className="h-32" /></a>
                <div>
                    <h1 className="text-5xl font-bold">Anthony Barros</h1>
                    <p className="py-6 ">I'm Anthony, a software engineer and entrepenuer. Feel free to send me a challenge on chess.com if you dare.</p>
                    <button className="btn btn-primary"><a href = "#Contact">Get in touch!</a></button>
                </div>
            </div>
        </div>
    )
}

export default About