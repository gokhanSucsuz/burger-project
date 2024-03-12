import Banner from "../assets/banner.png"

function Contact() {
  return (
    <>
      <div className="container py-3">
        <div className="row row-cols-1 row-cols-lg-2">
          <div className="col">
            <img src={Banner} alt="" className="w-100 rounded-3" style={{ height: "66vh" }} />
          </div>
          <div className="col">
            <div className="py-5">
              <h1 className="fw-bolder text-center">Contact Us</h1>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Name & Surname" />
                <label htmlFor="floatingInput">Name & Surname</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingPassword" placeholder="E-mail" />
                <label htmlFor="floatingPassword">E-mail</label>
              </div>
              <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                <label htmlFor="floatingTextarea2">Comments</label>
              </div>
              <button className="btn btn-danger px-3 rounded-4 mt-3">Contact Us</button>
            </div>


          </div>
        </div>

      </div>
    </>
  )
}

export default Contact