const removeFromArray = function(array, ...args) {
  let newArray = [...array]

  args.forEach(arg => {
    newArray = newArray.filter(item => item !== arg)
  })

  return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
