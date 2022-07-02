import {API} from "../config"





export const getUsers = () => {
    return fetch(`${API}/users`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};




export const deleteUser = (userId) => {
    
    return fetch(`${API}/user/${userId}`, {
        
        method: "DELETE",
        
    })
        .then(response => {
            return response.json();

        })
        .catch(err => console.log(err));
        
};





export const getUser = (userId) =>{
    return fetch(`${API}/${userId}`,{
        method:"GET",
      
    })
    .then(response =>{
        return response.json();
    })
    .catch(err=>console.log(err));
};




export const updateUser = (userId,token,user)=>{
    return fetch(`${API}/admin/${userId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify(user)
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
};

