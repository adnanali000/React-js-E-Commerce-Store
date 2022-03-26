import React from 'react'
import {AppBar , Toolbar, IconButton, Badge, Typography, MenuItem, Menu} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import logo from '../../assests/commerce.png'
import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const classes = useStyles();

  return (
    <>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit'>
                    <img src={logo} alt='e-commerce' height='25px' className={classes.image} />
                    E-commerce
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label='Show card items' color='inherit'>
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    
    </>
  )
}

export default Navbar