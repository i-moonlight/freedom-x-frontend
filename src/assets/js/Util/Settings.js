const token = localStorage.getItem("token");
document.getElementById("settings_result").style.display = "none";
document.getElementById("settings_failure").style.display = "none";

document.addEventListener("DOMContentLoaded", function () {
  fetchUser();
});

// Function to fetch user and fill the dropdown
function fetchUser() {
  fetch(`/users`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => jsonResponse(response))
    .then((json) => {
      const multiplierDropdown = document.getElementById("multiplier");

      // Clear existing options
      multiplierDropdown.innerHTML = "";

      // Add options based on the fetched multiplier
      json.multipliers.forEach((multiplier) => {
        const option = document.createElement("option");
        option.value = multiplier;
        option.textContent = multiplier + "x";
        multiplierDropdown.appendChild(option);

        if (multiplier === json.user.multiplier) {
          option.selected = true;
        }
      });
    })
    .catch((error) => console.error("Error fetching user:", error));
}

// Handle form submission
document
  .getElementById("submit_settings")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const multiplier = document.getElementById("multiplier").value;
    document.getElementById("settings_failure").innerHTML = "";
    document.getElementById("settings_result").innerHTML = "";

    fetch(`/users`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ multiplier }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 400) {
          return response.json().then((errorData) => {
            // Display the error message in the settings_result element
            var settingsResultElement =
              document.getElementById("settings_failure");
            settingsResultElement.style.display = "inline-block";
            settingsResultElement.textContent = `Error: ${errorData.error}`;
            throw new Error(`Failed to submit settings: ${errorData.error}`);
          });
        } else {
          throw new Error("Failed to submit settings");
        }
      })
      .then((data) => {
        var settingsResultElement = document.getElementById("settings_result");
        settingsResultElement.textContent = "Settings updated";
        settingsResultElement.style.display = "inline-block";
        document.getElementById("submit").style.display = "none";
      })
      .catch((error) => {
        console.error("Error submitting settings:", error);
        // Optionally, show an error message to the user
      });
  });
