//jquery
 $( function() {

  //dragg

    $( "#draggable" ).draggable();

 //selectable
     $( "#selectable" ).selectable();

// accordion
        $( "#accordion" ).accordion();
//auto
           var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    //button
     $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).on( "click", function( event ) {
      event.preventDefault();
    } )

    //date picker
     $( "#datepicker" ).datepicker();
     //color animation
       var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });

    //tooltip
     $( document ).tooltip();

     //tabs
      $( "#tabs" ).tabs();
      //sortable
      $( "#sortable" ).sortable();

      //add class
      $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
      function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
//toggle
     // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effect" ).toggle( selectedEffect, options, 500 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
    });

    var data = [
           "Html",
         "Css"  
         "Bootstrap"
           "Jquery"     ];
    $( "#topic").autocomplete({
      source: data
    });

  } );


