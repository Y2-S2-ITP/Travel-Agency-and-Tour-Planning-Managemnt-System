import React, { Component } from 'react'
import "../style/adminDeletePackage.css";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

export default class adminDeletePackage extends Component {

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/tourPackage/get/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post
                });

                console.log(this.state.post);
            }
        });
    }

    onDelete = (id) => {
        axios.delete(`http://localhost:8000/tourPackage/deletePackage/${id}`).then((res) => {
            alert("Delete Successfully");
        })
    }
    render() {
        const id = this.props.match.params.id;
        return (
            <div className="delete">
                <div class="wrapper fadeInDown">
                    <div id="formContent">
                        <div class="fadeIn first">
                            <DeleteIcon style={{ fontSize: 80, color: "red" }} />
                            <h1>Delete Package !</h1>
                        </div>
                        <div id="formFooter">

                            <form action="/adminTourHome">
                                <button type="submit" class="btn btn-danger" onClick={() => this.onDelete(id)}>Delete</button>
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <button type="submit" class="btn btn-success">Cancel</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}
