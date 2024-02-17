import axios from "axios";
import { URL } from "./Base";

class Deposit {
  headers = {
    Authorization: `Bearer e4629009-0c5b-4b55-a76b-aad90fbb85c2`,
  };

  async Network(setnetworksState) {
    try {
      let { data } = await axios.get(`${URL}/networks`);

      console.log(data["networks"]);
      setnetworksState(data["networks"]);
    } catch (err) {
      console.log(err.response);
    }
  }

  async deposit(network, tx_hash, symbol, Errornotify) {
    try {
      let { data } = await axios.post(
        `${URL}/deposits`,
        {
          network,
          tx_hash,
          symbol,
        },
        {
          headers: this.headers,
        }
      );
      if (data.error) {
        Errornotify(data.error);
      }
      console.log(data);
    } catch (err) {
      Errornotify(err.response.data.error);
      console.log(err.response.data.error);
    }
  }
}

const depositObj = new Deposit();
export { depositObj };
