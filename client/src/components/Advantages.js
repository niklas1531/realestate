import pool from '../images/pool.webp'

const Advantages = () => {
    return (
        <div className='advantages'>
            <div className="img-wrapper">
                <img src={pool} alt="pool" />
            </div>
            <div className='text'>
                <h2>We are the best and most trusted real estate agent</h2>
                <p>We are a trusted real estate agent with more than a decade of <br />experience. You can trust us</p>
                <ul>
                    <li>60k partners have worked with us</li>
                    <li>Professional and experienced resources</li>
                    <li>Provide the best service for users</li>
                </ul>
                <button>Learn more</button>
            </div>
        </div>
    );
}

export default Advantages;