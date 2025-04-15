import { useEffect, useState } from 'react';

function App() {
  const [a,setA] = useState()
  const [b,setB] = useState(new Date())
  const [originalday,setOriginalday] = useState()
  const [originalmonth,setOriginalmonth] = useState()
  const [y,setY] = useState()




 
 const am = () => {
  const q = Date.parse(a)
  const z = Date.parse(b)
  const ms = z - q;
  const s = ms/1000;
  const m = s/60;
  const hr = m/60;

  const d = Math.abs(hr/24);
 const day = Math.floor(d);


  const mt =Math.abs(day/30);
 const mon = Math.floor(mt);
 
 

  const yr = Math.abs(mon/12);
 const year = Math.floor(yr);


  const changemon = Math.abs(mon * 30);
  
   let od ;
    
  if(year >= 1)
  {
 od = Math.abs(day - changemon -5);
  }

  else{
 od =  Math.abs(day - changemon);
  }

  const changeyear = Math.abs(year * 12);

  const om = Math.abs(mon - changeyear);

  setOriginalday(od)
  setOriginalmonth(om)
  setY(year)
  
  
 }


  
  return (
    <div>
     

     <div class="container">
        <h2>Age Calculator</h2>
        <input type="date" id="dob" onChange={(q)=>{setA(q.target.value)}} />
        <button onClick={am}>Calculate Age</button>
     <p id="result">year - {y}</p>
      <p id="result">Month - {originalmonth}</p>    
        <p id="result">day - {originalday}</p>
     
    </div>
    </div>
  );
}

export default App;
