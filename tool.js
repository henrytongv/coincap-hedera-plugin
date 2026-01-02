// Use the CoinCap API to get the current price in USD of one HBAR
export async function getHBARPriceInUSD() {
  try {
    const response = await fetch("https://rest.coincap.io/v3/price/bysymbol/hbar", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${process.env.COINCAP_BEARER_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();

    // Extract first value from the "data" array
    const firstValueAsString = json.data[0];

    const result = Number(firstValueAsString);

    console.log(`_.._current HBAR_price in USD according to CoinCap is ${result}`);

    return result;
  } catch (error) {
    console.error("Error fetching CoinCap data:", error.message);
  }
}