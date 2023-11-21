import React from "react"

export default function InfoText() {
  return (
    <div className="container">
      <hr />
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-6">
          <div>
            <div className="icon-box px-0 icon-box-card text-center bg-white">
              <span className="icon-box-icon text-dark">
                <i className="icon-rocket"></i>
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Payment & Delivery</h3>

                <p>Free shipping for orders over $50</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div>
            <div className="icon-box px-0 icon-box-card text-center bg-white">
              <span className="icon-box-icon text-dark">
                <i className="icon-rotate-left"></i>
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Return & Refund</h3>

                <p>Free 100% money back guarantee</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div>
            <div className="icon-box px-0 icon-box-card text-center bg-white">
              <span className="icon-box-icon text-dark">
                <i className="icon-life-ring"></i>
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Quality Support</h3>

                <p>Alway online feedback 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
