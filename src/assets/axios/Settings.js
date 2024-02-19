import axios from "axios";
import { URL } from "./Base";

class Settings {
  headers = {
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  };

  async getUser(setmultiplier, setmultiplierVal, setloading) {
    try {
      let { data } = await axios.get(`${URL}/users`, {
        headers: this.headers,
      });
      setmultiplier(data["multipliers"]);
      setmultiplierVal(data["user"][["multiplier"]]);
      console.log(data);
      setloading(false);
    } catch (err) {
      setloading(false);
      console.log(err.response.data.error);
    }
  }
  async patchUser(multiplierVal, setloading) {
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

      setloading(false);
    } catch (err) {
      setloading(false);
    }
  }
}

const setting = new Settings();
export { setting };
