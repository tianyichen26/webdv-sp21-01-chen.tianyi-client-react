import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
 <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg">
            <Link to="/courses/table">
                    <i onClick={() => history.goBack()} className="fas fa-times fa-2x btn"></i>
            </Link>

            <Link className="navbar-brand" style={{marginRight: "auto", marginLeft: "auto"}}
               to="/courses/editor">CS5610 Web Development</Link>
            <div class="collapse navbar-collapse"
              id="navbarDrop">
            <ul class="navbar-nav editor-nav">
              <li class="nav-item">
              <a class="nav-link" href="#">Build</a>
                          </li>
               <li class="nav-item active">
              <a class="nav-link" href="#">Pages</a>
              </li>
                <li class="nav-item">
              <a class="nav-link" href="#">Theme</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="#">Store</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">App</a>
                </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Settings</a>
                  </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                   <i class="fas fa-plus"></i>
                 </a>
                  </li>
                  </ul>
              </div>
        </nav>

        <div className="row bottom-part">
            <div className="col-3 bg-dark priority">
                <ul class="nav flex-column nav-pills module-list">
                        <a class="nav-link mr-2 mb-3" href="#">
                          Module 1
                          <i class="fas fa-times float-right mt-1 ml-1"></i>
                        </a>
                        <a class="nav-link mr-2 mb-3" href="#">
                          Module 2
                          <i class="fas fa-times float-right mt-1 ml-1"></i>
                        </a>
                        <a class="nav-link mr-2 mb-3" href="#">
                          Module 3
                          <i class="fas fa-times float-right mt-1 ml-1"></i>
                        </a>
                        <a class="nav-link active mr-2 mb-3" href="#">
                          Module 4
                          <i class="fas fa-times float-right mt-1 ml-1"></i>
                        </a>
                        <a class="nav-link mr-2 mb-3" href="#">
                          Module 5
                          <i class="fas fa-times float-right mt-1 ml-1"></i>
                        </a>
                        <a class="nav-link mr-2 mb-3" href="#">
                          Module 6
                          <i class="fas fa-times float-right mt-1 ml-1"></i>
                        </a>
                        <a class="nav-link mr-2 mb-3" href="#">
                          Module 7
                          <i class="fas fa-times float-right mt-1 ml-1"></i>
                        </a>
                        <a class="nav-link mr-2">
                          <div class="row">
                            <div class="col-9 col-md-10">
                              <input class="form-control"
                                     type="text"
                                     placeholder="New Module"/>
                            </div>
                            <div class="col-3 col-md-2">
                              <button class="btn btn-success" type="submit">
                                <i class="fas fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </a>
                      </ul>
            </div>

            <div className="col-9">
                <ul className="nav nav-pills nav-cell">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Topic 1</a>
                    </li>
                    <li className="nav-item" id="topic">
                        <a className="nav-link " href="#">Topic 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Topic 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 4</a>
                    </li>
                    <li className="nav-item">
                        <i className="nav-link fas fa-plus plus btn btn-sm" id="plus-topic"></i>
                    </li>
                </ul>

<div class="col-md-12 mt-2 mb-2">
          <div class="row heading-widget">
            <div class="col-md-5 col-12">
              <span class="widget-name">
                                      Heading Widget
              </span>
            </div>

            <div class="col-md-12 mt-4">
              <div class="form-group row">
                <label for="headT"
                       class="col-sm-12 col-form-label">
                  Heading Text
                </label>
                <div class="col-sm-12">
                  <input type="text"
                         class="form-control"
                         id="headT"/>
                </div>
              </div>

              <div class="form-group row">
                <label for="headingsize"
                       class="col-sm-12 col-form-label">
                  Heading Size
                </label>
                <div class="col-sm-12">
                  <select class="form-control" id="headingsize">
                    <option disabled>Choose heading size</option>
                    <option selected>Heading 1</option>
                    <option>Heading 2</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label for="headWname"
                       class="col-sm-12 col-form-label">
                  Widget Name
                </label>
                <div class="col-sm-12">
                  <input type="text"
                         class="form-control"
                         id="headWname"/>
                </div>
              </div>
            </div>
            <div class="col-md-12 mt-3">
              Preview
            </div>
            <div class="col-md-12">
              <h1>Heading Text</h1>
            </div>
          </div>
        </div>
        </div>
    </div>
    </div>
export default CourseEditor