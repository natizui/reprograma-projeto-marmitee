$(document).ready(function() {
    $( ".img-flip" ).hover( function() {
        $("#image").toggleClass('flip');
    });

    $( ".img-flip1" ).hover( function() {
        $("#image-1").toggleClass('flip');
    });
});
