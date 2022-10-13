import {useState} from 'react'
import './App.css';
import {Customers} from "./customers"
import { Table } from './Table';
import { Table2 } from './Table2';


function App() {
  const [query,setQuery]=useState("")
  const Search=(data)=>{
    return data.filter((item)=>
    item.name.toLowerCase().includes(query) ||
    item.id_card.toLowerCase().includes(query)||
    item.company.toLowerCase().includes(query)
    
    );

  }
  return (
  
    <div className="App hello" style={{backgroundColor:"black"}}>
      <section className="webdesigntuts-workshop  ">
         
          <div>
       
       <form action="" method="">
       <input type="text" placeholder="Search customer.." onChange={(e)=>setQuery(e.target.value)} autoFocus/>
       </form>
       </div>
       {query !=0 ? (
        <Table data={Search(Customers)}/>
      ) : (
        <Table2/>
      )}
       
      
        </section>
     
      
      
    </div>
   
  );
}

export default App;
