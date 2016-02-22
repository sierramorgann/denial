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

    // $(function() {
    //     var sub = $('#submit');

    //     sub.click(function() {
    //         var txt = $('#input1').val();
    //         $('#output').html(txt);
    //     });
    // }); 

    $(window).load(function(){ // This runs when the window has loaded
        var img = $("<img />").attr('src', 'img/Trump.png').load(function() { 
                $("#trump").append(img); 
        });

        var img2 = $("<img />").attr('src', 'img/wHouse.png').load(function() {
                $("#wHouse").append(img2);
        }); 

        var img3 = $("<img />").attr('src', 'img/capHill.png').load(function() {
                $("#capHill").append(img3);
        });

        var img4 = $("<img />").attr('src', 'img/ele.png').load(function() {
                $("#ele").append(img4);
        }); 

        var img5 = $("<img />").attr('src', 'img/woman.png').load(function() {
                $("#woman").append(img5);
        }); 

        var img6 = $("<img />").attr('src', 'img/boyz.png').load(function() {
                $("#boyz").append(img6);
        });    

        var img7 = $("<img />").attr('src', 'img/dino.png').load(function() {
                $("#dino").append(img7);
        });

        var img8 = $("<img />").attr('src', 'img/bb.png').load(function() {
                $("#bb").append(img8);
        });

        var img9 = $("<img />").attr('src', 'img/speach.png').load(function() {
                $("#speach").append(img9);
        });

        var img10 = $("<img />").attr('src', 'img/thoughts.png').load(function() {
                $("#thought").append(img10);
        });
    });  
    
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "comic" );
        }
    });

    $(function() { 
        $("#btnSave").click(function() { 
            html2canvas($(".comic"), {
                onrendered: function(canvas) {
                    theCanvas = canvas;
                    document.body.appendChild(canvas);

                    // Convert and download as image 
                    Canvas2Image.saveAsPNG(canvas); 
                    $("#img-out").append(canvas);
                    // Clean up 
                    // document.body.removeChild(canvas);
                }
            });
        });
    }); 
});






