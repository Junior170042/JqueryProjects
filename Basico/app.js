$('document').ready(function () {

    //$('div').css('background', "red");

    //start from position zero
    $('div p:odd').css('background', "#ccee");
    $('.container p').css('color', 'white')

    //start from position one
    $('div p:even').css('background', "#eec");

    $('div p.paraf').css('background', "red");

    //the image
    // $('img').hover(func1)

    /* function func1() {
         $('img').fadeToggle(200);
     }
    */


    //mouse event

    /*  $('img').mouseenter(() => {
        $('img').css('width', '300px');
        })

     $('img').mouseleave(() => {
        $('img').css('width', '200px');
        })
    */

    //Passing 2 functions 

    $('img').hover(firstfunc, secondfunc);

    function firstfunc() {
        $('img').css('opacity', '0.5')
    }

    function secondfunc() {
        $('img').css('opacity', '1')
    }




})