// Given an array of prices, where each element represents the price of a stock on a particular day,
// I need to maximize the profit by buying and selling the stock.
package dynamic

// Use Kaden's algorithm
func StocksProfit(prices []int) int {
	// create current profit
	res := prices[0]
	// total profit
	total := 0

	for i := 1; i < len(prices); i++ {
		// find best day to byu
		if res > prices[i] {
			res = prices[i]
		}

		// calculate maximum possible profit
		total = max(total, prices[i]-res)
	}
	return total
}
