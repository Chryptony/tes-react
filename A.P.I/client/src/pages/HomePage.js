import React from "react";
import { Md4GPlusMobiledata } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="my-3">
      <div className="w-100 text-center">
        <h3>HomePage</h3>
        <p>Weelcome to my dashboard</p>
      </div>
      <div className="row my-3 text-center">
        <div className="col-4">
          <div className="card">
            <img
              className="img-card-top rounded-circle"
              src="https://via.placeholder.com/150"
            />
            <div className="card-body">
              <div className="home-icons">
                <Md4GPlusMobiledata></Md4GPlusMobiledata>
              </div>
              <div className="home-text">
                <h5> easy to assign</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <img
              className="img-card-top rounded-circle"
              src="https://via.placeholder.com/150"
            />
            <div className="card-body">
              <div className="home-icons">
                <Md4GPlusMobiledata></Md4GPlusMobiledata>
              </div>
              <div className="home-text">
                <h5> easy to assign</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <img
              className="img-card-top rounded-circle"
              src="https://via.placeholder.com/150"
            />
            <div className="card-body">
              <div className="home-icons">
                <Md4GPlusMobiledata></Md4GPlusMobiledata>
              </div>
              <div className="home-text">
                <h5> easy to assign</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
