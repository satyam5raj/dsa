// Buy and Sell Stock for Max Profit
// You're given an array where each element represents the price of a stock on day i.
// Your task is to find the maximum profit you can achieve by:

// Buying the stock once

// Selling the stock once after you buy it

// Constraints:
// You must buy before you sell

// You can only buy/sell once

// Return 0 if no profit is possible

function maxProfitBruteForce(prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}

function maxProfitOptimised(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price; // found a better buy price
    } else {
      let profit = price - minPrice; // selling today
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}

function maxProfit(prices) {
  let minPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    profit = Math.max(profit, prices[i] - minPrice);
  }

  return profit;
}
