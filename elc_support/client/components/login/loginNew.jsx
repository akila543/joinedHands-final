import React ,{ useState,Component }from 'react'
import { Link, useHistory , Redirect } from "react-router-dom"
import {Grid, Image, Segment, Button, Header, Card, Form, Message, Icon, Input} from 'semantic-ui-react'
import request from "superagent"
const SERVER_URL = require('./../../config/config.js').SERVER_URL
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import User from '../../../redux/actions/userAction.js';
import BackgroundImg from './../Images/pink.jpg'

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      name : '',
      password:''
    }
    this.handleName = this.handleName.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.signIn = this.signIn.bind(this)
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
    return(
      <div style={{height:window.innerHeight,width:(window.innerWidth/4)*4, backgroundImage:`url(${BackgroundImg})`,backgroundRepeat:"no-repeat",backgroundPostion:"center",backgroundSize:"cover"}}>
        <Grid textAlign='center' style={{ height: '100vh',width:"25%",marginLeft:"35%" }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' style={{color:"#b30086"}} textAlign='center'>
              JOINED HANDS
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='User name' onChange={this.handleName}/>
                <Form.Input
                  fluid
                  icon='key'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.handlePassword}
                />

                <Button  fluid size='large' style={{backgroundColor:"#b30086",color:"white"}} onClick={this.signIn}>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href='#'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
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
