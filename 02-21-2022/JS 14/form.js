$(function () {
    var$newItemsButton = $('#newItemsButton');
    var$newItemsForm = $('#newItemsForm');
    var$textInput = $('input:text');

    $newItemsButton.show();
    $newItemsForm.hide();

    $('#showForm').on('click',function (){
        $newItemButton.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function (e){
        e.preventDefault();
        var newText = $textInput.val();
        $('li:last').after('<li>' + newText + '</li>');
        $newItemForm.hide();
        $newItemButton.show();
        $textInput.val('');

    });
});