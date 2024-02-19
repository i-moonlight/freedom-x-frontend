import axios from "axios";
import { URL } from "./Base";

class Account {
  async loginUser(token, setloading, navigate) {
    try {
      let { data } = await axios.post(`${URL}/sessions`, {
        token: token,
      });

      console.log(data);
      window.localStorage.setItem("token", data["token"]);

      setloading(false);

      navigate("/bet");
    } catch (err) {
      setloading(false);
    }
  }

  async getUserData(setuserAccount, setcurrentBalance, setloading) {
    try {
      let { data } = await axios.get(`${URL}/accounts`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });
      setloading(false);
      setuserAccount(data["accounts"]);
      setcurrentBalance(data["accounts"][0]);
    } catch (err) {
      setloading(false);
    }
  }

  async getHistory(setAccountHistory, sethistoryUtilArea, setloading) {
    try {
      let { data } = await axios.get(`${URL}/ledger?symbol=USDT`, {
        headers: this.headers,
      });
      setloading(false);
      sethistoryUtilArea(data["ledger"]);
      setAccountHistory(data["ledger"]);
    } catch (err) {
      setloading(false);
    }
  }

  async getAccountMoreDetails(setchartsData, setloading) {
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

      setloading(false);
      setchartsData({ YAxis: objectInitYAxis, XAxis: objectInitXAxis });
    } catch (err) {
      setloading(false);
    }
  }
}

const account = new Account();
export { account };
