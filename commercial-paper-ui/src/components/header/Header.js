import React from 'react';
import { useHistory } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'

const useStyles = makeStyles((theme) => ({
root: {
    flexGrow: 1,
},
menuButton: {
    marginRight: theme.spacing(2),
},
title: {
    flexGrow: 3,
    fontSize: "1.rem"
},
}));


const Header = ({user, setUser}) => {
  const classes = useStyles();
  const history = useHistory()
  
  const logOut = () => {
    setUser(null)
    user = null
    history.push('/')
  }

  return (
    <div className={classes.root}>
          <AppBar position="static">
                <Toolbar >
                <Typography variant="h6" className={classes.title}>
                    Fabric
                </Typography>
                {
                    user === null ?
                    <Button 
                        onClick={logOut}
                        color="inherit"
                        >
                            Log in
                    </Button> :
                    <ButtonGroup variant="text">
                        <Button 
                            onClick={logOut}
                            color="inherit"
                            >
                        Log out
                        </Button>
                    </ButtonGroup>
                
                }
                    
                </Toolbar>
            </AppBar>
    </div>
  );
}
export default Header;