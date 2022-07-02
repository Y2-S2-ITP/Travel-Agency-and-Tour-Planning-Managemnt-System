import React,{useState} from "react"
import axios from "axios";


export default function AddAccommodation(){

    const[accommodation_ID, setAccommodation_ID]= useState("");
    const[name, setname]= useState("");
    const[location, setlocation]= useState("");
    const[type, setType]= useState("");
    const[price, setprice]= useState("");
    const[owner, setowner]= useState("");
    const[phone, setphone]= useState("");
    const[link, setlink]= useState("");

    function sendData(e){
        e.preventDefault();
        const newAccommodation={
          accommodation_ID,
          name,
          location,
          type,
          price,
          owner,
          phone,
          link
        }
        //console.log(newAccommodation);
        axios.post("http://localhost:8000/accommodation/add",newAccommodation).then(()=>{
          alert("Accommodation added")
        }).catch((err)=>{
           alert(err)
        })  
    }

    return(
      <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/admin_panel/home"style={{color:"red "}}>Accommodation Management</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/admin_panel/accommodation_admin">All Accommadations <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin_panel/accommodation_admin/addnew">Add new Accommodation</a>
      </li>
      

     
    </ul>

  </div>
</nav>

<header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Add new Accommodation here</h1>
                    <p className="lead fw-normal text-white-50 mb-0"></p>
                </div>
            </div>
            
        </header>
        <br/><br/>
     <div className="container">
        <form className="row g-3 needs-validation" novalidate onSubmit={sendData}>
          <div className="col-md-4">
            <label for="accommodation_ID" className="form-label">remark_ID</label>
            <input type="number" className="form-control " id="validationServer01" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
             onChange={(e)=>{
                setAccommodation_ID(e.target.value)

            }}/>
           
            <div className="valid-feedback">
              Looks good!
            </div>
           
          </div>
          <div className="col-md-4">
            <label for="name" className="form-label">Name</label>
            <input type="text" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
             onChange={(e)=>{
                setname(e.target.value)

            }}/>
           
            <div className="valid-feedback">
              Looks good!
            </div>

          </div>
          <div className="col-md-4">
            <label for="type_ID" className="form-label">Type</label>
            <input type="text" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
            onChange={(e)=>{
                setType(e.target.value)

            }}/>
            
            <div className="valid-feedback">
              
            </div>

          </div>
          <div className="col-md-4">
            <label for="price" className="form-label">price</label>
            <input type="number" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
             onChange={(e)=>{
                setprice(e.target.value)

            }}/>
           
            <div className="valid-feedback">
              
            </div>

          </div>
          <div className="col-md-4">
            <label for="owner" className="form-label">owner</label>
              <input type="text" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
              onChange={(e)=>{
                setowner(e.target.value)
            }}/>
              <div id="validationServerUsernameFeedback" className="invalid-feedback">
                Enter owner's name
              </div>
          </div>

          <div className="col-md-6">
            <label for="location" className="form-label">City</label>
            <input type="text" className="form-control " id="validationServer03" aria-describedby="validationServer03Feedback" required
             onChange={(e)=>{
                setlocation(e.target.value)

            }}/>
           
            <div id="validationServer03Feedback" className="invalid-feedback">
              Please provide a valid city.
            </div>

          </div>
         
          <div className="col-md-3">
            <label for="phone" className="form-label">Phone   pattern:(xxxxxxxxxx)</label>
            <input type="number" className="form-control " id="validationServer05" pattern="^\d{3}\d{7}$" aria-describedby="validationServer05Feedback"  required
             onChange={(e)=>{
                setphone(e.target.value)

            }}/>
           
            <div id="validationServer05Feedback" className="invalid-feedback">
              Please provide a valid phone number.
            </div>

          </div>
          <div className="col-md-4">
            <label for="owner" className="form-label">image link</label>
              <input type="text" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
              onChange={(e)=>{
                setlink(e.target.value)
            }}/>
              <div id="validationServerUsernameFeedback" className="invalid-feedback">
                Enter img link name
              </div>
          </div>
         <br/>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
    </div> 
   </div>
    )
}