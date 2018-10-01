import React from 'react';

export default () => {
  return (
    <section className="subscribe-section">
      <div className="subscribe-line subscribe-line-image">
        <div className="container">
          <div className="row center-subscribe">
            <div className="col-md-6 col-md-offset-3">
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
                      <div className="col-sm-8">
                        <div className="input-group">
                          <span className="input-group-prepend align-mail-icon">
                            <i className="fas fa-envelope"></i>
                          </span>
                          <input type="email" placeholder="Your Email..." className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-4">
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
