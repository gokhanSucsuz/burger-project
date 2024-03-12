import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <nav className="navbar navbar-expand-lg bg-danger py-5 ">
      <div className="container justify-content-center flex-column gap-3">
        <div className="socialIcon col-4 d-flex gap-4 justify-content-center">
          <FacebookIcon sx={{ fontSize: 60, color: 'white' }} />
          <InstagramIcon sx={{ fontSize: 60, color: 'white' }} />
          <TwitterIcon sx={{ fontSize: 60, color: 'white' }} />
        </div>
        <p className='text-light'>All rights reserved. | BurgerProject</p>
      </div>
    </nav >

  )
}

export default Footer