import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import axiosInstance from '../../../api/axiosInstance';

const  AddPaper = props => {
    
    const buyRequest = async () =>  {
        const certificate = localStorage.getItem('certificate');
        const privateKey = localStorage.getItem('privateKey');
        const data = props.row
        console.log("props", data)
        // const resp = await axiosInstance.post('/api/buy', {
        //     certificate,
        //     privateKey,
        //     class: data.class,
        //     currentState: data.currentState,
        //     faceValue: data.faceValue,
        //     issueDateTime: data.issueDateTime,
        //     issuer: data.issuer,
        //     maturityDateTime: data.maturityDateTime,
        //     mspid: data.mspid,
        //     owner: data.owner,
        //     paperNumber: data.paperNumber
        //   })
    }


    return (
        <div>
            {props.row.owner === "digibank" ? <span>You buy this paper</span> : <Button variant="contained" size="small" color="primary"  onClick={buyRequest}>
                Buy Paper
            </Button>}
        </div>
    );
}

export default  AddPaper;