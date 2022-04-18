package practice

import "fmt"

// Add returns a string with the summation result.
func Add(num1 int, num2 int) string {
	// Return a string result that embeds the sum in a message.
	sum := formatResultMessage("The result is %v", num1+num2)
	return sum
}

func Sub(num1 int, num2 int) string {
	res := formatResultMessage("The result is %v", num1-num2)
	return res
}

func Mult(num1 int, num2 int) string {
	res := formatResultMessage("The result is %v", num1*num2)
	return res
}

func Div(num1 int, num2 int) string {
	res := formatResultMessage("The result is %v", num1/num2)
	return res
}

func formatResultMessage(msg string, res int) string {
	format := fmt.Sprintf(msg, res)
	return format
}
