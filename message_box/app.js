$('document').ready(() => {
    const paises = ["Haiti", "Brazil", "Argentina", "Uriguay"]
    $('input').autocomplete({
        source: paises
    }, {
        minLength: 0
    })

    $('#btn1').click(() => {
        $('#dialog').dialog('open')
    })

    //the dialog box
    $('#dialog').dialog({
        //the title
        title: 'Title from js',
        //Undraggable
        draggable: false,
        //Unresizable
        resizable: false,

        //as modal to prevent other action from happening
        modal: true,

        //prevent opening modal automatically
        autoOpen: false,
    })
})