let maxProfit = 0;
let minPrice = Infinity;

let prices = [7, 1, 5, 3, 6, 4];

for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
        minPrice = prices[i];
    } else {
        let profit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, profit)
    }
};


console.log(maxProfit);