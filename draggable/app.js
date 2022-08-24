$('document').ready(() => {
    $('.box').draggable({
        //horizontally only moving
        //axis: 'x',
        cursor: 'grabbing',
        opacity: '0.5',
        //moving only into the parent container
        containment: 'parent',

    })
})