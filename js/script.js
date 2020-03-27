$(document).ready(function () {
//dialog close
    $('.dialog-close').click(function(e){
         $('.dialog-body').fadeOut('200', function(){
             $('.dialog').fadeOut('200');
    });
});
//dialog open
    $('.dialog-open').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href')
         $('.dialog').fadeIn('200', function(){
           $(target).fadeIn('200');
    });
});


//nav toggle
    $('#nav-toggle').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active');
    });

    //VARIÁVEIS
    var nav = $('.header-nav'),
        navHeight = nav.outerHeight(), //pegando altura da nav( classe do header menu)
        sections = $('.section');

        //SCROLl

    $(window).on('scroll', function () {
        var sTop = $(this).scrollTop(); //verifica se ja rolei

        //fixando header na rolagem
        if (sTop > navHeight) { // ta pergutando se o scroll foi maior que o tamanho do header
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }

        // MARCANDO MENU SCROLL CONFORME ANCORAGEM (ID), mas primeiro verifico se não ta no home pois ele não é section
        if (sTop == 0) {
            nav.find('a').removeClass('active'); 
            nav.find('a[href="#home"]').addClass('active');
        } else {
            sections.each(function () { //vai passar por cada uma das funções
                var top = $(this).offset().top - navHeight; //verifica se sessão ja encostou no topo //tira altura do menu

                if (sTop >= top) {
                    nav.find('a').removeClass('active'); // ENTREI NA NAV, ENCONTREI O A E REMOVI A CLASSE
                    nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active'); //pega href # que coloquei na sessão, o this procura "esse atributo e pega id dele"
                }
            });
        }
    });

    // NAVEGAÇÃO
    nav.find('a').on('click', function(e){
        e.preventDefault();
        $('.header-collapse').removeClass('active'); // classe do mobile que abre menu deslizante, to removendo ela quando clico
        $('#nav-toggle').removeClass('active');


        var target = $(this).attr('href');
        if(target == "#home"){
            $('html, body').animate({scrollTop: 0}, 700);
        } else{
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top //pegou o target que é o hrfe e chamou pro top dele
            }, 700);
        }
    });

    //BACK-TOP (VOLTA COM LOGO)
    $('.back-top').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0}, 700);
    });

    // Carrosel principal (banners)
    $('#carousel-principal').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 0,
        nav: true,
        navSpeed: 1000,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: true,
        dotSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10
    });

    // Carrosel Portfolio
    $('.carousel-portfolio').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 0,
        nav: true,
        navSpeed: 1000,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: false,
        dotSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10
    });

    // testemunhas
    $('#carousel_testemunhas').owlCarousel({
        items: 1,
        loop: true,
        margin: 40,
        nav: false,
        navSpeed: 1000,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: true,
        dotSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10,
        responsive: {
            960: {
                items: 2
            },
            1280: {
                items: 2,
                nav: true
            }
        }
    });

    /* Portfolio */
    $('.portfolio-nav li a').click(function (e) {
        e.preventDefault();
        $('.portfolio-nav li a').removeClass('active');
        $(this).addClass('active'); //this é naquele qeu cliquei

        $('.portfolio').removeClass('visible');
        if (this.id == "all") {
            $('.portfolio').addClass('visible');
        } else {
            $('.portfolio.' + this.id).addClass('visible');
            // vai pegar o id que colocamos na classe (pode ser design logos etc)
        }

    });

});

// dots é para os quadradinhos em baixo, nav para as setas
// refreshe rate impede que fique duas img quando amplia tamanho
