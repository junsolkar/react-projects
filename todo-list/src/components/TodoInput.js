import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
          <div classname="input-group-prepend">
          <div className="input-group-text bg-primary text-white">
          <span className="add-on"><i className="fas fa-book"></i></span>
          </div>
          </div>
          <input type="text" className="form-control text-capitalize" placeholder="add a todo list item"/>
          </div>
          <button type="submit" className="btn btn-block btn-primary mt-3">add item</button>
        </form>
      </div>
    )
  }
}
