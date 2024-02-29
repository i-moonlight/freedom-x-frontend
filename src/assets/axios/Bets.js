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
      let balance = JSON.parse(window.localStorage.getItem("balance") || "{}");
      let { data } = await axios.get(
        `${URL}/bets?symbol=${balance.symbol ? balance.symbol : "BTC"}`,
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );

      setbetsState(data["bets"]);
      setbetsStateBackup(data["bets"]);
      setpageCount(Math.ceil(data["bets"].length / 10));
      console.log(data["bets"]);
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
