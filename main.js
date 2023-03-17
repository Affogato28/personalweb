 /*---------- js landing page ----------------*/ 
 let text = document.getElementById('text');
 let bird1 = document.getElementById('bird1');
 let bird2 = document.getElementById('bird2');
 let rocks = document.getElementById('earth');
 let forest = document.getElementById('stars');
 let header = document.getElementById('header');
 
 window.addEventListener('scroll', function() {
     let value = window.scrollY;
     
     text.style.top = 50 + value * -.1 + '%';
     bird2.style.top = value * -1.5 + 'px';
     bird2.style.left = value * 2 + 'px';
     bird1.style.top = value * -1.5 + 'px';
     bird1.style.left = value * -5 + 'px';
     earth.style.top = value * -.12 + 'px';
     stars.style.top = value * .25 + 'px';
     header.style.top = value * .5 + 'px';
 })
  /*---------- js albums page ---------------- 
 $(document).ready(function(){
 
     $('.buttons').click(function(){
 
         $(this).addClass('active').siblings().removeClass('active');
 
         var filter = $(this).attr('data-filter')
 
         if(filter == 'all'){
             $('.image').show(400);
         }else{
             $('.image').not('.'+filter).hide(200);
             $('.image').filter('.'+filter).show(400);
         }
 
  
 */     