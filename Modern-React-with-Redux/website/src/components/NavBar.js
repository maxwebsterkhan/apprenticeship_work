import React from 'react';
import SearchBar from './SearchBar';

 class NavBar extends React.Component {

   render() {
												return (
                          <div>
                            <div className="ui large secondary pointing menu inverted scale down">
                              <i className="toc item">
                                <i className="sidebar icon"></i>
                              </i>
                              <a href="#1" className="active item">
                                Home
                              </a>
                              <a href="#2" className="item">
                                Work
                              </a>
                              <a href="#3" className="item">
                                Company
                              </a>
                              <div className="right item">
                                <SearchBar />
                              </div>
                            </div>
                          </div>
                        );
											}
                    }
export default NavBar
