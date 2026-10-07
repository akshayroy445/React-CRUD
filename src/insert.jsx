import axios from "axios"
import { useState } from "react"
import { data, useNavigate } from "react-router-dom"
import "./Insert.css";

function Insert(){
//    let [frmdata,setFrmdata]=useState[{}]
let [frmdata, setFrmdata] = useState({})

    let navigate=useNavigate()

    function data(e){
        let {name,value} =e.target 
        setFrmdata({...frmdata,[name]:value})
    }

    function frmsubmit(e){
        e.preventDefault()
        console.log(frmdata);
        axios.post("http://localhost:3000/userdata",frmdata)
        .then((e)=>alert("data submitted..."))
        navigate('/show')
    }


    
  return (
    <>
    <div className="insert-container">
      <div className="form-card">
        <h1>Insert User</h1>

        <form onSubmit={frmsubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={data}
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="text"
              name="age"
              placeholder="Enter your age"
              onChange={data}
            />
          </div>

          <div className="form-group">
            <label>Contact</label>
            <input
              type="text"
              name="contact"
              placeholder="Enter contact number"
              onChange={data}
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              onChange={data}
            />
          </div>

          <input
            type="submit"
            value="Submit"
            className="submit-btn"
          />
        </form>
      </div>
    </div>
    </>
  )
}

export default Insert;

