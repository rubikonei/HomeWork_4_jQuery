
$(":button").click(function(){
   var res = 0;
   
   // radiobutton
   if($(".linkTest").eq(0).prop("checked")) {
      res++;
   }
   if($(".orderedList").eq(2).prop("checked")) {
      res++;
   }
   if($(".meta").eq(3).prop("checked")) {
      res++;
   }
   
   // first checkbox
   var tmp = 0;
   if($(".table").eq(0).prop("checked")) {
      tmp -= 0.5;
   }
   if($(".table").eq(1).prop("checked")) {
      tmp += 0.5;
   }
   if($(".table").eq(2).prop("checked")) {
      tmp -= 0.5;
   }
   if($(".table").eq(3).prop("checked")) {
      tmp += 0.5;
   }
   if(tmp > 0) {
      res += tmp;
   }
   
   // second checkbox
   var tmp = 0;
   if($(".formTest").eq(0).prop("checked")) {
      tmp += 0.5;
   }
   if($(".formTest").eq(1).prop("checked")) {
      tmp += 0.5;
   }
   if($(".formTest").eq(2).prop("checked")) {
      tmp -= 0.5;
   }
   if($(".formTest").eq(3).prop("checked")) {
      tmp -= 0.5;
   }
   if(tmp > 0) {
      res += tmp;
   }
   
   var percent = (res / 5) * 100;
   alert("Количество баллов: " + res + ", процент верных ответов: " + percent + "%");
});