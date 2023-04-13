let gridContainer = $('#gridContainer');

for (let i=0; i < 16; i++) {
    let box = $('<div>').addClass('box');
    $(gridContainer).append($(box));
};

$('.box').on('click', function() {
    $(this).toggleClass('clicked');
});