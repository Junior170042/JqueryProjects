$('document').ready(function () {

    //Slide Effect
    $('#btn1').click(() => {
        $('img').slideDown(2000);
    })

    $('#btn2').click(() => {
        $('img').slideUp(2000);
    })

    $('#btn3').click(() => {
        $('img').slideToggle(2000);
    })


})