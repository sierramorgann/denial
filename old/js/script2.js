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

        $(function () {
            $(".clicks").dblclick(function (e) {
                e.stopPropagation();
                var currentEle = $(e.target);
                var value = $(e.target).html();
                console.log($(e.target));

                if ($.trim(value) === "") {
                    $(currentEle).data('mode', 'add');
                } else {
                    $(currentEle).data('mode', 'edit');
                }
                updateVal(currentEle, value);
            });
        });

        function updateVal(currentEle, value) {

            $(currentEle).html('<input class="thVal" type="text" id="here" value="' + value + '" />');

            // var mode = $(currentEle).data('mode');
            // alert(mode);
            // var here = $("#here").val();

            $(".thVal").focus();
            $(".thVal").keyup(function (event) {
                if (event.keyCode == 13) {
                    $(this).parent().html($(this).val().trim());
                    $(".thVal").remove();
                    $("#speach").append($("#sub").css({'position': 'absolute', 'top': '5%', 'left': '43%', 'width': '45%'}));
                    $("#thought").append($("#sup").css({'position': 'absolute', 'top': '10%', 'left': '44%', 'width': '45%'}));
                }
            });
        }

        $("#btnSave").on('click', function(){
            $(".draggable").hide();
            $(".clicks").hide();
            $(".hidden").show();
        })
    // });    

    $(window).load(function(){ // This runs when the window has loaded
        var img = $("<img />").attr('src', 'img/Trump.png').load(function() { 
                $("#trump").append(img); 
        });

        var img2 = $("<img />").attr('src', 'img/whouse.png').load(function() {
                $("#wHouse").append(img2);
        }); 

        var img3 = $("<img />").attr('src', 'img/caphill.png').load(function() {
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

        var img11 = $("<img />").attr('src', 'img/brickWall.png').load(function() {
            $("#wall").append(img11);
        });

        var img12 = $("<img />").attr('src', 'img/tnt.png').load(function() {
            $("#tnt").append(img12);
        }); 

        var img13 = $("<img />").attr('src', 'img/ice.png').load(function() {
            $("#ice").append(img13);
        });   

        var img14 = $("<img />").attr('src', 'img/donkey.png').load(function() {
            $("#donkey").append(img14);
        });  

        var img15 = $("<img />").attr('src', 'img/Hillary.png').load(function() {
            $("#hillary").append(img15);
        }); 

        var img16 = $("<img />").attr('src', 'img/Bernie.png').load(function() {
            $("#bernie").append(img16);
        });            
    });  
});
