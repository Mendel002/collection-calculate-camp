'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  let result = new Array();
  for (var i = 0; i < collection.length; i++) {
    if (!(collection[i]%3)) {
      result.push(collection[i])
    }
  }
  return result;
}

module.exports = choose_multiples_of_three;
