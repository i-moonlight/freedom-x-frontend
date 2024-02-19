import axios from "axios";
import { URL } from "./Base";

class Account {
  headers = {
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  };

  async getUserData(setuserAccount, setcurrentBalance) {
    try {
      let { data } = await axios.get(`${URL}/accounts`, {
        headers: this.headers,
      });

      console.log(data["accounts"]);
      setuserAccount(data["accounts"]);
      setcurrentBalance(data["accounts"][0]);
    } catch (err) {
      console.log(err.response);
    }
  }

  async getHistory(setAccountHistory, sethistoryUtilArea) {
    try {
      let { data } = await axios.get(`${URL}/ledger?symbol=USDT`, {
        headers: this.headers,
      });
      sethistoryUtilArea(data["ledger"]);
      setAccountHistory(data["ledger"]);
    } catch (err) {
      console.log(err.response);
    }
  }

  async getAccountMoreDetails(setchartsData) {
    let objectInitXAxis = [];
    let objectInitYAxis = [];

    try {
      let { data } = await axios.get(
        `${URL}/accounts/cumulative_pnl?symbol=USDT`,
        {
          headers: this.headers,
        }
      );

      data["cumulative_pnls"].forEach((EachObj) => {
        for (const [key, value] of Object.entries(EachObj)) {
          objectInitXAxis.push(key);
          objectInitYAxis.push(Number(value).toFixed(3));
        }
      });

      console.log({ YAxis: objectInitYAxis, XAxis: objectInitXAxis });

      setchartsData({ YAxis: objectInitYAxis, XAxis: objectInitXAxis });
    } catch (err) {
      console.log(err.response);
    }
  }
}

const account = new Account();
export { account };
