   var acc = document.getElementsByClassName("accordion");
   var i;

   for (i = 0; i < acc.length; i++) {
       acc[i].addEventListener("click", function () {
           this.classList.toggle("active");
           var panel = this.nextElementSibling;
           if (panel.style.maxHeight) {
               panel.style.maxHeight = null;
           } else {
               panel.style.maxHeight = panel.scrollHeight + "px";
           }
       });
   } <

   <
   script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js" > < /script> <
   script >
       $(document).ready(function () {
           $("button").click(function () {
               $("#div1").load("d-bo.txt");
           });
       }); <
