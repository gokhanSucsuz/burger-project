import { Link } from "react-router-dom"
import BannerImage from '../assets/banneryeni.jpg'

function Home() {
    return (
        <div id="mainPage" className="d-flex align-items-end p-5" style={{ backgroundImage: `url(${BannerImage})`, height: "69vh", width: "100%", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", alignItems: "left" }}>
            <Link to='/menu'>
                <button className="btn btn-danger text-light fs-3 fw-bolder rounded-5 px-5">Order</button>
            </Link>
        </div>
    )
}

export default Home