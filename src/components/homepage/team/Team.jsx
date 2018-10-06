import React from 'react';

export default () => {
  return (
    <div className="team-section container">
      <div className="text-center pb-2">
        <h3 className="bold">Meet the Team</h3>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="card card-profile">
            <div className="card-avatar">
              <a href="#pablo">
                <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" />
              </a>
            </div>

            <div className="card-content">
              <h6 className="category text-gray">CEO / Co-Founder</h6>

              <h4 className="card-title">Sotero</h4>

              {/* <p className="card-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p> */}
              <div className="icon-size">
                <i className=" icon-size fab fa-twitter-square"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-github-square"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-profile">
            <div className="card-avatar">
              <a href="#pablo">
                <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" />
              </a>
            </div>
            <div className="card-content">
              <h6 className="category text-gray">CEO / Co-Founder</h6>
              <h4 className="card-title">Vuka</h4>
              {/* <p className="card-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p> */}
              <div className="icon-size">
                <i className=" icon-size fab fa-twitter-square"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-github-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
