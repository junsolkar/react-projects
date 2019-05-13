import React, { Component } from 'react'

export default class Recipe extends Component {
  render() {
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id
    } =  this.props.recipe
    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
      <div className="card" style={{ height: "100%" }}>
        <img
          src={image_url}
          style={{ height: "14rem" }}
          className="img-card-top"
          alt=""
        />
        <div className="card-body text-capitalize">
          <h6>{title}</h6>
          <h6 className="text-warning text-slanted">
            provided by {publisher}
          </h6>
        </div>
        <div className="card-footer">
          <button 
          type="button"
          className="btn btn-primary text-capitalize">
            details
          </button>
          <a
            href={source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success mx-2 text-capitalize">
            recipe url
          </a>
        </div>
      </div>
    </div>
    )
  }
}
