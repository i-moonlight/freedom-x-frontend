import axios from "axios";
import { URL } from "./Base";

class Bets {
  headers = {
    Authorization: `Bearer ca33ca5d-0be0-40c7-872d-1045b5625a4a`,
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
