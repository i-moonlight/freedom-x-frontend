import axios from "axios";
import { URL } from "./Base";

class Account {
  subtractMonths(date, months) {
    date.setMonth(date.getMonth() - months);

    return date;
  }

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
  async getBetsData(setloading, settotalbets, accountstat) {
    try {
      let currentdata = new Date();
      let updatedata;
      let monthupdate;
      let yearUpdate;

      if (accountstat == "This month") {
        monthupdate = currentdata.getMonth() + 1;
        yearUpdate = currentdata.getFullYear();
      }

      if (accountstat == "last 3 months") {
        updatedata = this.subtractMonths(currentdata, 3);
        monthupdate = updatedata.getMonth() + 1;
        yearUpdate = updatedata.getFullYear();
      }

      if (accountstat == "Last 6 months") {
        updatedata = this.subtractMonths(currentdata, 6);
        monthupdate = updatedata.getMonth() + 1;
        yearUpdate = updatedata.getFullYear();
      }

      if (accountstat == "Last year") {
        updatedata = this.subtractMonths(currentdata, 12);
        monthupdate = updatedata.getMonth() + 1;
        yearUpdate = updatedata.getFullYear();
      }

      if (accountstat == "Last 5 Years") {
        updatedata = this.subtractMonths(currentdata, 60);
        monthupdate = updatedata.getMonth() + 1;
        yearUpdate = updatedata.getFullYear();
      }
      let balance = JSON.parse(window.localStorage.getItem("balance") || "{}");
      let { data } = await axios.get(
        `${URL}/bets?symbol=${balance.symbol}&start=${yearUpdate}-${
          monthupdate > 9 ? monthupdate : `0${monthupdate}`
        }-01`,
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );
      settotalbets(data["bets"].length);
      console.log(data);
      setloading(false);
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

  async getAccountMoreDetails(setchartsData, setloading, accountstat) {
    let objectInitXAxis = [];
    let objectInitYAxis = [];
    let balance = JSON.parse(window.localStorage.getItem("balance") || "{}");

    let currentdata = new Date();
    let updatedata;
    let monthupdate;
    let yearUpdate;

    if (accountstat == "This month") {
      monthupdate = currentdata.getMonth() + 1;
      yearUpdate = currentdata.getFullYear();
    }

    if (accountstat == "last 3 months") {
      updatedata = this.subtractMonths(currentdata, 3);
      monthupdate = updatedata.getMonth() + 1;
      yearUpdate = updatedata.getFullYear();
    }

    if (accountstat == "Last 6 months") {
      updatedata = this.subtractMonths(currentdata, 6);
      monthupdate = updatedata.getMonth() + 1;
      yearUpdate = updatedata.getFullYear();
    }

    if (accountstat == "Last year") {
      updatedata = this.subtractMonths(currentdata, 12);
      monthupdate = updatedata.getMonth() + 1;
      yearUpdate = updatedata.getFullYear();
    }

    if (accountstat == "Last 5 Years") {
      updatedata = this.subtractMonths(currentdata, 60);
      monthupdate = updatedata.getMonth() + 1;
      yearUpdate = updatedata.getFullYear();
    }

    try {
      let { data } = await axios.get(
        `${URL}/accounts/cumulative_pnl?symbol=${
          balance.symbol
        }&start=${yearUpdate}-${
          monthupdate > 9 ? monthupdate : `0${monthupdate}`
        }-01`,
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );
      console.log(data);
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
