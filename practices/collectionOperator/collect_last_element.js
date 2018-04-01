'use strict';

function collect_last_element(collection) {
  //在这里写入代码 弹出集合最后一个元素
  var result;
  var index = collection.length - 1;
  result = collection[index];
  return result;
}

module.exports = collect_last_element;
