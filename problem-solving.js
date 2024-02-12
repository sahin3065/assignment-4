function calculateMoney(ticketSale) {
     if(ticketSale < 0){
          return 'You have to sale ticket'
     }

     const perTicket = 120;
     const guardCost = 500;
     const staffCost = 50 * 8;
     const totalCost = guardCost + staffCost;
     const totalIncome = perTicket * ticketSale;
     const Profit = totalIncome - totalCost;

     return Profit;

}

function checkName(name) {
     if (typeof name !== 'string') {
                   return "invalid";
                }

       let lastLetter = name.charAt(name.length - 1).toLowerCase() ;
          if (['a', 'y', 'i', 'e', 'o', 'u', 'w'].includes(lastLetter)) {
               return 'Good Name';
           } else {
               return 'Bad Name';  
           }    
} 
  
function deleteInvalids(array) {
     if(!Array.isArray(array)){
          return 'Please provide an array'; 
     }
     const validNumbers = [];
     for(let i = 0; i < array.length; i++){
         if(typeof array[i] === 'number'&& !isNaN(array[i])){
             validNumbers.push(array[i]);
         }
     }
     return validNumbers;
}

 function password(obj) {
         if(!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName') || isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4){

           return 'invalid';
         }

        const websiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
         const password = websiteName + '#' + obj.name + '@' + obj.birthYear;
       
        return password;
   }
 

function monthlySavings(arr , livingCost) {
  if(!Array.isArray(arr)){
    return 'Invalid input';
  }
  if (typeof livingCost !== 'number') {
           return 'Invalid input';
        }
  const totalIncome = arr.reduce((acc, curr) => {
      if(curr >=3000){
          acc += (curr - (curr * 0.2));
      }
      else {
        acc += curr;
      }
      return acc;
  }, 0);
    
     const savings = totalIncome - livingCost;

     if(savings <0){
      return 'earn more';
     }else{
      return savings;
     }
  }
   
  

      

