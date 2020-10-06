import React, { Component, useState  } from 'react'
import { Menu, Grid, Container, Icon, Header, Image, Dropdown, Radio, Button, Form,Modal } from 'semantic-ui-react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import AppBar from '../homepage/appBar.jsx'
const IMAGE_URL = require('./../../config/config.js').IMAGE_URL
const SERVER_URL = require('./../../config/config.js').SERVER_URL
import request from "superagent"

function RideForm(){
  const [requestorName, setRequestorName] = useState('');
  const [phone_no, setPhoneNo] = useState(null);
  const [city,setCity]=useState('')
  const [pincode,setPincode]=useState(null)
  const [pickup_date,setPickupdate]=useState('')
  const [pickup_time,setPickuptime]=useState('')
  const [no_of_people,setNoOfPeople]=useState(null)
  const [destination,setDestination] = useState('')
  const [modalOpen,setModal]=useState(false)

  const register = e => {
    e.preventDefault()
    console.log("state values",requestorName,phone_no,city,pincode,pickup_date,pickup_time,no_of_people,destination);
      request.post(SERVER_URL+'/createRequest')
      .send(
        { requestor_name:requestorName,phone_no:phone_no,city:city,pincode:pincode,
          pickup_date:pickup_date,pickup_time:pickup_time,
          no_of_people:no_of_people,destination:destination
      }).then(response => {
        console.log("Response after saving request",response);
        setModal(true)
      })
  }
return(
      <div>

          <div className="app">
          </div>
               <div className="app_body">
               <h1 style={{color:"#cc0066",textAlign:"center"}}><em>Request For a Ride</em></h1>
                </div>

               <Form style={{marginTop:"-350px",marginLeft:'15%'}}>
               <Form.Group>
               <Form.Field>
               <label style={{fontSize:'16px'}}>Full Name</label>
               <input
                style={{color:"black",fontSize:'14px',width:'180%',borderRadius:'12px',border:'solid 1px lightgray'}}
                value={requestorName} onChange={e => setRequestorName(e.target.value)} placeholder='Full Name'
                 />
               </Form.Field>
               <Form.Field style={{marginLeft:'200px'}}>
               <label style={{fontSize:'16px',marginLeft:'200px'}}>Contact No</label>
               <input
               style={{color:"black",fontSize:'14px',width:'90%',borderRadius:'12px',marginLeft:'200px',border:'solid 1px lightgray'}} type="number"
               value={phone_no} onChange={e => setPhoneNo(e.target.value)} placeholder='Contact No'
                />
               </Form.Field>
               </Form.Group>
               <Form.Group>
               <Form.Field>
               <label style={{fontSize:'16px'}}>No of People</label>
               <input style={{color:"black",fontSize:'14px',width:'180%',borderRadius:'12px',border:'solid 1px lightgray'}}   type="number"
                 value={no_of_people} onChange={e => setNoOfPeople(e.target.value)} placeholder='No of People'
                />
               </Form.Field>
               <Form.Field style={{marginLeft:'200px'}}>
               <label style={{fontSize:'16px',marginLeft:'200px'}}>ZipCode</label>
               <input style={{color:"black",fontSize:'14px',width:'90%',borderRadius:'12px',marginLeft:'200px',border:'solid 1px lightgray'}} type="number"
                value={pincode} onChange={e => setPincode(e.target.value)} placeholder='ZipCode'
               />
               </Form.Field>
               </Form.Group>
               <Form.Group>
               <Form.Field>
               <label style={{fontSize:'16px'}}>Date of PickUp</label>
               <input style={{color:"black",fontSize:'15px',width:'180%',borderRadius:'12px',border:'solid 1px lightgray'}}   type="date"
                 value={pickup_date} onChange={e => setPickupdate(e.target.value)} placeholder='Date of PickUp'
               />
               </Form.Field>
               <Form.Field style={{marginLeft:'200px'}}>
               <label style={{fontSize:'16px',marginLeft:'190px'}}>Time of Pickup</label>
               <input style={{color:"black",fontSize:'14px',width:'90%',borderRadius:'12px',marginLeft:'190px',border:'solid 1px lightgray'}}
                 value={pickup_time} onChange={e => setPickuptime(e.target.value)}  placeholder='Time of PickUp'
               />
               </Form.Field>
               </Form.Group>
               <Form.Group>
               <Form.Field>
               <label style={{fontSize:'16px'}}>Source Address</label>
               <input style={{color:"black",fontSize:'14px',width:'180%',borderRadius:'12px',border:'solid 1px lightgray'}}
                value={city} onChange={e => setCity(e.target.value)} placeholder='City'
               />

               </Form.Field>
               <Form.Field style={{marginLeft:'200px'}}>
               <label style={{fontSize:'16px',marginLeft:'200px'}}>Destination Address</label>
               <input style={{color:"black",fontSize:'14px',width:'90%',borderRadius:'12px',marginLeft:'200px',border:'solid 1px lightgray'}}
                 value={destination} onChange={e => setDestination(e.target.value)} placeholder='Destination'
               />
               </Form.Field>
               </Form.Group>
               <Form.Group>
               <Form.Field>
               <Button
               style={{backgroundColor:'#d904c7',color:'white',marginLeft:'850px',top:'10%'}}
               onClick={register}
                >
               Submit</Button>
               </Form.Field>
               </Form.Group>
               </Form>
               <Modal
                      size="small"
                      open={modalOpen}
                      onClose={()=> setModal(false)}
                    >
                      <Modal.Header>Request successfully registered!</Modal.Header>
                      <Modal.Content>
                        <h4><em>Your request is registered. We will notify you when we have assigned a volunteer to your request.</em></h4>
                      </Modal.Content>
                      <Modal.Actions>
                         <Link to='/home'>
                        <Button style={{backgroundColor:"#cc0066",color:"white"}} onClick={()=> setModal(false)}>
                          OK
                        </Button>
                        </Link>
                      </Modal.Actions>
                    </Modal>
          </div>
    )
  }

export default RideForm;
