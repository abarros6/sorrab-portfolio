const Projects = () => {
    return (
        <div id={"Projects"} className="min-h-screen min-w-screen bg-base">
            <h1 className="mb-10 text-center text-5xl font-bold m-10">Some Projects</h1>
            <div className="card lg:card-side bg-base-300 shadow-xl m-20" >
                <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
            <div className="card lg:card-side bg-base-300 shadow-xl m-20" >
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
                <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
            </div>
        </div>
    )
    
}

export default Projects 