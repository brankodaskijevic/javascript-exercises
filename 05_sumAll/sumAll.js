const sumAll = function(start, end) {
  let startNum = Number(start)
  let endNum = Number(end)
  let total = 0

  if (startNum < 0 || endNum < 0) return "ERROR"
  if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR"

  if (startNum > endNum) {
    const temp = startNum
    startNum = endNum
    endNum = temp
  }

  for (let i = startNum; i <= endNum; i++) {
    total += i
  }

  return total
};

// Do not edit below this line
module.exports = sumAll;
