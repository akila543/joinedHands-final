import React, { Component, useState,useEffect } from 'react'
import { Menu, Grid, Container, Icon, Header, Image, Dropdown, Radio, Button, Form,Modal,Segment,Table } from 'semantic-ui-react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import AppBar from '../homepage/appBar.jsx'
const SERVER_URL = require('./../../config/config.js').SERVER_URL
import request from "superagent"

function RideList(){
    const [data,setData] = useState([])
    const [modalOpen,setModal]=useState(false)
    useEffect(()=>{
      request.get(SERVER_URL+'/requests',(err,result)=>{
        const response = JSON.parse(result.text)
        setData(response)
      })
    },[])
return(
      <div>
      
          <div className="app">
          </div>
          <div className="app_tablebody">
              <Table inverted >
                <Table.Header >
                <Table.HeaderCell className='tableHeader'>S.No.</Table.HeaderCell>
                  <Table.HeaderCell className='tableHeader'>Request Id</Table.HeaderCell>
                  <Table.HeaderCell className='tableHeader'>Requestor Name</Table.HeaderCell>
                    <Table.HeaderCell className='tableHeader'>Phone No.</Table.HeaderCell>
                    <Table.HeaderCell className='tableHeader'>Pickup Place</Table.HeaderCell>
                    <Table.HeaderCell className='tableHeader'>Pickup Time</Table.HeaderCell>
                    <Table.HeaderCell className='tableHeader'>Pickup Date</Table.HeaderCell>
                    <Table.HeaderCell className='tableHeader'>Status</Table.HeaderCell>
                    <Table.HeaderCell className='tableHeader'>Destination</Table.HeaderCell>
                    <Table.HeaderCell className='tableHeader'></Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                {data.map((item,i)=>(
                  <Table.Row key={i}>
                  <Table.Cell centered className='table1'>{i+1}</Table.Cell>
                  <Table.Cell centered className='table1'>{item.request_id}</Table.Cell>
                  <Table.Cell centered className='table1'>{item.requestor_name}</Table.Cell>
                    <Table.Cell centered className='table1'>{item.phone_number}</Table.Cell>
                    <Table.Cell centered className='table1'>{item.city}</Table.Cell>
                    <Table.Cell centered className='table1'>{item.pickup_date}</Table.Cell>
                    <Table.Cell centered className='table1'>{item.pickup_time}</Table.Cell>
                    <Table.Cell centered className='table1'>{item.status}</Table.Cell>
                    <Table.Cell centered className='table1'>{item.destination}</Table.Cell>

                    <Table.Cell centered className='table1'>
                      <Button.Group width='2'>
                      <Button icon style={{backgroundColor:'white',color:"black"}} onClick={()=> setModal(true)}>
                        <Icon name='check' />
                        Accept
                      </Button>
                      </Button.Group>
                    </Table.Cell>
                  </Table.Row>

                ))}

                </Table.Body>
              </Table>
              <Modal
                     size="small"
                     open={modalOpen}
                     onClose={()=> setModal(false)}
                   >
                     <Modal.Header>Happy Volunteering!</Modal.Header>
                     <Modal.Content>
                       <h4><em>Thanks for volunteering with us. We have notified the requestor of your acceptance.
                        They look forward to seeing you at the appointed time.</em></h4>
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
          </div>
    )
  }

export default RideList;
