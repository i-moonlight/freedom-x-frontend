import axios from "axios";
import { URL } from "./Base";

class Withdraw {
  headers = {
    Authorization: `Bearer ca33ca5d-0be0-40c7-872d-1045b5625a4a`,
  };

  async withdraw(network, amount, address, symbol, setDone) {
    try {
      let { data } = await axios.post(
        `${URL}/withdrawals`,
        {
          network,
          amount,
          address,
          symbol,
        },
        {
          headers: this.headers,
        }
      );
      if (data.error) {
        setDone([false, data.error]);
        return;
      }
      setDone([true, "Success"]);

      setTimeout(() => {
        setDone([null]);
      }, 2000);
    } catch (err) {
      setDone([false, err.response.data.error]);
      setTimeout(() => {
        setDone([null]);
      }, 2000);
      console.log(err.response.data.error);
    }
  }
}

const withdrawObj = new Withdraw();
export { withdrawObj };
