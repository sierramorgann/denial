$(document).ready(function(){
    $(function() {
        var a = 3;
            $('.draggable').draggable({
                start: function(event, ui) { $(this).css("z-index", a++); }
            });
        $('#dragZone div').click(function() {
            $(this).addClass('top').removeClass('bottom');
            $(this).siblings().removeClass('top').addClass('bottom');
            $(this).css("z-index", a++);
        });    
    });

    $(function() {
        // Change this selector to find whatever your 'boxes' are
        var boxes = $(".draggable");

        // Set up click handlers for each box
        boxes.click(function() {
            var el = $(this), // The box that was clicked
                max = 0;

            // Find the highest z-index
            boxes.each(function() {
                // Find the current z-index value
                var z = parseInt( $( this ).css( "z-index" ), 10 );
                // Keep either the current max, or the current z-index, whichever is higher
                max = Math.max( max, z );
            });

            // Set the box that was clicked to the highest z-index plus one
            el.css("z-index", max + 1 );
        });
    });

    $(function getQuote() {
            var txt = $('#input1').val();
                $('#output').html(txt);

        $('#submit').on('click', getQuote());  
    });      
});


