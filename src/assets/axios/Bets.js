import axios from "axios";
import { URL } from "./Base";

class Bets {
  headers = {
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  };

  async getBets(setbetsState, setbetsStateBackup, setloading) {
    try {
      let { data } = await axios.get(`${URL}/bets?symbol=BTC`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });
      setbetsState(data["bets"]);
      setbetsStateBackup(data["bets"]);
      setloading(false);
    } catch (err) {
      setloading(false);
    }
  }
}

const bets = new Bets();
export { bets };
