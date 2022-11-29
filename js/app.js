$(function() {

    /* BURGER MENU */
    const burgBtn = $("#burger-btn");
    const headerAc = $("#header");
    const pageMask = $("#page");
    const mainBlock = $("#burger-ped");

    $(burgBtn).on("click", function(event) {
        event.preventDefault();
        
        if (headerAc.hasClass("active")) {
            headerAc.addClass("rollback");
            pageMask.removeClass("page__mask");
            burgBtn.removeClass("burger__btn-rotate");
            headerAc.removeClass("trans");

            setTimeout(function() {  
                burgBtn.removeClass("burger__btn-close");
            }, 500);
        
            setTimeout(function() {  
                mainBlock.removeClass("main__burger");
                headerAc.removeClass("rollback");
                headerAc.removeClass("active");
            }, 900);

        } else {
            mainBlock.addClass("main__burger");
            headerAc.addClass("active");

            setTimeout(function() { 
                burgBtn.addClass("burger__btn-close");
                headerAc.addClass("trans");
                pageMask.addClass("page__mask");
            }, 1);
        
            setTimeout(function() {  
                burgBtn.addClass("burger__btn-rotate");
            }, 500);
        }  
    }); 


    /* MODAL - модальные окна при отправке сообщения*/

    /* проверка заполненности полей и вывод модального окна */
    const openCall = $("#form__btn");

    openCall.on("click", function(event) {
        event.preventDefault();

        let formInput = document.querySelectorAll('.field-red');
        let $allField = 1;              /*считаем, что все поля запонены */

        formInput.forEach(function(input) {
             $(input).removeClass('input__red');
            if (input.value == '') {
                $(input).addClass('input__red');
                $allField = 0;         /* найдено не заполненое поле */
            }     
        });
        
        let $errorWindow = $('#modal_error');
        let $sendWindow = $('#modal_send');

        if ($allField === 0) {        /* если найдено незаполненое поле */
            $($errorWindow).addClass('show');
            $("body").addClass('no-scroll');
        } else {                     /* если все поля заполены */
            $($sendWindow).addClass('show');
            $("body").addClass('no-scroll');
            document.getElementById('order__form').reset();
        }

    });

    /* закрытие модального окна */
    const modalClose = $("[data-close]");

    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
       
    }); 

    /* закрытие модального окна по клику вне окна, т.е. по клику по маске */
    $(".modal").on("click", function(event) {
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
    }); 

    /* чтобы модальное окно не закрывалось при нажатии на самомо модальном окне */
    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    }); 

});


/* MODAL ORDER - Модальное окно кнопки "Заказать" */

const orderModal= $("#modal_order");

//открытие модального окна
    function show_modal(btn_num) { 
        orderModal.addClass('show');
        $("body").addClass('no-scroll');
     }

// нажатие на ссыку "Написать на Email" 
$("[data-scroll]").on("click", function(em) {
    em.preventDefault();

    //закртыие модального окна
    let $this = $(this);
    let modalParent = $this.parents('.modal');
   
    modalParent.removeClass('show');
    $("body").removeClass('no-scroll');

    //скролл страницы к форме отпарвки email
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    setTimeout(function() {  
        $("html, body").animate({
            scrollTop: elementOffset 
        }, 700);
    }, 200);

}); 


/* АНИМАЦИЯ ПРИ СКРОЛЕ СТРАНИЦЫ */

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
           const animItem = animItems[index];
           const animItemHeight = animItem.offsetHeight;
           const animItemOffset = offset(animItem).top;
           const animStart = 4;

           let animItemPoint = window.innerHeight - animItemHeight / animStart;
           if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
           }

           if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
           } else {
                if(!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('active');
                };    
           }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout (() => {
        animOnScroll();
    }, 300);
    
};