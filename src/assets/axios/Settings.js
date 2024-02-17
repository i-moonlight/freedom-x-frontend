import axios from "axios";
import { URL } from "./Base";

class Settings {
  headers = {
    Authorization: `Bearer e4629009-0c5b-4b55-a76b-aad90fbb85c2`,
  };

  async getUser(setmultiplier, setmultiplierVal) {
    try {
      let { data } = await axios.get(`${URL}/users`, {
        headers: this.headers,
      });
      setmultiplier(data["multipliers"]);
      setmultiplierVal(data["user"][["multiplier"]]);
      console.log(data);
    } catch (err) {
      console.log(err.response.data.error);
    }
  }
  async patchUser(multiplierVal) {
    try {
      let { data } = await axios.patch(
        `${URL}/users`,
        {
          multiplier: multiplierVal,
        },
        {
          headers: this.headers,
        }
      );

      console.log(data);
    } catch (err) {
      console.log(err.response.data.error);
    }
  }
}

const setting = new Settings();
export { setting };
