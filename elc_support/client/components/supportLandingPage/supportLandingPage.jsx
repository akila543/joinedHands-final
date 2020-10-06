import React, { Component } from 'react'
import {Grid, Image, Segment, Container, Reveal, Header, Card} from 'semantic-ui-react'
import { Link, useHistory , Redirect } from "react-router-dom"
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import Carousel from './../Images/carousel3.jpg'
import Carousel2 from './../Images/BChope.jpg'
import Ride4Cause from './../Images/ride4cause4.jpg'
import ShareMeal from './../Images/shareMeal13.png'
import GroupTherapy from './../Images/groupTherapy2.jpg'
import ChildCare from './../Images/childCare6.png'
import RunErrands from './../Images/runningErrands.png'
import Slider from "react-slick";
import AppBar from '../homepage/appBar.jsx'
import {connect} from 'react-redux';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class SupporPage extends Component{
  constructor(){
    super()
    this.state={
      service : null
    }
    this.handleRide = this.handleRide.bind(this)
    this.handleChildcare = this.handleChildcare.bind(this)
  }
  handleRide()
  {
    console.log("inside handleRide");
    this.setState({service: '/ride'})
  }
  handleChildcare()
  {
    console.log("inside handleChildcare");
    this.setState({service: '/childCare'})
  }
  render()
  {
    console.log("redux data",this.props.data);
    const {service} = this.state
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    if (service)
    {
      return <Redirect to={service} />
    }
    else {
      return(
        <div>
        <AppBar/>
        <Grid>
          <Grid.Row>
            <Container fluid style={{marginTop:"2%"}}>
              <Image src ={Carousel} size='large' style={{height:"90vh",width:"100%",marginTop:"2vh"}} />
            </Container>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Header as='h1'>
                <em>Our Services</em>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={14} textAlign="center">
            <Slider {...settings}>
            {this.props.data.user==="volunteer" ?
            <Link to='/ride'>
            <Card >
              <Card.Content>
                <Image src={Ride4Cause} style={{height:"40vh",width:"40vw"}} />
                  <Header as ="h2">
                    <em>Ride for a Cause</em>
                  </Header>
              </Card.Content>
            </Card>
            </Link>
            :''
            }
            {this.props.data.user==="caregiver" ?
            <Link to='/rideForm'>
            <Card >
              <Card.Content>
                <Image src={Ride4Cause} style={{height:"40vh",width:"40vw"}} />
                  <Header as ="h2">
                    <em>Ride for a Cause</em>
                  </Header>
              </Card.Content>
            </Card>
            </Link>
            :''
            }
            {this.props.data.user==="volunteer" ?
              <Link to='/childCare'>
                <Card onClick={this.handleChildcare}>
                  <Card.Content>
                      <Image src={ChildCare} style={{height:"40vh",width:"40vw"}} />
                      <Header as ="h2">
                        <em>Child Care</em>
                      </Header>
                  </Card.Content>
                </Card>
              </Link>
              :
              <Link to='/childCareForm'>
                  <Card onClick={this.handleChildcare}>
                    <Card.Content>
                        <Image src={ChildCare} style={{height:"40vh",width:"40vw"}} />
                        <Header as ="h2">
                          <em>Child Care</em>
                        </Header>
                    </Card.Content>
                  </Card>
                </Link>
              }


            <Card>
              <Card.Content>
                <Image src={GroupTherapy} style={{height:"40vh",width:"40vw"}} />
                <Header as ="h2">
                  <em>Group Therapy</em>
                </Header>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                  <Image src={ShareMeal} style={{height:"40vh",width:"40vw"}} />
                  <Header as ="h2">
                    <em>Share a Meal</em>
                  </Header>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image src={RunErrands} style={{height:"40vh",width:"40vw"}} />
                <Header as ="h2">
                  <em>Running Errands</em>
                </Header>
              </Card.Content>
            </Card>
            </Slider>
            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>

        </Grid>
        </div>
      )
    }

  }
}
function mapStateToProps(state) {
  return {data: state.userReducer}
}

export default connect(mapStateToProps,null)(SupporPage);
