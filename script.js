// Populate dropdown options from the country list
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const exchangeResult = document.getElementById("exchange-result");
const numberInput = document.getElementById("number");

// Add country options dynamically
for (let currency in countryList) {
  const optionFrom = document.createElement("option");
  const optionTo = document.createElement("option");

  optionFrom.value = currency;
  optionFrom.textContent = `${currency} - ${countryList[currency].name}`;
  optionTo.value = currency;
  optionTo.textContent = `${currency} - ${countryList[currency].name}`;

  fromCurrency.appendChild(optionFrom);
  toCurrency.appendChild(optionTo);
}

// Set default values
fromCurrency.value = "USD";
toCurrency.value = "INR";

// Fetch exchange rates and calculate conversion
document
  .getElementById("exchange-rate-btn")
  .addEventListener("click", async () => {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = numberInput.value;

    if (!amount || amount <= 0) {
      exchangeResult.textContent = "Please enter a valid amount.";
      return;
    }

    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${from}`
      );
      const data = await response.json();
      const rate = data.rates[to];

      if (rate) {
        const convertedAmount = (amount * rate).toFixed(2);
        exchangeResult.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
      } else {
        exchangeResult.textContent = "Conversion rate not available.";
      }
    } catch (error) {
      exchangeResult.textContent =
        "Error fetching exchange rate. Try again later.";
      console.error(error);
    }
  });
fromCurrency.addEventListener("change", () => {
  const selectedFromCode = countryList[fromCurrency.value].code;
  document.getElementById(
    "from-flag"
  ).src = `https://flagsapi.com/${selectedFromCode}/flat/64.png`;
});

toCurrency.addEventListener("change", () => {
  const selectedToCode = countryList[toCurrency.value].code;
  document.getElementById(
    "to-flag"
  ).src = `https://flagsapi.com/${selectedToCode}/flat/64.png`;
});
