import React from "react";

const Projects = () => {
  return (
    <>
      <div className="container">
        <div>
          <h2 className="orange">Projects</h2>
          <div className="spacer"></div>
          <div className="projects">
            {/* 1st project */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                ontouchstart="this.classNameList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img className=" img-fluid" src="https://github.com/ThaGary/pixel-art-maker/raw/master/pixel-art-maker-alt.png" alt="card" />
                        </p>
                        <h4 className="card-title">Pixel Art</h4>
                        <span className="badge badge-danger">HTML</span>
                        <span className="badge badge-primary">CSS</span>
                        <span className="badge badge-warning">JavaScript</span>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Pixel Art</h4>
                        <p className="card-text">
                          This project uses HTML, CSS, JavaScript.
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank" rel="noopener noreferrer"
                              href="https://github.com/ThaGary/pixel-art-maker"
                            >
                              <i className="fa fa-github" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="google.com"
                            >
                              <i className="fa fa-link" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd project */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                ontouchstart="this.classNameList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img className=" img-fluid" src="https://github.com/ThaGary/pixel-art-maker/raw/master/pixel-art-maker-alt.png" alt="card" />
                        </p>
                        <h4 className="card-title">Movies</h4>
                        <span className="badge badge-success">Node</span>
                        <span className="badge badge-primary">React</span>
                        <span className="badge badge-warning">JavaScript</span>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Movies</h4>
                        <p className="card-text">
                          This project uses HTML, CSS, JavaScript.
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="google.com"
                            >
                              <i className="fa fa-github" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="google.com"
                            >
                              <i className="fa fa-link" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3rd project */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                ontouchstart="this.classNameList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img className=" img-fluid" src="https://github.com/ThaGary/pixel-art-maker/raw/master/pixel-art-maker-alt.png" alt="card" />
                        </p>
                        <h4 className="card-title">Pixel Art</h4>
                        <span className="badge badge-success">Node</span>
                        <span className="badge badge-primary">React</span>
                        <span className="badge badge-warning">JavaScript</span>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Pixel Art</h4>
                        <p className="card-text">
                          This project uses HTML, CSS, JavaScript.
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="google.com"
                            >
                              <i className="fa fa-github" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="google.com"
                            >
                              <i className="fa fa-link" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div><button className="btn btn-outline-danger gobackbtn">return home</button>
        </div>
      </div>
    </>
  );
};

export default Projects;
