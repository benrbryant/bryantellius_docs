package main

import (
	"fmt"
	"bryantellius.com/practice"
)

func main() {
	// Gets the sum
	result := practice.Mult(365, 24)
	fmt.Println(result)
	result = practice.Div(1000, 60)
	fmt.Println(result)
}
