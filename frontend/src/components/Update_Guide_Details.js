import react,{useState,useEffect} from 'react';
import axios from 'axios';


export default function UpdateGuideDetails(props) {

    const id = props.match.params.id;
    
    const [data, setData] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/guide/${id}`).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    function updateData(event) {
        event.preventDefault();
        axios.put(`http://localhost:8000/guide/update/${id}`, data).then(() => {
            alert("update Successfully");

        }).catch((err) => {
            console.log(err);
        })
        window.location.href = "/admin/ground/guide";
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }


    return (

        <div className="container" style={{marginTop:"50px"}}>
            <center>
                <h2>Car Details Update</h2>
            <form className="mt-5 text-light pt-2 pb-2 bg-dark" onSubmit={updateData}>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-4">

                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" onChange={handleChange} id="Full_Name" name="Full_Name" value={data.Full_Name} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input type="text" name="Age" onChange={handleChange} id="Age" value={data.Age} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="Address" onChange={handleChange} id="Address" value={data.Address} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="Email" onChange={handleChange} id="email" value={data.Email} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Fee</label>
                            <input type="text" name="Fee" onChange={handleChange} id="Fee" value={data.Fee} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Guide ID</label>
                            <input type="text" name="Guide_ID" onChange={handleChange} id="Guide_ID" value={data.Guide_ID} className="form-control"/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="form-group">
                            <label>Experience</label>
                            <select name="Experience" id="Experience" value={data.Experience} onChange={handleChange} className="form-control">
                                <option value="Select one" >Select one</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Expert">Expert</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Mobile Number</label>
                            <input type="mobile" name="Phone" onChange={handleChange} id="Phone" value={data.Phone} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Image</label>
                            <input type="text" name="Img" onChange={handleChange} id="Img" value={data.Img} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" name="insert" value="Update" className="btn btn-success mt-4 form-control" />
                            <input type="button" name="clear" value="Clear" className="btn btn-danger mt-4 form-control" />
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </form>
            </center>
        </div>

    );

}