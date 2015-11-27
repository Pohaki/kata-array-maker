  var tab = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  var tab2 = new Array();
function arrayMaker(max) {
  if(isNaN(max)) {
    return null;
  } else if(max === 0) {
    return [];
  }else if (max > 1){
      for(var i = 0; i < 1; i++){
        if (tab[i] === 1){
          for (var j = 0; j < max; j++){
            tab2.push(tab[j]);
          }
        }
        console.log(tab2);
        return tab2;
      }
    }
};
