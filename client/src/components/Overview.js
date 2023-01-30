import Nav from "./Nav";

const Overview = () => {
    return (
        <div className="overview">
            <Nav />
            <div className="content">
                <h1>Your luxurious home is waiting for you</h1>
                <h2>We have more than 7,000 luxurious properties around the <br/> world to show you</h2>
                <button className='explore'>Explore More</button>
            </div>
        </div>
    );
}

export default Overview;