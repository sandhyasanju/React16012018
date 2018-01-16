import React, { Component } from 'react';
import  './Home.css';
// import Request from "react-http-request"
import axios from "axios"

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            posts: []
        }

        this.getColleges();
    }

    getColleges(){
        axios.get('http://localhost:3000/colleges')
        .then(res => {
            console.log(res)
          const posts = res.data.map(obj => obj);
          console.log(posts);
          this.setState({ posts });
        });
    }

    render() {
        return(
            <div>
                <div className="container">
                    {/* <div className="row banner col-md-4">
                        <img src="../../assets/img/blue.svg" className="logo" alt="UnivInks"/>
                    </div> */}
                    {/* <div className="login-form col-md-offset-3 col-md-9">
                        <div className="row col-md-offset-4 col-md-8">
                            <div className="md-form col-md-12">
                                <input type="text" id="username" className="form-control form-login"/>
                                <label for="username" className="col-md-12">Username</label>
                            </div>
                        </div>
                        <div className="row col-md-offset-4 col-md-8">
                            <div className="md-form col-md-12">
                                <input type="password" id="password" className="form-control form-login"/>
                                <label for="password" className="col-md-12">Password</label>
                            </div>
                        </div>
                        <div className="row col-md-offset-4 col-md-8">
                            <button type="button" onClick="login(user)" className="btn btn-primary btn-login col-md-12">Login</button>
                        </div>
                    </div> */}
                    <h2>Home</h2>
                    <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.name}</li>
          )}
        </ul>
                    {/* <Request
        url='https://localhost:3000/colleges'
        method='get'
        accept='application/json'
        verbose={true}
        children=""
      >
        {
          ({error, result, loading}) => {
            if (loading) {
              return <div>loading...</div>;
            } else {
              return <div>{ JSON.stringify(result) }</div>;
            }
          }
        }
      </Request> */}
                </div>
            </div>
        )
    }
}

export default Home;