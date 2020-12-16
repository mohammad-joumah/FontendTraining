import profilePhoto from'../DSC_0253.JPG';
function Home(){
    return  (
    <div >
        <div className="container">
            <div className="row mb-2">
                <div className=" m-auto">
                    <img src={profilePhoto} className="profilePhoto" alt="alex-vidal"/>
                </div>
            </div>
            <div className="row text-center">

                <div className="col-12">
                    <h1>Mohammad Joumah</h1>
                    <div className="page-scroll">
                        <h3 className="job-title">Full Stack Developer</h3>
                        <a href="/about" className="btn btn-success">Explore more</a>
                    </div>
                </div>
            
                

            </div>
        </div>
    </div>
)
}
export default Home;