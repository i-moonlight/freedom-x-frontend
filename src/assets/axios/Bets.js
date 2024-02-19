import axios from "axios";
import { URL } from "./Base";

class Bets {
  headers = {
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  };

  async getBets(setbetsState, setbetsStateBackup) {
    try {
      let { data } = await axios.get(`${URL}/bets?symbol=BTC`, {
        headers: this.headers,
      });
      setbetsState(data["bets"]);
      setbetsStateBackup(data["bets"]);

      console.log(data);
    } catch (err) {
      console.log(err.response);
    }
  }
}

const bets = new Bets();
export { bets };
