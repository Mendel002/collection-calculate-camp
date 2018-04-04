'use strict';

function double_to_one(collection) {

  //在这里写入代码
  collection = collection.concat.apply([], collection);
  return collection;
}

module.exports = double_to_one;
