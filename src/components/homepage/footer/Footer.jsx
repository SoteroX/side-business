import React from 'react';

export default () => {
  return (
    <footer className='footer-section footer footer-black footer-big'>
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>Creative Tim is a startup that creates design tools that make the web development process faster and easier. </p> <p>We love the web and care deeply for how users interact with a digital product. We power businesses and individuals to create better looking web projects around the world. </p>
            </div>
            <div className="col-md-4">
              <h5>Social Feed</h5>
              <div className="social-feed">
                <div className="feed-line">
                  <i className="fab fa-twitter-square"></i>
                  <p>How to handle ethical disagreements with your clients.</p>
                </div>
                <div className="feed-line">
                  <i className="fab fa-twitter-square"></i>
                  <p>The tangible benefits of designing at 1x pixel density.</p>
                </div>
                <div className="feed-line">
                  <i className="fab fa-twitter-square"></i>
                  <p>A collection of 25 stunning sites that you can use for inspiration.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Instagram Feed</h5>
              <div className="gallery-feed">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="img img-raised rounded" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="img img-raised rounded" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="img img-raised rounded" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="img img-raised rounded" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="img img-raised rounded" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="img img-raised rounded" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="img img-raised rounded" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="img img-raised rounded" alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <ul className="pull-left">
          <li>
            <a href="#pablo">
              Blog
            </a>
          </li>
          <li>
            <a href="#pablo">
              Presentation
            </a>
          </li>
          <li>
            <a href="#pablo">
              Discover
            </a>
          </li>
          <li>
            <a href="#pablo">
              Payment
            </a>
          </li>
          <li>
            <a href="#pablo">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="copyright pull-right">
          Copyright &copy;2018 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
