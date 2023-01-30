import profile from '../images/profile.jpeg'
const Nav = () => {
    return (
        <nav>
            <div className="links">
                <a href="/">Home</a>
                <a href="#">Explore</a>
                <a href="#">About us</a>
                <a href="#">Help</a>
                <button><img src={profile} alt="profile" className='profile'/></button>
            </div>
        </nav>
    );
}

export default Nav;