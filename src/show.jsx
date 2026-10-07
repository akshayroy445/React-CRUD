import axios from "axios"
import { useEffect, useState } from "react"
import Insert from "./insert"

function Show(){
    let [showdata,setShowdata] = useState([])

    let [showfrm,setShowfrm] =useState(false)

    let [editdata,setEdit] =useState()

    function handlechange(e) {
    let { name, value } = e.target;

    setEdit({
        ...editdata,
        [name]: value
    });
}

function submit(e){
    e.preventDefault()
    axios.put(`http://localhost:3000/userdata/${editdata.id}`,editdata)
    .then(()=>alert("updated......."))
}
    

    function del(id){
        axios.delete(`http://localhost:3000/userdata/${id}`)
        .then(()=>alert("deleted..."))
    }
    useEffect(()=>{
        axios.get('http://localhost:3000/userdata')
        .then((res)=>setShowdata(res.data))
    },[del])

    return(
        <>
        <h1>Show data</h1>
        <table border="">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Contact</th>
                <th>City</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
        {
            showdata.map((e)=>(
            <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.contact}</td>
                <td>{e.city}</td>
                <td><button onClick={()=>del(e.id)}>Delete</button></td>
                <td><button onClick={()=>(setShowfrm(true),setEdit(e))}>Edit</button></td>
            </tr>)
            )
        }
            
        </table>

        {showfrm && 
        <form onSubmit={submit}>
            <label>ID</label>
            <input type="text" name="id" value={editdata.id} onChange={handlechange} /><br></br>
            <label htmlFor="">Name</label>
            <input type="text" name="name"  value={editdata.name} onChange={handlechange} /><br></br>

            <label htmlFor="">age</label>
            <input type="text" name="age" value={editdata.age} onChange={handlechange} /><br></br>
            <label htmlFor="">contact</label>
            <input type="text" name="contact" value={editdata.contact} onChange={handlechange} /><br></br>
            <label>city</label>
            <input type="text" name="city"  value={editdata.city} onChange={handlechange}/>
            <input type="Submit"/>
        </form>

        }
        </>
    )
}
export default Show