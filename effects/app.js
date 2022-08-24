$('document').ready(function () {

    $('.btn1').click(() => {
        $('img').hide(2000);
    })

    $('.btn2').click(() => {
        $('img').show(2000);
    })

    $('.btn3').click(() => {
        $('img').toggle(2000);
    })

    //fade effect
    $('.btn4').click(() => {
        $('img').fadeIn(2000);
    })

    $('.btn5').click(() => {
        $('img').fadeOut(2000);
    })

    $('.btn6').click(() => {
        $('img').fadeToggle(2000);
    })
})