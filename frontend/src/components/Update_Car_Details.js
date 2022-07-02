import react, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Update_Car_Details(props) {

    const id = props.match.params.id;
    const [data, setData] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/car/${id}`).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    function updateData(event) {
        event.preventDefault();
        axios.put(`http://localhost:8000/car/update/${id}`, data).then(() => {
            alert("updated Successfully");

        }).catch((err) => {
            console.log(err);
        })
        window.location.href = "/admin/ground/car";
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    return (
        <div className="container">
            <center>
            <div className="row">
            <h1 className="text-dark">Update Form</h1>
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <form className="mt-3 text-light p-3 bg-dark" onSubmit={updateData}>
                        <div className="row">

                            <div className="form-group">
                                <label>ID</label>
                                <input type="text" name="Car_ID" className="form-control" value={data.Car_ID} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>CAR TYPE</label>
                                <select name="Car_Type" className="form-control" value={data.Car_Type} onChange={handleChange}>
                                    <option value="Selecrt one" >Select one</option>
                                    <option value="Car">Car</option>
                                    <option value="Airport Taxi">Airport Taxi</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>BRAND</label>
                                <select name="Brand" className="form-control" value={data.Brand} onChange={handleChange} >
                                    <option value="Select one">Select one</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="BMW">BMW</option>
                                    <option value="AUDI">AUDI</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>MODEL</label>
                                <input type="text" name="Model" className="form-control" value={data.Model} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>LOCATION</label>
                                <select name="Location" className="form-control" value={data.Location} onChange={handleChange}>
                                    <option value="Select one" >Select one</option>
                                    <option value="colombo 07">Colombo 07</option>
                                    <option value="matara">Matara</option>
                                    <option value="hambantota">Hambantota</option>
                                    <option value="galle">Galle</option>
                                    <option value="matara">Matara</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>COST PER KM</label>
                                <input type="text" name="Cost_per_KM" className="form-control" value={data.Cost_per_KM} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                        <label>Image</label>
                                        <input type="text" name="Img" id="Img" value={data.Img} className="form-control" onChange={handleChange}/>
                                    </div>
                            <div className="form-group">
                                <input type="submit" name="Update" value="Update" className="btn btn-success mt-4 form-control" />
                                <input type="button" name="Cancel" value="Cancel" className="btn btn-danger mt-4 form-control" />
                            </div>
                        </div>

                    </form>
                </div>
                <div className="col-lg-4"></div>
            </div>
            </center>
        </div>
    )

}