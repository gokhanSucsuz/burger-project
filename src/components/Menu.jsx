import { Hamburgers } from "./Hamburgers"
import MenuItem from "./MenuItem"
function Menu() {
    return (
        <div className="container my-3">
            <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
                {
                    Hamburgers.map((hamburger, index) => <MenuItem key={index} name={hamburger.name} image={hamburger.image} content={hamburger.content} price={hamburger.price} />)
                }
            </div>

        </div>
    )
}

export default Menu