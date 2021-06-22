import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import axiosInstance from '../../../api/axiosInstance';

export default function AddPaper(props) {



    return (
        <div>
            <Button variant="outlined" color="primary" >
                Buy Paper
            </Button>
        </div>
    );
}