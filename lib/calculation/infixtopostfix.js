var opstack = "(";
var poststack = "";

exports.infixtopostfix = (x)=>{
  for(i=0 ; i<x.length; i++){
    if(x[i]!=' '){
      if (x[i]=='('){
        opstack = opstack + x[i];
      }else if(x[i]=='^'||x[i]=='/'||x[i]=='*'||x[i]=='+'||x[i]=='-'){
        oppush(x[i]);
      }else if(x[i]==')'){
        popopstk();
      }else{
        postpush(x[i]);
      }
    }
  }
  popopstk();
  return poststack; 
}

// For popopstk function in the main

function popopstk(){
  temp = popopstack();
  while(temp!='('){
    postpush(temp);
    temp = popopstack();
  }
}

function popopstack(){
  opstack = reverseString(opstack);
  temp = opstack[0];
  opstack = opstack.replace(temp,"");
  opstack = reverseString(opstack);
  return temp;
}

// For postpush i.e. pushing into the post stack 

function postpush(operand){
  poststack = poststack + operand;
}

//For pushing to opstack i.e. oppush

function oppush(operator){
  //precedence check garna paryo

  // while((precedence(opstack[opstack.length-1])>=precedence(operator))){
  
  while (determineOperatorPrec(opstack[opstack.length-1],operator)){
    opstack = reverseString(opstack);
    temp = opstack[0];
    opstack = opstack.replace(temp,"");
    opstack = reverseString(opstack);
    postpush(temp);
  }
  // post ma push garne
  // opstkpush(operator);
  opstack = opstack + operator;
}


//For checking the precedence of the operator

function determineOperatorPrec(x,y){
  if(y=='(') return 1;
  let prec = ['/','+','+','-']
  return prec.indexOf(x)-prec.indexOf(y)
}

// precedence(operator){
//   switch(operator)
//   {
//       case '^':
//         return 3;
//       case '*':
//         return 2;
//       case '/':
//         return 2;
//       case '+':
//         return 1;
//       case '-':
//         return 1;
//       default:
//         return 0;
//   }
// }

// Reversing the string

function reverseString(str) {
  return str.split("").reverse().join("");
}
