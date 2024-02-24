import axios from "axios";
import { URL } from "./Base";

class Account {
  async loginUser(token, setloading, navigate) {
    try {
      let { data } = await axios.post(`${URL}/sessions`, {
        token: token,
      });

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

      let balance = JSON.parse(window.localStorage.getItem("balance") || "{}");
      if (balance.symbol) {
        setcurrentBalance(balance);
      } else {
        window.localStorage.setItem(
          "balance",
          JSON.stringify(data["accounts"][0])
        );
      }
    } catch (err) {
      setloading(false);
    }
  }

  async getHistory(
    setAccountHistory,
    sethistoryUtilArea,
    setloading,
    setpageCount,
    setcurrentItems,
    itemOffset
  ) {
    let balance = JSON.parse(window.localStorage.getItem("balance") || "{}");

    try {
      let { data } = await axios.get(`${URL}/ledger?symbol=${balance.symbol}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });
      setloading(false);
      sethistoryUtilArea(data["ledger"]);
      setAccountHistory(data["ledger"]);
      setpageCount(Math.ceil(data["ledger"].length / 10));
      const endOffset = itemOffset + 10;

      if (window.innerWidth < 500) {
        setcurrentItems(data["ledger"]);
      } else {
        setcurrentItems(data["ledger"].slice(itemOffset, endOffset));
      }
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
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
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
