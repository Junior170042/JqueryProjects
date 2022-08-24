$('document').ready(() => {
    $('#dialog').dialog({
        draggable: true,
        resizable: true,
        //close the dialog when press the esc button
        closeOnEsc: true,
        //do other actions when the dialog box is opened
        modal: false,
        autoOpen: true

    })

    $('#date').datepicker({
        showOther: true,
        changeMonth: true,
        changeYear: true,
    })
})