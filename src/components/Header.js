import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { FiHome } from 'react-icons/fi'

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { Container } from '@mui/material';
import {
    Grid,
    Card,
    CardMedia,
  } from '@material-ui/core'

function Header (props) {
  const { sections, title } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">info@webmail.com</Button>
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
        <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Português
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
          <MenuItem onClick={handleClose}>Inglês</MenuItem>
          <MenuItem onClick={handleClose}>Francês</MenuItem>
          <MenuItem onClick={handleClose}>Alemão</MenuItem>
        </Menu>
      </div>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        
      </Toolbar>

      <Container maxWidth="lg" >
      
        <Grid container spacing={3}>
          <Grid item xs = {2}>
            <Box>
              <Card>
              <CardMedia  
                              
                             
                              
              />
              </Card>
            </Box>
          </Grid>
        </Grid>

          <Box>
            <FiHome size={40} color='#ffa500' />
            <Typography component="h4" variant="h5" >For Sale</Typography>
            
          </Box>
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



export default Header;