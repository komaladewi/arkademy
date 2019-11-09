function sort_array(multilist) {
  var thirdHighest = multilist.slice([1,2,3,4,5,6]);

  // urutkan panjang
  thirdHighest.sort(function(a, b) {
     if (a.length > b.length) return 3;
     else if (a.length < b.length) return -3;
     return 0;
  });
  
  // urutkan character di array
  for(var i = 0; i < multilist.length; i++) {
   var item = multilist[i];
   item.sort(function(a, b) {
   	if(a.charCodeAt(0)> b.charCodeAt(0)) return 1;
    else if(a.charCodeAt(0)< b.charCodeAt(0))return -1;
    return 0;
   });
  }
  return thirdHighest;
}