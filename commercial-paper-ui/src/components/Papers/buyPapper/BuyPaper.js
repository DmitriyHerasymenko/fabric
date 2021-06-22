import React from 'react';
import Button from '@material-ui/core/Button';
import axiosInstance from '../../../api/axiosInstance';

const  AddPaper = props => {
    
    const buyRequest = async () =>  {
        const loader = props.loader;
        loader(true)
        const certificate = localStorage.getItem('certificate');
        const privateKey = localStorage.getItem('privateKey');
        const data = props.row
        await axiosInstance.post('/api/buy', {
            certificate,
            privateKey,
            class: data.class,
            currentState: data.currentState,
            faceValue: data.faceValue,
            issueDateTime: data.issueDateTime,
            issuer: data.issuer,
            maturityDateTime: data.maturityDateTime,
            mspid: data.mspid,
            owner: data.owner,
            paperNumber: data.paperNumber
          })
        loader(false)
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