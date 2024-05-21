import horse from '../assets/horse.svg'
import picOfMe from '../assets/picOfMe.jpeg'
import Keyboard from './Keyboard'


const About = () => {
    return (
        <div id="About"className="hero min-h-screen bg-base-300">
            <div className="hero-content my-20 lg:my-auto lg:gap-40 flex-col lg:flex-row-reverse">
                <img src={picOfMe} className="mask mask-squircle max-w-xs rounded-lg shadow-2xl" />
                {/* <a href={"https://www.chess.com/member/sorrab"} target='_blank'><img src={horse} className="h-32" /></a> */}
                <Keyboard/>
            </div>
        </div>
    )
}

export default About

//cheats list: lemonade: change theme to lemonade 

/*

Hi, im Anthony, a software engineer with an interest in web development and react. 

interests: 

Sports: 

I love sports. Wether its baseball, soccer, football, basketball, or even cricket, I pretty much love it all. 
I played soccer at a competitive level in my youth, but now im just happy to get out and play any chance I get. 
I play fantasy baseball too! 

Games: 

Video games, board games, trading card games, you name it, I play it. 
Im a huge fan of the one piece card game and I play about as competitively as you can. 
I love catan (my cards are laminated), machi koro, codenames, Bohnanza, etc. 
My all time favourite game is skyrim. But I play tons of smaller indie games too.
I also play chess quite often to keep my skills up. Maybe once a day. 

Outdoor Activities: 

I love biking, camping, and skiing. In the winter I ski as an outdoor activity. When the weather is good
enough I bike and camp. I look to backcountry camping as a way to escape the busniness of the city. Generally
speaking i look at all of these hobies as things that keep me from getting too absorbed into my computer. 

*/