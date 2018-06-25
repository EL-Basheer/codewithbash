//Created by EL-Bashir on 25-06-2018, ALCwithGoogle3.0 fe-group-38

// Select color input
// Select size input
let height, width, paint;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (e) {
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    e.preventDefault();
    makeGrid(height, width);

});


function makeGrid(x, y) {
    // Your code goes here!
    $('tr').remove();

      for (let i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (let j = 1; j <= y; j++) {
            $('#table' + i).append('<td></td>');
        }
    }
    
    //to paint the cells
    $('td').click(function makePaint() {
        paint = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).attr('style', 'background-color:' + paint);
        }
    });
}
