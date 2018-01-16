import React, { Component } from 'react';
import  './login.css';
import axios from 'axios';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            email: "",
            password: ""
        }

        this.inputChanged = this.inputChanged.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    inputChanged(event){
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    loginUser(context){
        console.log(this.state);
        axios.post('http://localhost:3000/a/login' , this.state).then(res => {
            console.log(res);
            this.props.history.push('/home');
        },err=> {
            console.log(err);
        })
        // this.props.history.push('/home');
    }

    render() {
        return(
            <div>
                <div className="container">
                    {/* <div className="row banner col-md-4">
                        <img src="../../assets/img/blue.svg" className="logo" alt="UnivInks"/>
                    </div> */}
                    <div className="login-form col-md-offset-3 col-md-9">
                        <div className="row col-md-offset-4 col-md-8">
                            <div className="md-form col-md-12">
                                <input type="text" id="username" className="form-control form-login" name="email" value={this.state.email} onChange={this.inputChanged}/>
                                <label className="col-md-12">Username</label>
                            </div>
                        </div>
                        <div className="row col-md-offset-4 col-md-8">
                            <div className="md-form col-md-12">
                                <input type="password" id="password" className="form-control form-login" name="password" value={this.state.password} onChange={this.inputChanged}/>
                                <label className="col-md-12">Password</label>
                            </div>
                        </div>
                        <div className="row col-md-offset-4 col-md-8">
                            <button type="button" onClick={this.loginUser} className="btn btn-primary btn-login col-md-12">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;