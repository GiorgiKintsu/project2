
import axios from "axios"

export const addUser = async (body:unknown): Promise<void> => {
    return axios.post(`https://dummyjson.com/users/add`, body)
    .then((response) => {
        console.log("add new user", response);  
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}

// export const addUser = async (URL: string, body:unknown
// ): Promise<void> => {
//     const token = JSON.parse(localStorage.getItem("token")|| "") 
    
//     return axios.post(`https://dummyjson.com/${URL}`, body,{headers:{
//         'content-type': 'application/json',
//         "Authorization":`Bearer ${token?.data?.token} `
//     }})
 
    
// }