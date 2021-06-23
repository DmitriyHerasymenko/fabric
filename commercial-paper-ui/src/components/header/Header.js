import React from 'react';
import { useHistory } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
    IconButton: {
        fill: "#fff"
    }
}));

const options = [
    'LogOut',
];

const ITEM_HEIGHT = 48;

const Header = ({ user, setUser }) => {
    const classes = useStyles();
    const history = useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const userLocal = localStorage.getItem('user');

    if(user === false) {
       userLocal === String ? user = userLocal : history.push('/')
    }


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOut = () => {
        setUser(null)
        user = null
        localStorage.clear()
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
                                    //onClick={logOut}
                                    color="inherit"
                                >
                                    {user.name? user.name : ""}
                                    {user.name ? <IconButton className={classes.IconButton}
                                        aria-label="more"
                                        aria-controls="long-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>  : ""}
                                    <Menu
                                        id="long-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: '20ch',
                                            },
                                        }}
                                    >
                                        {user.name ?  options.map((option) => (
                                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={logOut}>
                                                {option}
                                            </MenuItem>
                                        )) : ""}
                                    </Menu>
                                   
                                </Button>
                            </ButtonGroup>

                    }

                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header;
