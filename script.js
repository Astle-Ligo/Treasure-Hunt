// set up text to print, each item in array is new line
var aText = new Array(
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
    );
    var iSpeed = 50; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     

    var destination = document.getElementById("typedtext");


    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();

    


    function sent(){
       var userinput = document.getElementById("usertext").value
        var useranswer = document.getElementById("useranswer")
        var UserMessage = document.getElementById("UserMessage")


        document.getElementById("usertext").value = ""
        UserMessage.style.display = "flex";
        useranswer.innerHTML = userinput



        switch (userinput) {
            case "ANSWER":
                document.getElementById("clue2").style.display = "block"
                break;
            case "ANSWER1":
                document.getElementById("clue3").style.display = "block"
                break;
            default:
                break;
        }
    }

