import React from 'react'
import './App.css';




 export const Table = ({data}) => {
  

  return (

    <div class="datatable-container">
    <table className="datatable alright ">
    <thead>
      <tr style={{color:"green",backgroundColor: "black"}}>
        
        <th>Name</th>
        <th>ID/Passport</th>
        <th>Company</th>
        <th style={{textAlign: "left"}}>Copy to clipboard</th>
       
       
      </tr>
    </thead>

    <tbody >
      {data.map((item)=>(
            <tr key={item.id}>
                <td style={{color:"white"}}>{item.name}</td>
                <td style={{color:"white"}}>{item.id_card}</td>
                <td style={{color:"white"}}>{item.company}</td>
                <td  style={{paddingLeft: "50px", paddingRight: "0px"}}>
                <button className="glow-on-hover" type="button" onClick={(e) => {navigator.clipboard.writeText([item.name +" "+ (item.id_card).toString()])}}>
                <i style={{color:"rgb(47, 255, 85)", fontSize:"15px"}} className="fa fa-circle" aria-hidden="true"></i>
                </button></td>
            </tr>

        ))}
        </tbody>
      </table>
      </div>


  );
};
