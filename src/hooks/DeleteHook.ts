import axios from "axios"

// interface DeleteBody {
//   id: number
// }


export const DeleteHook = async (URL: string): Promise<void> => {
  return axios.delete(`https://dummyjson.com/users/${URL}`)
  .then((response) => {
    console.log("Deleted", response);  
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}


