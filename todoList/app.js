$(document).ready(() => {
    $('#button').click(() => {
        var span = '<span>Eliminar</span>'
        var add = $('input[name=tareas]').val();
        $('ul').append(`<li>${add} ${span}</li> `)
    })

    $(document).on('dblclick', 'li', function () {
        $(this).toggleClass('strike');

        $('span').click(function () {
            $(this).parent().fadeOut()
        })
    })
    $('input').focus(function () {
        $(this).val('');
    });

    $('ul').sortable();
})
