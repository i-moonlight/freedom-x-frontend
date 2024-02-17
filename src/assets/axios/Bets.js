import axios from "axios";
import { URL } from "./Base";

class Bets {
  headers = {
    Authorization: `Bearer e4629009-0c5b-4b55-a76b-aad90fbb85c2`,
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
