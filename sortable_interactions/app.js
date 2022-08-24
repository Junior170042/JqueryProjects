$('document').ready(() => {
    $('.sort').sortable({
        opacity: 0.4,
        cursor: 'grabbing',
        containment: 'parent',
        //300 milisecond before starting moving
        //delay: 300,
        distance: 50
    })
})