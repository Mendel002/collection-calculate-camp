'use strict';
var number_map_to_word = function(collection){
  return collection.map(item => String.fromCharCode(96 + parseInt(item)))
};

module.exports = number_map_to_word;
