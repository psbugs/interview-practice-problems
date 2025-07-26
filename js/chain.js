function chain(val) {
   return {
      add(num){
           val+= num;
           return this;
      },
      sub(n){
          val -= n
          return this;
      },
      exec(){
          return val;
      }
  };
}

let chainedResponse = chain(5).add(2).add(3).sub(7).exec();
console.log('response',chainedResponse);