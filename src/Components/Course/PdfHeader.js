import React from 'react';
import './PdfHeader.css'
const PdfHeader  = ({toPdf}) => {
    return (
        <>
            <header>
                <button onClick={toPdf}>PDf Download Course Detail</button>
            </header>
        </>
    );
};

export default PdfHeader ;