import { useState, useEffect } from "react"

export default function ({}) {

    const [currentChoice, setCurrentChoice] = useState("")
    const [theme, setTheme] = useState("nord")
    console.log("try code: <lemonade>")

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);
    

    const handleKeyDown = (e) => {
        let key = e.key
        let element = document.getElementById(key)

        if (key === "Enter") {
            handleCheatCode()
        }

        element.classList.add("bg-primary")
    }

    const handleKeyUp = (e) => {
        let key = e.key

        console.log(key)

        let element = document.getElementById(key)

        element.classList.remove("bg-primary")
    }

    const handleOnChange = (e) => {
        setCurrentChoice(e.target.value)
    } 

    const handleCheatCode = () => {
        let code = currentChoice

        switch(code) {
            case "lemonade":
                setTheme("lemonade")
            break; 
            case "nord":
                setTheme("nord")
            break; 
            case "night":
                setTheme("night")
            break; 
            case "chess": 
                //navigate to chess.com
            break;
            default: 
                console.log('code is wrong')

        }
    }

    
    


    return (
        <div className="flex flex-col">
            <div className="sm:text-3xl ">
                    <div className="flex justify-center gap-1 my-1 w-full">
                        <kbd id = "a" className="kbd">a</kbd>
                        <kbd id = "n" className="kbd">n</kbd>
                        <kbd id = "t" className="kbd">t</kbd>
                        <kbd id = "h" className="kbd">h</kbd>
                        <kbd id = "o" className="kbd">o</kbd>
                        <kbd id = "n" className="kbd">n</kbd>
                        <kbd id = "y" className="kbd">y</kbd>
                        
                    </div>
                    <div className="flex justify-center gap-1 my-1 w-full">
                        <kbd className="kbd">b</kbd>
                        <kbd className="kbd">a</kbd>
                        <kbd className="kbd">r</kbd>
                        <kbd className="kbd">r</kbd>
                        <kbd className="kbd">o</kbd>
                        <kbd className="kbd">s</kbd>
                    
                    </div>
            </div>
            <div>
                <div className='text-xl text-center py-6'>
                    <p className="font-bold">Software Engineer - Entrepenuer - Gamer</p>
                </div>
                
                
                <div className=' text-center'>
                    <p className="">Theres easter eggs on this site...</p>
                </div>
            </div>
           
        
            <input
                className={"input text-center border-accent  my-10 bg-base-300 " + ""}
                type="text"
                value={currentChoice}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                placeholder="Enter Cheat Code"
            />
            <button className="btn btn-primary"><a href = "#Contact">Get in touch!</a></button>
        </div>
        
    )
}