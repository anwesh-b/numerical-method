
exports.postcalc=(m,num)=>{
  var result = []
  m = m.split("");
  for(var x in m){
    if(m[x]=='e'){
      m[x]=2.71828
    }else if(m[x]=='x'){
      m[x]=num;
    }
    if(m[x]=='^'||m[x]=='*'||m[x]=='/'||m[x]=='+'||m[x]=='-'){
      calculate(result, m[x]);
    }else{
      m[x]=parseFloat(m[x]);
      result.push(m[x]);
    }
  }
  return result; 
}

// For the calculation process
function calculate(result, operator){
  if(operator=='^'){
    temp = Math.pow(result[result.length-2] , result[result.length-1]);
  }else if(operator=='*'){
    temp = result[result.length-2] * result[result.length-1];
  }else if(operator=='/'){
    temp = result[result.length-2] / result[result.length-1];
  }else if(operator=='+'){
    temp = result[result.length-2] + result[result.length-1];
  }else if(operator=='-'){
    temp = result[result.length-2] - result[result.length-1];
  }  
  
  result.pop();
  result.pop();
  result.push(temp);
}