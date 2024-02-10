const token = localStorage.getItem("token");
var superuser = false;
var accounts = null;
var symbol = null;
document.getElementById("settle_result").style.display = "none";
document.getElementById("settle_failure").style.display = "none";
document.getElementById("betButton").style.display = "none";

fetch(`/users`, {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => jsonResponse(response))
  .then((data) => {
    if (data.user.superuser) {
      superuser = true;
      const header = document.createElement("th");
      header.textContent = "Settle";
      document.getElementById("thead_tr").appendChild(header);
      document.getElementById("betButton").style.display = "inline-block";
    }
  });

fetch(`/accounts`, {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const coinDropdown = document.getElementById("coin");
    data.accounts.forEach((account) => {
      const option = document.createElement("option");
      option.value = option.textContent = account.symbol;
      coinDropdown.appendChild(option);
    });
    accounts = data.accounts;
    coinDropdown.addEventListener("change", updateStats);
    updateStats();
    coinDropdown.addEventListener("change", updateBets);
    updateBets();
  })
  .catch((error) => {
    console.error("Error fetching account:", error);
  });

function updateStats() {
  const coinDropdown = document.getElementById("coin");
  const account = accounts.find(
    (account) => account.symbol == coinDropdown.value
  );
  symbol = coinDropdown.value;
  document.getElementById(
    "balance"
  ).textContent = `Balance: ${account.balance}`;
  document.getElementById(
    "unsettled_balance"
  ).textContent = `Open Bets: ${account.unsettled_balance}`;
  document.getElementById("pnl").textContent = `P&L: ${account.pnl}`;
  document.getElementById(
    "commission"
  ).textContent = `Commission: ${account.commission}`;
}

function updateBets() {
  fetch(`/bets?symbol=${symbol}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status == 401) {
        throw Error("Not logged in");
      }
      return response.json();
    })
    .then((data) => {
      const ledgerTBody = document.getElementById("liveBets");
      ledgerTBody.innerHTML = "";
      data.bets.forEach((entry) => {
        const ledgerRow = document.createElement("tr");
        ledgerRow.className = "bet " + `bet_${entry.status}`;
        const tdTimestamp = document.createElement("td");
        const tdSport = document.createElement("td");
        const tdEvent = document.createElement("td");
        const tdBet = document.createElement("td");
        const tdOdd = document.createElement("td");
        const tdStakePerc = document.createElement("td");
        const tdStake = document.createElement("td");
        tdTimestamp.textContent = entry.created_at;
        tdSport.textContent = entry.sport;
        tdEvent.textContent = entry.event;
        tdBet.textContent = entry.bet;
        tdOdd.textContent = entry.odd;
        tdStakePerc.textContent = (Number(entry.stake) * 100).toFixed(2);
        tdStake.textContent = entry.staked;
        ledgerRow.appendChild(tdTimestamp);
        ledgerRow.appendChild(tdSport);
        ledgerRow.appendChild(tdEvent);
        ledgerRow.appendChild(tdBet);
        ledgerRow.appendChild(tdOdd);
        ledgerRow.appendChild(tdStakePerc);
        ledgerRow.appendChild(tdStake);

        if (superuser && entry.status == "open") {
          const tdAction = document.createElement("td");
          tdAction.id = entry._id;
          const winButton = document.createElement("button");
          const loseButton = document.createElement("button");
          const voidButton = document.createElement("button");
          winButton.textContent = "WIN";
          loseButton.textContent = "LOSE";
          voidButton.textContent = "VOID";
          tdAction.appendChild(winButton);
          tdAction.appendChild(loseButton);
          tdAction.appendChild(voidButton);
          winButton.addEventListener("click", settleClicked);
          loseButton.addEventListener("click", settleClicked);
          voidButton.addEventListener("click", settleClicked);
          ledgerRow.appendChild(tdAction);
        }

        ledgerTBody.appendChild(ledgerRow);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function settleClicked(event) {
  const id = event.target.parentNode.id;
  const status = event.target.textContent;

  fetch(`/bets`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({ id, status }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 400) {
        return response.json().then((errorData) => {
          var settleResultElement = document.getElementById("settle_failure");
          settleResultElement.style.display = "inline-block";
          settleResultElement.textContent = `Error: ${errorData.error}`;
          throw new Error(`Failed to submit settle: ${errorData.error}`);
        });
      } else {
        throw new Error("Failed to submit bet");
      }
    })
    .then((data) => {
      var settleResultElement = document.getElementById("settle_result");
      settleResultElement.textContent = "Bet " + status;
      settleResultElement.style.display = "inline-block";
      document.getElementById(id).style.display = "none";
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

window.addEventListener("load", () => {
  const logoutButton = document.getElementById("logoutButton");

  logoutButton.addEventListener("click", () => {
    const token = localStorage.getItem("token");
    localStorage.removeItem("token");
    fetch(`/sessions`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    window.location.href = "login.html";
  });
});
