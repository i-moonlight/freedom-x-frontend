import axios from "axios";
import { URL } from "./Base";

class Deposit {
  headers = {
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  };

  async Network(setnetworksState, setloading) {
    try {
      let { data } = await axios.get(`${URL}/networks`);

      setloading(false);
      setnetworksState(data["networks"]);
    } catch (err) {
      setloading(false);
    }
  }

  async deposit(network, tx_hash, symbol, Errornotify, setloading) {
    try {
      let { data } = await axios.post(
        `${URL}/deposits`,
        {
          network,
          tx_hash,
          symbol,
        },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );
      if (data.error) {
        Errornotify(data.error);
      }

      setloading(false);
      console.log(data);
    } catch (err) {
      setloading(false);
      Errornotify(err.response.data.error);
      console.log(err.response.data.error);
    }
  }
}

const depositObj = new Deposit();
export { depositObj };
