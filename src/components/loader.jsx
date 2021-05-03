import React from "react";

function Loader() {
  return (
    <div>
      <div className="preloader">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="spinner">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;