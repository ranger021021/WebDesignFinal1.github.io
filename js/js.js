
$(window).on('scroll load',function(){
    // alert($('.col-lg-8').offset().top);
    // alert($(window).scrollTop());
    // alert($(window).height());
    if( $(window).scrollTop() > 100){
        $('#anime .row').addClass('animate__animated animate__rotateInUpRight ')
    }
    if($('#anime .row').offset().top - $(window).scrollTop() < $(window).height()){
        $('#anime .row').addClass('animate__animated animate__rotateInUpRight ')
    }
    if($('#jadid2023 .row').offset().top - $(window).scrollTop() < $(window).height()){
        $('#jadid2023 .row').addClass('animate__animated animate__rotateInUpLeft ')
    }
    if($('#irfilm .row').offset().top - $(window).scrollTop() < $(window).height()){
        $('#irfilm .row').addClass('animate__animated animate__rotateInUpRight ')
    }
    if($('#serir .row').offset().top - $(window).scrollTop() < $(window).height()){
        $('#set').addClass('animate__animated animate__rotateInUpLeft ')
    }
    
    if($('.col-lg-8').offset().top - $(window).scrollTop() < $(window).height()){
        $('.col-lg-8').addClass('animate__animated animate__slideInUp animate__fast')
    }
    if($('.col-lg-4').offset().top - $(window).scrollTop() < $(window).height()){
        $('.col-lg-4').addClass('animate__animated animate__slideInUp animate__fast')
    }
});
$('#opensearch').on('click',()=>{
    $('#searchsec').addClass('d-block');
});
$('#closesearch').on('click',() =>{

    $('#searchsec').removeClass('d-block');
});



