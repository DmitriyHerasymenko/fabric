import React from 'react';
import Button from '@material-ui/core/Button';
import axiosInstance from '../../../api/axiosInstance';

const  AddPaper = ({ loader, row, getData }) => {
    console.log("getDAta", getData);
    const buyRequest = async () =>  {
        loader(true)
        const certificate = localStorage.getItem('certificate');
        const privateKey = localStorage.getItem('privateKey');
        const data = row
        const resp = await axiosInstance.post('/api/buy', {
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
        await getData()
    }


    return (
        <div>
            {row.owner === "digibank" ? <span>You bouught this paper</span> : <Button variant="contained" size="small" color="primary"  onClick={buyRequest}>
                Buy Paper
            </Button>}
        </div>
    );
}

export default  AddPaper;