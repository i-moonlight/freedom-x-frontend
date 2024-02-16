document.addEventListener("DOMContentLoaded", function () {
  fetchAccounts();
  fetchNetworks();
});

document.getElementById("withdraw_result").style.display = "none";
document.getElementById("withdraw_failure").style.display = "none";
const symbol = localStorage.getItem("symbol");
const token = localStorage.getItem("token");
document.getElementById(
  "balance"
).textContent = `Balance: ${balance} ${symbol}`;

function fetchAccounts() {
  fetch(`/accounts`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => jsonResponse(response))
    .then((json) => {
      const coinDropdown = document.getElementById("coin");
      json.accounts.forEach((account) => {
        const option = document.createElement("option");
        option.value = account.symbol;
        option.textContent = account.balance + " " + account.symbol;
        coinDropdown.appendChild(option);
      });
      coinDropdown.addEventListener("change", fetchNetworks);
      updateBalance();
    })
    .catch((error) => console.error("Error fetching accounts:", error));
}

// Function to fetch networks and fill the dropdown
function fetchNetworks() {
  fetch(`/networks`)
    .then((response) => response.json())
    .then((json) => {
      const networkDropdown = document.getElementById("network");
      const coinDropdown = document.getElementById("coin");

      // Clear existing options
      networkDropdown.innerHTML = "";

      // Add options based on the fetched networks
      json.networks.forEach((network) => {
        if (isSymbolInNetwork(json.networks, coinDropdown.value, network._id)) {
          const option = document.createElement("option");
          option.value = network._id;
          option.textContent = network._id;
          networkDropdown.appendChild(option);
        }
      });

      // Add event listener for the change event on the network dropdown
      networkDropdown.addEventListener("change", function () {
        updateWithdrawalFee(json.networks);
      });
      updateWithdrawalFee(json.networks);
    })
    .catch((error) => console.error("Error fetching networks:", error));
}

function isSymbolInNetwork(networks, symbolId, networkId) {
  const network = networks.find((network) => network._id === networkId);
  return network.symbols.some((symbol) => symbol.id === symbolId);
}

function updateWithdrawalFee(networks) {
  const selectedNetwork = document.getElementById("network").value;
  const selectedCoin = document.getElementById("coin").value;
  const selectedNetworkData = networks.find(
    (network) => network._id === selectedNetwork
  );
  const selectedSymbolData = selectedNetworkData.symbols.find(
    (symbol) => symbol.id === selectedCoin
  );

  const feeContainer = document.getElementById("fee");
  feeContainer.innerHTML = "";
  const feeElement = document.createElement("p");
  feeElement.textContent = selectedSymbolData.fee + " " + selectedCoin;
  feeContainer.appendChild(feeElement);
}

// Handle form submission
document
  .getElementById("submit_withdraw")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const network = document.getElementById("network").value;
    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;
    const token = localStorage.getItem("token");
    document.getElementById("withdraw_failure").style.display = "none";
    document.getElementById("withdraw_result").style.display = "none";

    // POST data to /withdrawals
    fetch(`/withdrawals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ network, amount, address, symbol }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 400) {
          return response.json().then((errorData) => {
            // Display the error message in the withdraw element
            var withdrawalResultElement =
              document.getElementById("withdraw_failure");
            withdrawalResultElement.style.display = "inline-block";
            withdrawalResultElement.textContent = `Error: ${errorData.error}`;
            throw new Error(`Failed to submit withdrawal: ${errorData.error}`);
          });
        } else {
          throw new Error("Failed to submit withdrawal");
        }
      })
      .then((data) => {
        console.log("Withdrawal submitted successfully:", data);
        var withdrawResultElement = document.getElementById("withdraw_result");
        withdrawResultElement.textContent = "Withdrawal requested";
        withdrawResultElement.style.display = "inline-block";
      })
      .catch((error) => {
        console.error("Error submitting withdrawal:", error);
        // Optionally, show an error message to the user
      });
  });
