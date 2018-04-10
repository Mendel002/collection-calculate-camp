'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  let len_a = collection_a.length;
  let len_b = collection_b.length;
  if(len_a != len_b){
    return false;
  }else {
    for(var i=0; i<len_a; i++){
      for(var j=0; j<len_b; j++){
        if(collection_a[i]===collection_b[j]){
          return true;
        }
      }
    }
  }
  
}

module.exports = compare_collections;


