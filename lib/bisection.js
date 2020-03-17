const math = require('mathjs');
const topost = require('./calculation/infixtopostfix');
const postfix = require('./calculation/postfixcalc');



exports.formula = (funct,a,b,tolerance)=>{
  var infix = topost.infixtopostfix(funct);
  var mid;

  do{
    mid=(a+b)/2;
    xD = postfix.postcalc(infix,mid); 
    if( xD<0){
      a=mid;
    }else{
      b=mid;
    }
  }while(Math.abs(a-b)>tolerance);
  
  return {
    x:mid,
    function:funct,
    tolerance:tolerance
  }
}