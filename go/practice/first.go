package practice

import "fmt"

// Add returns a string with the summation result.
func Add(num1 int, num2 int) string {
	// Return a string result that embeds the sum in a message.
	sum := formatResultMessage("The result is %v", num1+num2)
	return sum
}

// Sub returns a string of the subtraction result.
func Sub(num1 int, num2 int) string {
	res := formatResultMessage("The result is %v", num1-num2)
	return res
}

// Mult returns a string of the product result.
func Mult(num1 int, num2 int) string {
	res := formatResultMessage("The result is %v", num1*num2)
	return res
}

// Div returns a string of the division result.
func Div(num1 int, num2 int) string {
	res := formatResultMessage("The result is %v", num1/num2)
	return res
}

// formatResultMessage returns a string
// with the message and arithmetic result combined
func formatResultMessage(msg string, res int) string {
	format := fmt.Sprintf(msg, res)
	return format
}
