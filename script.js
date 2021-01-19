document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  //Или с jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });