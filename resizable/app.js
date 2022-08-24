$('document').ready(() => {
    $('#image').resizable({
        //animate: true,
        maxHeight: 400,
        maxWidth: 400,
        minHeight: 150,
        minWidth: 150,
        //show transparent while resizing
        ghost: true,
    })
})