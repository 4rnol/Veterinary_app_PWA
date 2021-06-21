import axios from 'axios';
import { baseUrl } from '../keys';
import API from '../API';
class CrudVeterinary {
//   getUsers() {
//     return new Promise((resolve, reject) => {
//       axios({
//         method: 'GET',
//         url: `${baseUrl}/users`,
//       })
//         .then((response) => resolve(response.data))
//         .catch((e) => reject(e));
//     });
//   }
    createVeterinary(name,last_name,vet,email,phone,direction,url,password) {
        return new Promise((resolve, reject) => {
          axios({
            method: 'POST',
            url: `${baseUrl}/auth/signup`,
            data:{
                name:name,
                last_name:last_name,
                vet:vet,
                email:email,
                phone:phone,
                direction:direction,
                urlImg:url,
                password:password,
            }
          })
            .then((response) => resolve(response))
            .catch((e) => reject(e));
        });
      }
}

export async function getVeterinary(id) {
  try {
      const response = await API.get('/user/veterinary/'+id);
      return response.data;
  } catch (error) {
      console.warn(error)
  }
}

export default new CrudVeterinary();