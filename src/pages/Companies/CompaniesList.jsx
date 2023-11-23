import React from 'react'
import './Companies.css';

const CompaniesList = ({ company }) => {
  return (
    <div className='tag' style={{border:'1px solid #d2d2d2',margin:'2px'}}>
       {company.companylogo}
        <h5>{company.companyName}</h5>
        <p>{company.companyDesc}</p>
    </div>)
}

export default CompaniesList