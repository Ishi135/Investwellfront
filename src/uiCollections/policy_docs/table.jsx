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

    function remove(str,word){
        const ind = str.indexOf(word);
        if(ind !== -1){
            return str.substring(ind + word.length);
        }
        return str;
    }

    const openPdf = async() => {
        const response = await axios.get('http://localhost:8000/getpolicyData')
        console.log(response.data.result);
        const PDFpath = response.data.result;

        const str = remove(PDFpath, 'public');
        console.log(str);
        window.open(str,'_blank'); 
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