    // set up text to print, each item in array is new line
    var CLUE1 = new Array(
        "THIS IS YOUR CLUE NO 1 DO THE FOLLOWING STEPS AND FIND THE REAMAINING CLUE AND BE THE ULTIMATE WINNER"
    );   

    var CLUE2 = new Array(
        "THIS IS YOUR 2ND CLUE IN THIS HUNT. YOU HAVE TO PERFORM THE SPECFIC TASK TO GET INTO THE NEXT CLUE GOOD LUCK AND GO ON"
    );

    var CLUE3 = new Array(
        "THIS IS YOUR 3RD CLUE IN THIS HUNT. YOU HAVE TO PERFORM THE SPECFIC TASK TO GET INTO THE NEXT CLUE GOOD LUCK AND GO ON"
    );

    var CLUE4 = new Array(
        "THIS IS YOUR 4TH CLUE IN THIS HUNT. YOU HAVE TO PERFORM THE SPECFIC TASK TO GET INTO THE NEXT CLUE GOOD LUCK AND GO ON"
    );

    var CLUE5 = new Array(
        "THIS IS YOUR 5TH CLUE IN THIS HUNT. YOU HAVE TO PERFORM THE SPECFIC TASK TO GET INTO THE NEXT CLUE GOOD LUCK AND GO ON"
    );

    var FINALANSWER = new Array(
        "YOU HAVE COMPLETED THE TREASURE HUNT"
    );

    var WRONGANSWER = new Array(
        "YOU HAVE ENTERED A WRONG ANSWER"
    );

        var iSpeed = 50; // time delay of print out
        var iIndex = 0; // start printing array at this posision
        var iArrLength = CLUE1[0].length; // the length of the text array
        var iScrollAt = 20; // start scrolling up at this many lines
            
        var iTextPos = 0; // initialise text position
        var sContents = ''; // initialise contents variable
        var iRow; // initialise current row

        


    function typewriter()
    {

        var destination = document.getElementById("clue1");        

        sContents =  ' ';
        iRow = Math.max(0, iIndex-iScrollAt);
        
        while ( iRow < iIndex ) {
            sContents += CLUE1[iRow++] + '<br />';
        }

        destination.innerHTML = sContents + CLUE1[iIndex].substring(0, iTextPos) + "_";
        
        if ( iTextPos++ == iArrLength ) {
            iTextPos = 0;
            iIndex++;
            if ( iIndex != CLUE1.length ) {
                iArrLength = CLUE1[iIndex].length;
                setTimeout("typewriter()", 500);
            }
        } else {
            setTimeout("typewriter()", iSpeed);
        }
    }
    
    
    typewriter();

    


    function sent(){
        var userinput = document.getElementById("usertext").value   //FOR TAKING THE VALUE OF INPUT FROM THE USER
        document.getElementById("usertext").value = ""              //MAKING THE VALUE IN THE TEXTBOX AS BLANK


        var screen = document.getElementById("screen")              //SCREEN 


        var Right = document.createElement("div")                   //CREATING A NEW DIV Right (GRAND PARENT DIV OF USER'S MESSAGE)
        Right.className = "Right"                                   //SETTING DIV NAME AS Right FOR DOING IT CONTINUESLY



        var UserMessage = document.createElement("div")             //CREATING A NEW DIV UserMessage (PARENT DIV OF USER'S MESSAGE)
        UserMessage.className = "UserMessage"                       //SETTING DIV NAME AS UserMessage FOR REUSABILITY
        

        var useranswer = document.createElement("div")              //CREAING A NEW DIV useranswer (DIV FOR ENTERING THE VALUE THAT THE USER HAD INPUT)
        useranswer.innerHTML = userinput                            //ASSIGNING THE VALUE ENTERED BY THE USER TO THE useranswer

        screen.appendChild(Right)                                   //MAKING Right A SUB CHILD OF screen
        Right.appendChild(UserMessage)                              //MAKING UserMessage A SUB CHILD OF Right
        UserMessage.appendChild(useranswer)                         //MAKING useranswer A SUB CHILD OF UserMessage


        
        
        var Left = document.createElement("div")                    //CREATING A NEW DIV Left (GRAND PARENT DIV OF SERVER'S MESSAGE)
        Left.className = "Left"                                     //SETTING DIV NAME AS Right FOR DOING IT CONTINUESLY


        var ServerMessage = document.createElement("div")           //CREATING A NEW DIV ServerMessage (PARENT DIV OF SERVER'S MESSAGE)
        ServerMessage.className = "ServerMessage"                   //SETTING DIV NAME AS UserMessage FOR REUSABILITY


        switch (userinput) {
            case "ANSWER1":
                
                var clue2 = document.createElement("div")           //CREAING A NEW DIV clue2 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)
                clue2.id = "clue2"                                  //SETTING AN ID FOR clue2

                clue2.innerHTML = "THIS IS YOUR 2ND CLUE IN THIS HUNT. YOU HAVE TO PERFORM THE SPECFIC TASK TO GET INTO THE NEXT CLUE GOOD LUCK AND GO ON"     //ENTERING THE CLUE2 TEXT
                
                screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
                Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
                ServerMessage.appendChild(clue2)                    //MAKING clue2 A SUB CHILD OF ServerMessage

                destination = document.getElementById("CLUE1");
                typewriter();
                
            break;

            case "ANSWER2":

                var clue3 = document.createElement("div")           //CREAING A NEW DIV clue3 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)
                clue3.id = "clue3"                                  //SETTING AN ID FOR clue3

                clue3.innerHTML = "THIS IS YOUR 3RD CLUE IN THIS HUNT. YOU HAVE TO PERFORM THE SPECFIC TASK TO GET INTO THE NEXT CLUE GOOD LUCK AND GO ON"     //ENTERING THE CLUE3 TEXT
                
                screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
                Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
                ServerMessage.appendChild(clue3)                    //MAKING clue2 A SUB CHILD OF ServerMessage
                
            break;

            case "ANSWER3":

                var clue4 = document.createElement("div")           //CREAING A NEW DIV clue2 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)
                clue4.id = "clue4"                                  //SETTING AN ID FOR clue2

                clue4.innerHTML = "THIS IS YOUR 4TH CLUE IN THIS HUNT. YOU HAVE TO PERFORM THE SPECFIC TASK TO GET INTO THE NEXT CLUE GOOD LUCK AND GO ON"     //ENTERING THE CLUE2 TEXT
                
                screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
                Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
                ServerMessage.appendChild(clue4)                    //MAKING clue2 A SUB CHILD OF ServerMessage
                
            break;

                case "ANSWER4":

                var clue5 = document.createElement("div")           //CREAING A NEW DIV clue2 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)
                clue5.id = "clue5"                                  //SETTING AN ID FOR clue2

                clue5.innerHTML = "THIS IS YOUR 5TH CLUE IN THIS HUNT. YOU HAVE TO PERFORM THE SPECFIC TASK TO GET INTO THE NEXT CLUE GOOD LUCK AND GO ON"     //ENTERING THE CLUE2 TEXT
                
                screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
                Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
                ServerMessage.appendChild(clue5)                    //MAKING clue2 A SUB CHILD OF ServerMessage
                
            break;

            case "ANSWER5":

                var finalAnswer = document.createElement("div")           //CREAING A NEW DIV clue2 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)
                finalAnswer.id = "finalAnswer"                                  //SETTING AN ID FOR clue2

                finalAnswer.innerHTML = "YOU HAVE COMPLETED THE TREASURE HUNT"     //ENTERING THE CLUE2 TEXT
                
                screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
                Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
                ServerMessage.appendChild(finalAnswer)                    //MAKING clue2 A SUB CHILD OF ServerMessage
                
            default:

                var wrongAnswer = document.createElement("div")           //CREAING A NEW DIV clue2 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)
                wrongAnswer.id = "wrongAnswer"                                  //SETTING AN ID FOR clue2

                wrongAnswer.innerHTML = "YOU HAVE ENTERED A WRONG ANSWER"     //ENTERING THE CLUE2 TEXT
                
                screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
                Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
                ServerMessage.appendChild(wrongAnswer)                    //MAKING clue2 A SUB CHILD OF ServerMessage
            
            break;
        }
    }

