import axios from "axios";
import { URL } from "./Base";
import { jwtDecode } from "jwt-decode";

class Settings {
  headers = {
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  };

  async getUser(setmultiplier, setmultiplierVal, setloading, setOuterData) {
    try {
      let { data } = await axios.get(`${URL}/users`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });
      setmultiplier(data["multipliers"]);
      setmultiplierVal(data["user"][["multiplier"]]);
      console.log(data);

      const decoded = jwtDecode(window.localStorage.getItem("token"));
      setOuterData({
        profilePicture: decoded["picture"],
      });
      console.log(decoded);

      setloading(false);
    } catch (err) {
      setloading(false);
      console.log(err.response.data.error);
    }
  }
  async patchUser(multiplierVal, setloading) {
    console.log(multiplierVal);
    try {
      let { data } = await axios.patch(
        `${URL}/users`,
        {
          multiplier: multiplierVal,
        },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
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
