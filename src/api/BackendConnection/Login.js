import axios from 'axios';
import { baseUrl } from '../keys';

class Login {
  login(email,password) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: `${baseUrl}/auth/signin`,
        data:{
          email:email,
          password:password
        }
      })
        .then((response) => resolve(response.data))
        .catch((e) => reject(e));
    });
  }
}

export default new Login();
