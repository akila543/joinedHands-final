import React from 'react'
import { Menu, Grid, Container, Icon, Header, Image, Dropdown, Radio, Button, Form } from 'semantic-ui-react'
//const IMAGE_URL = require('./../../config/config.js').IMAGE_URL
import { Link, withRouter, Redirect } from 'react-router-dom'

const options = [
  { key: 'profile', icon: 'info circle', text: 'Profile', value: 'profile' },
  { key: 'setting', icon: 'setting', text: 'Setting', value: 'setting' },
  { key: 'logout', icon: 'sign-out', text: 'logout', value: 'logout', as: Link, to: '/' },
]

function Header1() {
  return(
    <div className="header1">
     <Link to='/home'>
    <div>
     <p className="header_title">Joined Hands</p>
    </div>
    </Link>

     <div style={{marginLeft:'80%',marginRight:'10px'}}>

     <Dropdown

       floating
       options={options}
       trigger={<React.Fragment />}
       icon="user circle"
       style={{color:"white",fontSize:"25px",marginTop:"3%"}}
     />
    

     </div>

    </div>
  )
}
export default Header1;
