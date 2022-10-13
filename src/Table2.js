import React from 'react'
import './App.css';


 export const Table2 = () => {
  return (

    <div className="datatable-container">
    <table className="datatable alright  ">
    <thead>
      <tr style={{color:"green",backgroundColor: "black"}}>
        
        <th>Name</th>
        <th>ID/Passport</th>
        <th>Company</th>
        <th style={{textAlign: "left"}}>Copy to clipboard</th>
       
       
      </tr>
    </thead>

    <tbody >
      
            <tr >
                <td style={{color:"white"}} colSpan="3">No Data Available  <span style={{fontSize:"15px"}}>(Please Search data...)</span></td>
                
                <td  style={{paddingLeft: "50px", paddingRight: "0px"}}><button className="glow-on-hover" type="button">
                <i style={{color:"rgb(47, 255, 85)", fontSize:"15px"}} className="fa fa-circle" aria-hidden="true"></i>
                </button></td>
            </tr>
           

       
        </tbody>
      </table>
      </div>


  );
};
