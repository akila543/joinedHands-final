import React, { Component, useState  } from 'react'
import { Menu, Grid, Container, Icon, Header, Image, Dropdown, Radio, Button, Form,Modal, Input, Select, Label} from 'semantic-ui-react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import AppBar from '../homepage/appBar.jsx'
const IMAGE_URL = require('./../../config/config.js').IMAGE_URL
const SERVER_URL = require('./../../config/config.js').SERVER_URL
import request from "superagent"


const ageOptions = [
  { key: '1', text: '1 to 3', value: '1 to 3' },
  { key: '2', text: '3 to 7', value: '3 to 7' },
  { key: '3', text: '7 to 10', value: '7 to 10' },
  { key: '4', text: '10 to 15', value: '10 to 15' },
]

class ChidCareForm extends Component{
  constructor(props){
    super()
    this.state={
      facilityPreference :"",
      requestorName :"",
      date : "",
      timeFrom : "",
      timeTo : "",
      nofChildren : "",
      ageRange : "",
      specialNotes : "",
      requestorAddress : "",
      city : "",
      zipCode : "",
      contactNo : "",
      dropPreference : "",
      modalOpen : false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e, { value }) {
    this.setState({ facilityPreference: value }, () => {
      console.log("radioButton value is",this.state.facilityPreference);
    })
  }

  handleSubmit(e)
  {
    e.preventDefault()
    console.log("state values are",this.state.facilityPreference,this.state.requestorName,this.state.date,this.state.timeFrom,this.state.timeTo,this.state.nofChildren,this.state.ageRange,this.state.specialNotes,this.state.requestorAddress,this.state.city,this.state.zipCode,this.state.contactNo,this.state.dropPreference);
    request.post(SERVER_URL+'/createChildCareRequest')
    .send(
      { facilityPreference:this.state.facilityPreference,requestorName:this.state.requestorName,date:this.state.date,timeFrom:this.state.timeFrom,timeTo:this.state.timeTo,nofChildren:this.state.nofChildren,
        ageRange:this.state.ageRange,specialNotes:this.state.specialNotes,
        requestorAddress:this.state.requestorAddress,city:this.state.city,
        zipCode:this.state.zipCode,contactNo:this.state.contactNo,dropPreference:this.state.dropPreference
    }).then(response => {
      console.log("Response after saving request",response);
      this.setState({modalOpen:true})
    })
  }
  render()
  {
    console.log("ageRange",this.state.ageRange);
    return(

      <div>

        <div style={{height:"100vh",width:"100%", padding:"-2%",backgroundImage:`url(https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/wi/art/5c274c61de8d7.jpeg)`,backgroundRepeat:"no-repeat",backgroundPostion:"center",backgroundSize: "cover",filter: "blur(3px)"}}></div>
        <Grid style={{marginTop:"-48%",}}>
          <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={14}>
            <h1 style={{color:"#cc0066",marginTop:"6%",textAlign:"center"}}><em>Request for Child Care</em></h1>
              <br/>
              <Form>
                <Form.Group inline>
                  <Form.Field >
                    <Radio
                      label='Need a Child care facility'
                      name='Need a Child care facility'
                      value='ChildCare'
                      checked={this.state.facilityPreference === 'ChildCare'}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label='Need a registered Babysitter'
                      name='Need a registered Babysitter'
                      value='Babysitter'
                      checked={this.state.facilityPreference === 'Babysitter'}
                      onChange={this.handleChange}
                      />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label='Need a Child Care or a  registered Babysitter'
                      name='Need a Child Care or a  registered Babysitter'
                      value='CCorBS'
                      checked={this.state.facilityPreference === 'Childcare or Babysitter'}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Full name'
                    placeholder='Full name'
                    required
                    value = {this.state.requestorName}
                    onChange={(e)=>this.setState({requestorName:e.target.value})}
                    style={{color:"#cc0066"}}
                  />
                  <Form.Field required >
                  <label style={{fontSize:'16px',}}>Date</label>
                  <input value = {this.state.date} onChange={(e)=>this.setState({date:e.target.value})} type="date" />
                  </Form.Field>

                  <Form.Field  label='Time' style={{color:"#cc0066"}}control={Input} required>
                    <Label  style={{marginTop:"2%",marginRight:"2%",backgroundColor:"#ff3399",color:"white"}}>From</Label>
                    <input type="time" value={this.state.timeFrom} onChange={(e)=>this.setState({timeFrom:e.target.value})}/>
                    <Label style={{marginTop:"2%",marginLeft:"2%",marginRight:"2%",backgroundColor:"#ff3399",color:"white"}}>To</Label>
                    <input type="time"  value={this.state.timeTo} onChange={(e)=>this.setState({timeTo:e.target.value})}/>
                  </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='No. of Children'
                    placeholder='No. of Children'
                    value = {this.state.nofChildren}
                    onChange={(e)=>this.setState({nofChildren:e.target.value})}
                    required
                  />
                  <Form.Field
                    control={Select}
                    options={ageOptions}
                    label={{ children: 'Age of Children', htmlFor: 'form-select-control-age' }}
                    multiple selection
                    placeholder='Age of Children'
                    value = {this.state.ageRange}
                    onChange={(e,{ value})=>this.setState({ageRange:value})}
                    required
                  />
                  <Form.TextArea label='Special notes' placeholder='Special Preferences for the child if any..' value = {this.state.specialNotes}
                    onChange={(e)=>this.setState({specialNotes:e.target.value})} />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field
                    control={Input}
                    label='Address'
                    placeholder='Address'
                    value = {this.state.requestorAddress}
                    onChange={(e)=>this.setState({requestorAddress:e.target.value})}
                    required>

                    </Form.Field>

                    <Form.Field
                      control={Input}
                      label='City'
                      placeholder='City'
                      value = {this.state.city}
                      onChange={(e)=>this.setState({city:e.target.value})}
                      required
                    />
                    <Form.Field
                      id='form-input-control-first-name'
                      control={Input}
                      label='Postal / Zip Code'
                      placeholder='Postal / Zip Code'
                      value = {this.state.zipCode}
                      onChange={(e)=>this.setState({zipCode:e.target.value})}
                      required
                    />
                    <Form.Field
                      id='form-input-control-last-name'
                      control={Input}
                      label='Emergency Contact No.'
                      placeholder='Contact No.'
                      value = {this.state.contactNo}
                      onChange={(e)=>this.setState({contactNo:e.target.value})}
                      required
                    />
                </Form.Group>
                {

                  this.state.facilityPreference !='Babysitter' ?
                  <Form.Group inline>
                    <label> Please select one as per you preference</label>
                    <Form.Field>
                      <Radio
                        label='Need a pick up for the Child care'
                        name='Need a pick up for the Child care'
                        value='needPickup'
                        checked={this.state.dropPreference === 'needPickup'}
                        onChange={(e,{ value })=>this.setState({dropPreference:value})}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Radio
                        label='I will drop my child to the assigned Childcare facility'
                        name='I will drop my child to the assigned Childcare facility'
                        value='willDrop'
                        checked={this.state.dropPreference === 'willDrop'}
                        onChange={(e,{ value })=>this.setState({dropPreference:value})}
                        />
                    </Form.Field>
                  </Form.Group>
                  :
                  ''
                }


                <Form.Button style={{backgroundColor:"#cc0066",color:"white"}} onClick={this.handleSubmit}>Submit</Form.Button>
              </Form>
              <Modal
                     size="small"
                     open={this.state.modalOpen}
                     onClose={()=>this.setState({modalOpen:false})}
                   >
                     <Modal.Header>Request successfully registered!</Modal.Header>
                     <Modal.Content>
                       <h4><em>Your request is registered. We will notify you when we have assigned a volunteer to your request.</em></h4>
                     </Modal.Content>
                     <Modal.Actions>
                        <Link to='/home'>
                       <Button  style={{backgroundColor:"#cc0066",color:"white"}} onClick={()=>this.setState({modalOpen:false})} >
                         OK
                       </Button>
                       </Link>
                     </Modal.Actions>
                   </Modal>
            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    )
  }
}
export default ChidCareForm;
