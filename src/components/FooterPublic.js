import React from 'react'

export const FooterPublic = () => {
  return (
    <> 
        <footer className="footer-info d-flex align-items-center justify-content-center ">
            <div className="col-md-4 d-flex align-items-center">
                <a href="#" className="lgos">
                    <img src='https://cdsfilesbucket.s3.us-east-2.amazonaws.com/451e4bdf-1dfb-4242-9958-faa904479b3d.png.'
                    className="logo-cds"/>
                    <span>© 2021 Company, Inc</span>
                </a>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li><a> <img src="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/7b0454f3-8379-459b-bbaf-5b6a360f98e8.png." 
                className="social-logos"/> </a></li>
                <li><a> <img src="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/9645edbf-7fae-4dae-b140-f5b87e7b2590.png." 
                className="social-logos"/> </a></li>
                <li><a> <img src="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/13ef9881-66ae-494b-8c9a-3617c047b337.png."
                className="social-logos" /> </a></li>
                <li><a> <img src="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/19efbc43-ef74-491d-a825-3660e4355567.png."
                className="social-logos" /> </a></li>
                <li><a> <img src="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/8c5dfcbd-468a-4634-a810-54310d35cfa0.png."
                className="social-logos" /> </a></li>
            </ul>
        </footer>
    </>
  )
}
