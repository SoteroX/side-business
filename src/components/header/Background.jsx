import React from "react";

export default () => {
  return (
    <div
      id="carousel-example-generic"
      class="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carousel-example-generic" data-slide-to="1" />
          <li data-target="#carousel-example-generic" data-slide-to="2" />
        </ol>

        <div className="carousek-inner">
          <div className="item active">
            <div className="page-header header-filter">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 text-left">
                    <h1 className="title">MAterial kit</h1>
                    <h4>Dolce & Gabbana</h4>
                    <br />

                    <div className="button">
                      <a href="#pablo" className="btn btn-primary">
                        Read more
                      </a>
                      <a
                        href="#pablo"
                        class="btn btn-just-icon btn-white btn-simple btn-lg"
                      >
                        <i class="fa fa-twitter" />
                      </a>
                      <a
                        href="#pablo"
                        class="btn btn-just-icon btn-white btn-simple btn-lg"
                      >
                        <i class="fa fa-facebook-square" />
                      </a>
                      <a
                        href="#pablo"
                        class="btn btn-just-icon btn-white btn-simple btn-lg"
                      >
                        <i class="fa fa-get-pocket" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="item-2 page-header header-filter" >
                <div className="container">
                <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center">
                    <h1 className="title">Materiadmsjdmjdsm</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
