'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码

  let unionSet = new Set([...collection_a, ...collection_b]);
  let result = Array.from(unionSet);
  return result;
}

module.exports = get_union;
