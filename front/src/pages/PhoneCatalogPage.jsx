import {useState,useEffect} from "react";
import {Link} from "react-router-dom"


const PhonesCatalog = () => {
    const [phones,setPhones]= useState([]);

    const getAllPhones=async ()=>{
        await fetch("http://localhost:3030")
        .then(data=>{
           return data.json()
        })
        .then(json =>setPhones(json))
        .catch(error=>console.log(error.message))

    }

    useEffect(()=>{
        getAllPhones()
    },[])

    return (
        <>
        <Link className="btn btn-primary" to="/add">Add Phone</Link>
          {phones.map(phone=>(

            <div key={phone._id} className="card" style={{width: "18rem"}}>
                <img src={phone.photo_url} className="card-img-top" alt="photo" />
                <div className="card-body">
                    <h5 className="card-title">{phone.label}</h5>
                    <p className="card-text">{phone.brand}</p>
                    <a href="/" className="btn btn-primary">{phone.price.toFixed(3)} Buy</a>
                </div>
            </div>
          ))}
        </>
    )
}

export default PhonesCatalog;