$('document').ready(() => {

    //By clicking on the div
    $(".div1").click(() => {
        var x = $('.p1').html();

        //$('#span1').text(x);
        //alert($('.p1').html()); //return tag en text
        //alert($('.p1').text()); //return oly text

        // get the class attribute of the p tag
        //alert($('.p1').attr('class'))

        // get the id attribute of the p tag
        //alert($('.p1').attr('id'))

        // get css atributes of the div tag
        //alert($('.div1').css('background-color'))


    });

    //Change the id attribute of the p tag
    /*$('.btn1').click(() => {
        $('.p1').attr('id', 'newId')
    })*/

    //adding text into the div element by using the append method
    var img = '<img src="js.png" alt="JS"/>'
    $('.btn1').click(() => {
        $('.div1').append('<p>I am the new paragraph</p>')
        $('.div1').append(img)
    })


    //adding text into the div element by using the prepend method
    var img = '<img src="js.png" alt="JS"/>'
    $('.btn2').click(() => {
        $('.div1').prepend(img)
    })

    //adding text into the div element by using the before method

    $('.btn3').click(() => {
        $('.div1').before('<h3>I am the before h3 tag!</h3>')
    })

    //adding text into the div element by using the after method

    $('.btn4').click(() => {
        $('.div1').after('<h3>I am the after h3 tag!</h3>')
    })

    //The remove method
    $('.btn5').click(() => {
        $('.div1').remove();
    })

    //the empty method
    $('.btn6').click(() => {
        $('.div1').empty();
    })

})