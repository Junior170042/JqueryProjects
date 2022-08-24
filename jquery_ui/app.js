$('document').ready(() => {
    $('#date').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        //min and max datepicker
        minDate: new Date(2016, 1, 5),
        maxDate: new Date(2023, 1, 6,)
    });

    $('#tool').tooltip({
        track: true,
        content: 'Your name completely here',
        show: {
            effect: 'slideDown', duration: 1000, delay: 100
        },
        hide: { effect: "explode", duration: 1000 }
    })
})