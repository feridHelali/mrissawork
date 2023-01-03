import {useState} from "react";

const AddPhoneFrom=(props)=>{
    const [label,setLabel]= useState("");
    const [brand,setBrand]= useState("");
    const [price,setPrice]= useState(0);

    const  sendPhoneToAPI=async ()=>{
        await fetch("http://localhost:3030",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({brand,label,price})
        }).then(data=>alert('Phone Added succesfully'))
    }


  return (
    <div className="contaier-fluid">
        <form className="form-group row">
            <label forhtml="brand" >Brand:
                <input 
                    type="text" 
                    className="form-control"
                    value={brand} 
                    onChange={(e)=>{setBrand(e.target.value)}}
                    placeholder="Type Brand here"
                    name="brand"/>
            </label>
            <label forhtml="label" >Label:
                <input type="text" 
                className="form-control" 
                name="label"
                placeholder="Type Label here"
                value={label}
                onChange={(e)=>{setLabel(e.target.value)}}
                /> {label}
            </label>
            <label forhtml="price" >Price:
                <input 
                    type="numeric" 
                    className="form-control" 
                    name="price"
                    value={price} 
                    onChange={(e)=>{setPrice(e.target.value)}}
                    />
            </label>
            <br/>
        </form>
            <button 
                className="btn btn-primary"
             onClick={()=>{
                sendPhoneToAPI();
             }}>Send</button>
    <pre><code>
    {JSON.stringify({brand,label,price},undefined,3)}</code></pre>
    </div> 
  )
}
export default AddPhoneFrom;