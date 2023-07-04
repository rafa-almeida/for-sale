import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FiHome, FiMail, FiFlag } from 'react-icons/fi'
import { makeStyles } from '@material-ui/core';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { Container, Divider } from '@mui/material';
import {CardMedia} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  main:{
    fontFamily:'Caprasimo',
    width:'100%',
    heigth:'100vh',
    maxWidth: '100%',
    position:'absolute',
  },

  bg:{
    maxWidth: '100vw',
    position:'absolute',

  },

  bg1:{
    backgroundSize:'cover',
    height: '100vh',
    width: '100vw',
    maxWidth: '100vw',
    marginLeft:'-24px',
    opacity:'0.9',
    },

  menu:{
    fontFamily:'Roboto',
    textTransform:'lowercase',
    fontWeight:'bold',
    color:'white',
  },

  flag:{
    marginTop: '10px'
  },

  logo:{
    display:'flex',
  },

  logo1:{
    marginLeft:'2px',
    fontFamily:'Belanosima',
    fontWeight:'600',
    color:'white',
  },

  fi:{
    marginTop:'-10px',
  },

  menuPrincipal:{
    display:'flex',
    color:'white',
    fontFamily:'Roboto',
    fontWeight:'bold',
    position: 'relative',
    left: '450px',
    
  },

  add:{
    display:'flex',
    marginLeft:'60px',
    fontFamily:'Roboto',
    fontWeight:'500',
    position: 'relative',
    left: '450px',
    backgroundColor: '#ff7f50',
    padding:'15px 40px 15px 40px',
    color:'white',
  },

  toolbarCentral:{
    
    justifyContent:'center',
    display:'block',
    textAlign:'center',
  },

  central1:{
    fontFamily:'Belanosima',
    color:'white',
    fontWeight:'600',
    margin:'0',
    padding:'110px 300px 5px 300px',
    fontSize:'60px',
  },

  central2:{
    fontFamily:'Roboto',
    color:'white',
    margin:'0',
    padding:'5px 300px 50px 300px',
    fontSize:'large',
  },

  central3:{
    fontFamily:'Roboto',
    fontSize:'large',
    marginBotton:'150px',
    fontWeight:'400',
    backgroundColor: '#ff7f50',
    padding:'15px 40px 15px 40px',
    color:'white',
    
  },
  imgFundo:{
    width:'100%',
    position:'absolute',
    marginLeft:'0',
  }
}))


export default function Header (props) {
  const classes = useStyles()
  const { sections, title } = props;
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE, setAnchorE] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event?.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
      
    };

    const handlefecharIdioma= () => {
      setAnchorEz(null);
    };

  return (
    <React.Fragment>
      <Container className={classes.bg}>
        <Box>
            <CardMedia
              className={classes.bg1} style={{ backgroundImage: "url(https://i.pinimg.com/564x/0e/aa/6d/0eaa6d01555f8c9273a04c6f9b337439.jpg)" }}>
            </CardMedia>
      </Box>
      
      </Container>

      <Container className= {classes.main} >  
                     
        <Toolbar sx={{ borderBottom: 2, borderColor: 'divider' }}>
        <FiMail size={18} color='#ff7f50' />
        <Button size="small" className= {classes.menu} >info@webmail.com</Button>
        <Typography
          component="h5"
          variant="h6"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <Box >
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            
            className= {classes.menu}
          >
            Português
          </Button>
          <FiFlag size={20} color='#ff7f50' className = {classes.flag} />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handlefecharIdioma}>Inglês</MenuItem>
            <MenuItem onClick={handlefecharIdioma}>Francês</MenuItem>
            <MenuItem onClick={handlefecharIdioma}>Alemão</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        
      </Toolbar>

        <Toolbar>
          <Box className = {classes.logo}>
            <FiHome size={60} color='#ff7f50' className = {classes.fi} />
            <Typography component="h4" variant="h3" className = {classes.logo1} >For Sale</Typography>
            
          </Box>
          
          <Box >
          <Button 
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            
            className = {classes.menuPrincipal}
          >
            Home
          </Button>
          
        </Box>

        <Box>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            
            className = {classes.menuPrincipal}
          >
            About
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}            
          >
            <MenuItem onClick={handleClose}>About</MenuItem>
            <MenuItem onClick={handleClose}>Services</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Team</MenuItem>
            <MenuItem onClick={handleClose}>FAQ</MenuItem>
          </Menu>
        </Box>

        <Box>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            
            className = {classes.menuPrincipal}
          >
            Shop
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            className = {classes.menuPrincipal}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}            
          >
            <MenuItem onClick={handleClose}>Shop</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Sign in</MenuItem>
            <MenuItem onClick={handleClose}>Register</MenuItem>
          </Menu>
        </Box>

        <Box>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            
            className = {classes.menuPrincipal}
          >
            Contact
          </Button>
        </Box>

        <Button className = {classes.add}>Add Listing</Button>
      </Toolbar>
      <Toolbar className = {classes.toolbarCentral}>
        <h1
           className = {classes.central1} >Find Your Dream House By Us</h1>
          <p className = {classes.central2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <Button className = {classes.central3}> Make an Enquiry</Button>
          
        </Toolbar>

        
      
      
      </Container>
      
      
      
    </React.Fragment>
    







      

  
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};



