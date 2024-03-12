/* eslint-disable react/prop-types */
function MenuItem({ name, content, image, price }) {
    return (
        <div className="col">
            <div className="card shadow rounded-4 border-0">
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{content}</p>
                    <p className="card-text">₺{price}</p>
                </div>
            </div>
        </div>

    )
}

export default MenuItem