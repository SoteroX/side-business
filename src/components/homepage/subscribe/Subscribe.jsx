import React from 'react';

export default () => {
  return (
    <section className="subscribe-section">
      <div className="subscribe-line subscribe-line-image">
        <div className="container">
          <div className="row center-subscribe">
            <div className="col-sm-10 col-md-8 col-lg-6">
              <div className="text-center">
                <h3 className="title">Subscribe to our Newsletter</h3>
                <p className="description">
                  Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.
                </p>
              </div>
              <div className="card card-raised card-form-horizontal">
                <div className="card-content">
                  <form method="#" action="#">
                    <div className="row">
                      <div className="col-md-12 col-lg-8 pb-1">
                        <div className="input-group">
                          <span className="input-group-prepend align-mail-icon mr-2">
                            <i className="fas fa-envelope"></i>
                          </span>
                          <input type="email" placeholder="Your Email..." className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-4">
                        <button type="button" className="btn btn-primary btn-block">Subscribe</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
