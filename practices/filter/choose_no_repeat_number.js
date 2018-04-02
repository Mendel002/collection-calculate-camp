'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  let result = new Array();
  for (var i = 0; i < collection.length; i++) {
    for (var j = i+1; j < collection.length; j++) {
      if (collection[j]===collection[i]) {
        j = ++i;
      }
    }
    result.push(collection[i]);
  }
  return result;
}

module.exports = choose_no_repeat_number;
