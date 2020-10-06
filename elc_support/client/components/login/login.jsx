import React ,{ useState,Component }from 'react'
import { Link, useHistory , Redirect } from "react-router-dom"
import {Grid, Image, Segment,Button, Header, Card} from 'semantic-ui-react'
import request from "superagent"
const SERVER_URL = require('./../../config/config.js').SERVER_URL
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import User from '../../../redux/actions/userAction.js';
class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      name : '',
      password:''
    }
    this.handleName = this.handleName.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.signIn=this.signIn.bind(this)
  }
  signIn(e){
      e.preventDefault();
      request.get(SERVER_URL+'/validate').query({name:this.state.name,password:this.state.password}).then(response => {
        var result = JSON.parse(response.text)
        this.props.handleUser(result.userType)
        if(result.statuscode===200){
        this.props.history.push('/home')
        }
      })
  }
  renderRedirect(){
    return <Redirect to='/home'  />
  }
  handleName(e){

        e.preventDefault();
        this.setState({
          name:e.target.value
        })
  }
  handlePassword(e){

        e.preventDefault();
        this.setState({
          password:e.target.value
        })
  }
  render(){
    return (
        <div className='login'>

        <div className='login__container'>
          <form>
                <h5>Username</h5>
                <input type='text' value={this.state.name} onChange={this.handleName} />

                <h5>Password</h5>
                <input type='password' value={this.state.password} onChange={this.handlePassword} />

                <Button type='submit' onClick={this.signIn} className='login__signInButton' >Log In</Button>
            </form>
            <button className='login__registerButton' >Register</button>
        </div>
    </div>
    )
  }
}


function matchDispatchToProps(dispatch){
  return bindActionCreators({
    handleUser:User
  },dispatch)
}

export default connect(null,matchDispatchToProps)(Login);
