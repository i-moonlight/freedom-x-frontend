import axios from "axios";
import { URL } from "./Base";

class Account {
  headers = {
    Authorization: `Bearer ca33ca5d-0be0-40c7-872d-1045b5625a4a`,
  };

  async getUserData(setuserAccount, setcurrentBalance) {
    try {
      let { data } = await axios.get(`${URL}/accounts`, {
        headers: this.headers,
      });

      console.log(data["accounts"][0]);
      setuserAccount(data["accounts"]);
      setcurrentBalance(data["accounts"][0]);
    } catch (err) {
      console.log(err.response);
    }
  }
}

const account = new Account();
export { account };
