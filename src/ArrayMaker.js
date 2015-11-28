  var tab = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function arrayMaker(max) {
  if(isNaN(max)) {
    return null;
  } else if(max === 0) {
    return [];
  }else{
    var tab2 = []
      for(var i = 1; i <= max; i++){
            tab2.push(i);
            }
            return tab2;
          }
};
