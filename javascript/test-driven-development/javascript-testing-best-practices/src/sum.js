function sum(...nums) {
  return nums.reduce((sum, n) => sum + n);
}

module.exports = sum;