import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const PolicyDocs = () => {
    const [policyData, setPolicyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/policydoc'); 
                setPolicyData(response.data.policyData);
            } catch (error) {
                console.error('Error fetching policy data:', error);
            }
        };
    
        fetchData(); 
    }, []); 


    const openPdf = async () => {
        try {
            const response = await axios.get('http://localhost:8000/getpolicyData' , { responseType: 'blob' });
            console.log(response);
            console.log("Hey");
            const blob = new Blob([response.data] , { type: 'application/pdf' });
            console.log(response.data);
            const pdf = URL.createObjectURL(blob);
            console.log(pdf);
            window.open(pdf, '_blank');
        } catch (error) {
          console.error('Error fetching PDF:', error);
        }
      };

    return (
        <>
            <table className='policyTab'>
                <caption className='policyCap'>Policy Docs</caption>
                <thead>
                    <tr>
                        <th className='policyData'>S.No</th>
                        <th className='policyData'>Policy Name</th>
                        <th className='policyData'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {policyData.map((policy) => (
                        <tr key={policy.id}>
                            <td className='policyData'>{policy.id}</td>
                            <td className='policyData'>{policy.name}</td>
                            <td className='policyData'>
                                <button className = 'policyBtn' onClick={() => openPdf()}>PDF</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default PolicyDocs;