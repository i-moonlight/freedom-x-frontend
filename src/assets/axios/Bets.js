import axios from "axios";
import { URL } from "./Base";

class Bets {
  headers = {
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  };

  async getBets(
    setbetsState,
    setbetsStateBackup,
    setloading,
    setpageCount,
    setcurrentItems,
    itemOffset
  ) {
    try {
      let { data } = await axios.get(`${URL}/bets?symbol=BTC`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });

      setbetsState(data["bets"]);
      setbetsStateBackup(data["bets"]);
      setpageCount(Math.ceil(data["bets"].length / 10));

      const endOffset = itemOffset + 10;

      if (window.innerWidth < 500) {
        setcurrentItems(data["bets"]);
      } else {
        setcurrentItems(data["bets"].slice(itemOffset, endOffset));
      }

      setloading(false);
    } catch (err) {
      setloading(false);
    }
  }
}

const bets = new Bets();
export { bets };
