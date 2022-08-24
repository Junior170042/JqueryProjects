$('document').ready(function () {

    //callback Functions
    /*$('#animate').click(() => {
        $('#image').animate({
            left: '100px',
            top: '100px',
            opacity: '1'
        }, 1000, () => {
            alert("animation completed!")
        })
    })*/

    /*$('#animate').click(() => {
        $('#image').slideUp(2000, () => {
            $('#image').slideDown(2000)
        })
    })*/

    //callbacks and chainning

    $('#animate').click(() => {
        $('#image').slideUp(1000).slideDown(1000).css('opacity', '1').fadeOut(2000).fadeIn(2000);
    })

})