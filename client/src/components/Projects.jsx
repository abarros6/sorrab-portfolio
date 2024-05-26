import TileGame from '../assets/TileGame.png'
import horse from '../assets/horse.svg'


const Projects = () => {
    return (
        <div 
            id={"Projects"} 
            className="min-h-screen min-w-screen bg-no-repeat bg-cover bg-center "
            style={{backgroundImage: 'url(/waves.svg)'}}
        >
            <h1 className="mb-10 text-center text-5xl font-bold m-10">Projects</h1>
            {/* <div className="card lg:card-side bg-base-300 shadow-xl m-10" >
                <figure><img src={TileGame} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Chess Square Game</h2>
                    <p>This game was created to allow me to have a fun time while learning the squares of the chessboard.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Try it!</button>
                    </div>
                </div>
            </div> */}
            <div className="card lg:card-side bg-base-300 max-w-120 shadow-xl m-10 lg:m-20" >
                <a href={"https://www.chess.com/member/sorrab"} target='_blank' className='flex justify-center items-center'><img src={horse} className="h-32"/></a>
                <div className="card-body">
                    <h2 className="card-title">Setting some things up...</h2>
                    <p>In the meantime, feel free to challenge me on chess.com</p>
                    <div className="card-actions justify-end">
                        <a href={"https://www.chess.com/member/sorrab"} target='_blank' className='flex justify-center items-center'>
                            <button className="btn btn-primary">
                                Challenge me!
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Projects 