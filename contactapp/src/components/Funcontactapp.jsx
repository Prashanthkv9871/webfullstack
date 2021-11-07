import React,{useState,useEffect} from 'react'
import Axios from 'axios';

function Funcontactapp() {
    let [contacts,setContact]=useState([]);
   
    useEffect(()=>{
    Axios
    .get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
        .then(res=>{
            console.log(res);
            setContact(res.data)
        })
        .catch(err=>
            {console.log(err)}) 
},[])
    return (
        <div>
            <ul className="container ">
                {contacts.map((contact)=>{
                    return(
                        <li key={contact.login.uuid} className='list-group-item'>{contact.name.last}</li>
                    )    
                })}
            </ul>
        </div>
    )
}

export default Funcontactapp;
