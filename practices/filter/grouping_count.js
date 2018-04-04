'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let obj = {};
  for (var i = 0; i < collection.length; i++) {
    var index = collection[i];
    if (!obj[index]) {
      obj[index] = 1;
    }else {
      obj[index]++;
    }
  }
  return obj;
}

module.exports = grouping_count;
