var a, b;
var operation;
var result = $("input");

function solution (firstArgument, secondArgument, numberOperation) {
   firstArgumentNumber = +firstArgument;
   secondArgumentNumber = +secondArgument;
   switch(numberOperation) {
      case "+":
         return firstArgumentNumber + secondArgumentNumber;
         break;
      case "-":
         return firstArgumentNumber - secondArgumentNumber;
         break;
      case "*":
         return firstArgumentNumber * secondArgumentNumber;
         break;
      case "/":
         if (secondArgumentNumber == 0) {
            return "division by zero";
         }
         else {
            return firstArgumentNumber / secondArgumentNumber;
         }
      default:
         return "unexpected token";
   }
}

$(".numbers").click(function() {
   var value = $(this).val();
   result.val(function (index, curValue) {
      if (curValue != "" && isNaN(curValue)) {
         curValue = "";
         return curValue + value;
      }
      else {
         return curValue + value;
      }
   });
});

$(".operation").click(function() {
   var value = $(this).val();
   a = result.val();
   result.val("");
   result.val(value);
   operation = result.val();
});

$(".plusmn").click(function() {
   result.val(result.val() * -1);
});

$(".clear").click(function() {
   result.val("");
});

$(".point").click(function() {
   result.val(function (index, curValue){
      return curValue + ".";
   });
});

$(".equally").click(function() {
   b = result.val();
   result.val(solution(a, b, operation));
});