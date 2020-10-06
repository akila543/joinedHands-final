import React ,{ useState,Component }from 'react'
import { Container,Message, Icon, Header,Menu,Image, Dropdown, Radio, Button,Input, Form,Modal,Segment,Table,Card } from 'semantic-ui-react'
import { Link, useHistory , Redirect } from "react-router-dom"
import request from "superagent"
const SERVER_URL = require('./../../config/config.js').SERVER_URL
import AppBar from '../homepage/appBar.jsx'
import BackgroundImg from './../Images/pink.jpg'
const data =[
    {"request_id":"CH10001","name":"rita","no_of_children":"1","phone_number":9093244234,"facility":"Child care","age":'3yrs',"address":"Koramangala,bengaluru"},
    {"request_id":"CH10002","name":"sameera","no_of_children":"1","phone_number":9096751324,"facility":"Child care","age":'2yrs',"address":"Guindy,Chennai"}
]
export default class ChildCareList extends Component{
  constructor(props){
    super(props);
    this.state={
        data:[],
        filteredData:[],
        filterText:'',
        reset:false,
        filter:false
    }
    this.handleFilterText=this.handleFilterText.bind(this)
  }
 handleFilterText(e){
 e.preventDefault()
 this.setState({
     filterText:e.target.value
 })
 }
 handleSubmit(e){
    var datarr=this.state.data
    var newArr= datarr.filter(item => item.city.indexOf(this.state.filterText) !== -1 ).map(filteredItem => {
      return filteredItem
     })
     this.setState({filteredData:newArr,filter:true})

 }
 handleReset(){
     this.setState({
         data:data,
         reset: true,
         filter:false
     })
 }
 componentDidMount()
 {
   request.get(SERVER_URL+'/childCareRequests',(err,result)=>{
     const response = JSON.parse(result.text)
     this.setState({
       data : response
     })
  })
 }
  render(){
    return (
      <div>

      <div  className="app_childcare">

         <Container style={{marginTop:""}} >
             <Menu pointing secondary size="massive" style={{borderRadius:"0px"}}>
                <Menu.Menu position='center'>
                  <Menu.Item>
                    <Input icon='search' placeholder='Filter by Location'  onChange={this.handleFilterText} onKeyUp={this.handleSubmit.bind(this)}/>  {/* search box */}
                  </Menu.Item>
                  <Menu.Item>
                    <Button circular onClick={this.handleReset.bind(this)}>Reset</Button>
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </Container>
          <Table  style={{margin:'2%',overflow:"hidden",width:'95vw',opacity:'0.6',textAlign:"center"}}>
                <Table.Header >
                <Table.HeaderCell className='tableHeaderChild'>S.No.</Table.HeaderCell>
                  <Table.HeaderCell className='tableHeaderChild'>Request Id</Table.HeaderCell>
                  <Table.HeaderCell className='tableHeaderChild'>Requestor Name</Table.HeaderCell>
                    <Table.HeaderCell className='tableHeaderChild'>Contact No.</Table.HeaderCell>
                    <Table.HeaderCell className='tableHeaderChild'>No Of Children</Table.HeaderCell>
                    <Table.HeaderCell className='tableHeaderChild'>Age</Table.HeaderCell>
                    <Table.HeaderCell className='tableHeaderChild'>Facility</Table.HeaderCell>
                    <Table.HeaderCell className='tableHeaderChild'>Address</Table.HeaderCell>
                    <Table.HeaderCell className='tableHeaderChild'></Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                {
                  this.state.filter == true?
                  this.state.filteredData.map((item,i)=>(

                    <Table.Row key={i}>
                    <Table.Cell centered className='tableChild'>{i+1}</Table.Cell>
                    <Table.Cell centered className='tableChild'>{item.request_id}</Table.Cell>
                    <Table.Cell centered className='tableChild'>{item.requestorName}</Table.Cell>
                      <Table.Cell centered className='tableChild'>{item.contactNo}</Table.Cell>
                      <Table.Cell centered className='tableChild'>{item.nofChildren}</Table.Cell>
                      <Table.Cell centered className='tableChild'>{item.ageRange}</Table.Cell>
                      <Table.Cell centered className='tableChild'>{item.facilityPreference}</Table.Cell>
                      <Table.Cell centered className='tableChild'>{item.requestorAddress}</Table.Cell>
                      <Table.Cell centered className='table1'>
                        <Button.Group width='2'>
                        <Button icon
                         style={{backgroundColor:'white',color:"black"}}
                         onClick={()=>this.setState({modalOpen:true})}
                         >
                          <Icon name='check' />
                          Accept
                        </Button>
                        </Button.Group>
                      </Table.Cell>
                    </Table.Row>

                  )):
                  this.state.data.map((item,i)=>(

                    <Table.Row key={i}>
                    <Table.Cell centered className='tableChild'>{i+1}</Table.Cell>
                    <Table.Cell centered className='tableChild'>{item.request_id}</Table.Cell>
                    <Table.Cell centered className='tableChild'>{item.requestorName}</Table.Cell>
                      <Table.Cell centered className='tableChild'>{item.contactNo}</Table.Cell>
                      <Table.Cell centered className='tableChild'>{item.nofChildren}</Table.Cell>
                      <Table.Cell centered className='tableChild'>{item.ageRange}</Table.Cell>
                      <Table.Cell centered className='tableChild'>{item.facilityPreference}</Table.Cell>
                      <Table.Cell centered className='tableChild'>{item.requestorAddress}</Table.Cell>
                      <Table.Cell centered className='table1'>
                        <Button.Group width='2'>
                        <Button icon
                         style={{backgroundColor:'white',color:"black"}}
                         onClick={()=>this.setState({modalOpen:true})}
                         >
                          <Icon name='check' />
                          Accept
                        </Button>
                        </Button.Group>
                      </Table.Cell>
                    </Table.Row>

                  ))
                }


                </Table.Body>
              </Table>
              <Modal
                     size="small"
                     open={this.state.modalOpen}
                     onClose={()=>this.setState({modalOpen:false})}
                   >
                     <Modal.Header>Happy Volunteering!</Modal.Header>
                     <Modal.Content>
                       <h4><em>Thanks for volunteering with us. We have notified the requestor of your acceptance.
                        They look forward to seeing you at the appointed time.</em></h4>
                     </Modal.Content>
                     <Modal.Actions>
                        <Link to='/home'>
                       <Button style={{backgroundColor:"#cc0066",color:"white"}} onClick={()=>this.setState({modalOpen:false})}>
                         OK
                       </Button>
                       </Link>
                     </Modal.Actions>
                   </Modal>
    </div>
      </div>

    )
  }
}
