import React, { Component } from "react";
//import React, { useState, useEffect } from 'react'
import "../style/packagefeed.css";
import axios from "axios";



export default class InsuranceFeed extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.retrieveInsurance();
    }

    retrieveInsurance() {
        axios.get("http://localhost:8000/InsuranceType/viewAllInsuranceType").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
            }
        });
        console.log(this.state.posts);
    }

    filterData(posts, searchKey) {
        const result = posts.filter((post) =>
            post.insuranceType.toLowerCase().includes(searchKey) || post.insuranceType.includes(searchKey) ||
            post.companyName.toLowerCase().includes(searchKey) || post.companyName.includes(searchKey)

        )
        this.setState({ posts: result })
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;
        console.log(e.currentTarget.value);
        axios.get("http://localhost:8000/InsuranceType/viewAllInsuranceType").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingPosts, searchKey)
            }
        });
    }

    render() {
        return (
            <div>
                <div className="feed">
                    <div className="container">
                       
                        <h3 style={{textAlign:"center",marginTop:20}}>
                        Insurance
                        </h3>
                        <div class="searchBar">
                            <div class="searchBar">
                                <div class="row3 searchBar">
                                    <div id="custom-search-input">
                                        <div class="input-group col-md-12 search">
                                            <input
                                                type="text"
                                                class=" search-query form-control"
                                                placeholder="Search"
                                                name="searchQueue"
                                                onChange={this.handleSearchArea}
                                            />
                                            <span class="input-group-btn">
                                                <button class="btn btn-danger" type="button" style={{marginLeft:5,marginTop:10}}>
                                                    <span class=" glyphicon glyphicon-search"></span>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <hr />
                    

                        <div className="row">
                            {this.state.posts.map(post => (
                                <div className="col-md-4">
                                    <div className="card mb-4 text-white bg-dark">
                                        <img className="card-img-top" src={post.ImageLink} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{post.insuranceType}</h5>
                                            <p style={{ color: "#C8C0BE" }} className="card-text">Company : {post.companyName} </p>
                                            <a href={`/Insurance/${post._id}`} style={{ backgroundColor: "#BCBBBB", color: "black" }} className="btn btn-outline-light btn-sm">View</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </div>

                        <hr />

                    </div>
                </div>
            </div>
        )
    }
}
