import axios from "axios";
import { URL } from "./Base";

class Deposit {
  headers = {
    Authorization: `Bearer ca33ca5d-0be0-40c7-872d-1045b5625a4a`,
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
