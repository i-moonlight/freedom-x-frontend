document.addEventListener("DOMContentLoaded", function () {
  fetchNetworks();
});

document.getElementById("deposit_result").style.display = "none";
document.getElementById("deposit_failure").style.display = "none";

// Function to fetch networks and fill the dropdown
function fetchNetworks() {
  fetch(`/networks`)
    .then((response) => jsonResponse(response))
    .then((json) => {
      const networkDropdown = document.getElementById("network");

      // Clear existing options
      networkDropdown.innerHTML = "";

      // Add options based on the fetched networks
      json.networks.forEach((network) => {
        const option = document.createElement("option");
        option.value = network._id;
        option.textContent = network._id;
        networkDropdown.appendChild(option);
      });

      // Add event listener for the change event on the network dropdown
      networkDropdown.addEventListener("change", function () {
        updateSupportedAssetsAndAddress(json.networks);
      });
      updateSupportedAssetsAndAddress(json.networks);
    })
    .catch((error) => console.error("Error fetching networks:", error));
}

function updateSupportedAssetsAndAddress(networks) {
  const selectedNetwork = document.getElementById("network").value;
  const selectedNetworkData = networks.find(
    (network) => network._id === selectedNetwork
  );

  const supportedAssetsContainer = document.getElementById("supportedAssets");
  const supportedAssetsList = document.createElement("ul");
  supportedAssetsList.id = `supportedAssets_${selectedNetwork}`;

  // Clear existing content
  supportedAssetsContainer.innerHTML = "";

  // Add supported assets to the list
  selectedNetworkData.symbols.forEach((asset) => {
    const listItem = document.createElement("li");
    listItem.id = "symbol";
    listItem.textContent = asset.id;
    supportedAssetsList.appendChild(listItem);
  });

  supportedAssetsContainer.appendChild(supportedAssetsList);

  // Clear existing content
  const ourAddressContainer = document.getElementById("ourAddress");
  const ourAddressList = document.createElement("ul");
  ourAddressContainer.innerHTML = "";
  const listItem = document.createElement("li");
  listItem.textContent = selectedNetworkData.our_addresses[0];
  ourAddressList.appendChild(listItem);
  ourAddressContainer.appendChild(ourAddressList);
}

// Handle form submission
document
  .getElementById("submit_deposit")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const network = document.getElementById("network").value;
    const tx_hash = document.getElementById("txHash").value;
    const symbol = document.getElementById("symbol").textContent;
    const token = localStorage.getItem("token");
    document.getElementById("deposit_failure").innerHTML = "";
    document.getElementById("deposit_result").innerHTML = "";
    document.getElementById("deposit_failure").style.display = "none";
    document.getElementById("deposit_result").style.display = "none";

    // POST data to /deposits
    fetch(`/deposits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ network, tx_hash, symbol }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 400) {
          return response.json().then((errorData) => {
            // Display the error message in the deposit_result element
            var depositResultElement =
              document.getElementById("deposit_failure");
            depositResultElement.style.display = "inline-block";
            depositResultElement.textContent = `Error: ${errorData.error}`;
            throw new Error(`Failed to submit deposit: ${errorData.error}`);
          });
        } else {
          throw new Error("Failed to submit deposit");
        }
      })
      .then((data) => {
        console.log("Deposit submitted successfully:", data);
        var depositResultElement = document.getElementById("deposit_result");
        depositResultElement.textContent = "Deposit added";
        depositResultElement.style.display = "inline-block";
        document.getElementById("submit").style.display = "none";
      })
      .catch((error) => {
        console.error("Error submitting deposit:", error);
        // Optionally, show an error message to the user
      });
  });
