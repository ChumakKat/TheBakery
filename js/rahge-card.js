/* Активация описания карточек товаров*/ 

  if ( $(window).width() < 768 ) {
    function show_shade(cart_name)
     {
      let cardShad = document.getElementById(cart_name);
      cardShad.classList.toggle("active");
     }
  }

