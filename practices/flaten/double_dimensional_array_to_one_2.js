'use strict';

function double_to_one(collection) {

  //在这里写入代码
  collection = collection.concat.apply([],collection);
  let result = [...new Set(collection)];
  return result;
}

module.exports = double_to_one;
