
        var demo                                            //VARIABLE TO STORE THE DIV ID IN WHICH THE TYPING ANIMATION TO BE DONE
        var txt                                             //VARIABLE TO STORE THE TEXT THAT SHOULD BE ANIMATED


        //VARIABLES USED FOR COUNTING THE NUMBER OF TIMES THE CODE IS ENTERED

        var startcount = 0
        var clue1count = 0
        var clue2count = 0
        var clue3count = 0
        var clue4count = 0
        var finalAnswercount = 0
        

        demo = document.getElementById("initial")           //ASSIGNING THE INITIAL DIV TO DEMO 
        txt = "ENTER THE CODE 'START' TO START THE GAME"    //ASSIGNING THE INITIAL TEXT TO txt

        typing(txt);                                        //CALLING typing FUNCTION FOR THE FIRST TEXT TO BE SHOWN

        timeText.innerHTML = gettingTime();



        //FUNCTION FOR TYPING ANIMATION

        function typing(txt){
                
        var i = 0;
        var speed = 50;

        function typeWriter() {
            if (i < txt.length) {
                demo.innerHTML += txt.charAt(i);
                i++;
            setTimeout(typeWriter, speed);

            document.getElementById("usertext").style.pointerEvents="none"      //SET THE POINTER NOT TO USE WILL TYPING ANIMATION IS DONE
            
            }
            else{

                document.getElementById("usertext").style.pointerEvents="auto"  //SET THE POINTER BACK TO NORMAL

            }
            updateScroll();

        }

        typeWriter();
        
        }
            

        //SETTING TIMING

        function gettingTime(){

            var dt = new Date();
            let hours = dt.getHours();
            let minutes = dt.getMinutes();
            let ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes.toString().padStart(2, '0');
            let time = hours + ':' + minutes  + " " + ampm;
            return time;

        }



        //SETTING ENTER CLICK TO CALLING SENT()

        document.getElementById("usertext").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                sentcheck();
            }
        });



        //PIN SCROLL LOCK DOWN

        function updateScroll(){
            var element = document.getElementById("screen");
            element.scrollTop = element.scrollHeight;
        }
    
        //TO CALL A FUNCTION ONLY IF THERE IS CONTENT

        function sentcheck(){

            if(document.getElementById("usertext").value != "")

                sent();
        }


        // ALL THE THINGS TO BE DONE WHEN THE SENT BUTTON IS CLICKED

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

            userinput = userinput.toUpperCase();                        //CHANGING THE CASE OF THE INPUT TEXT TO UPPER CASE

            timeText = document.createElement("div")
            timeText.id = "timeText"
            timeText.className = "timeText"

            timeText.innerHTML = gettingTime();


            screen.appendChild(Right)                                   //MAKING Right A SUB CHILD OF screen
            Right.appendChild(UserMessage)                              //MAKING UserMessage A SUB CHILD OF Right
            UserMessage.appendChild(useranswer)                         //MAKING useranswer A SUB CHILD OF UserMessage
            UserMessage.appendChild(timeText)                           //MAKING Time A SUB CHILD OF Usermessage
            
        
            var Left = document.createElement("div")                    //CREATING A NEW DIV Left (GRAND PARENT DIV OF SERVER'S MESSAGE)
            Left.className = "Left"                                     //SETTING DIV NAME AS Right FOR DOING IT CONTINUESLY


            var ServerMessage = document.createElement("div")           //CREATING A NEW DIV ServerMessage (PARENT DIV OF SERVER'S MESSAGE)
            ServerMessage.className = "ServerMessage"                   //SETTING DIV NAME AS UserMessage FOR REUSABILITY


            var cursor = document.createElement("div")
            cursor.className = "cursor"



            if((userinput === "START")&&(startcount<1)){

                var clue1 = document.createElement("div")               //CREAING A NEW DIV clue1 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)
                    clue1.id = "clue1"                                  //SETTING AN ID FOR clue1
                
                    
                    screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
                    Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
                    ServerMessage.appendChild(clue1)                    //MAKING clue2 A SUB CHILD OF ServerMessage
                    


                    //ASSIGNING SPECIFIC VALUE TO demo AND txt

                    demo = document.getElementById("clue1")
                    txt = "THIS IS YOUR CLUE NO 1 DO THE FOLLOWING STEPS AND FIND THE REAMAINING CLUE AND BE THE ULTIMATE WINNER"
            
                    typing(txt);                                        //CALLING typing function


                    

                    clue1.id = ""                                       //TO MAKE THE ID NAME BLANK TO PREVENT THE REPEATION OF CODE IN THE SAME DIV
                    startcount++

            }

            else if((userinput === "ANSWER1")&&(clue1count<1)){

                    var clue2 = document.createElement("div")           //CREAING A NEW DIV clue2 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)
                    clue2.id = "clue2"                                  //SETTING AN ID FOR clue2

                    
                    screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
                    Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
                    ServerMessage.appendChild(clue2)                    //MAKING clue2 A SUB CHILD OF ServerMessage


                    //ASSIGNING SPECIFIC VALUE TO demo AND txt

                    demo = document.getElementById("clue2")
                    txt = "THIS IS YOUR 2ND CLUE IN THIS HUNT. YOU HAVE TO PERFORM THE SPECFIC TASK TO GET INTO THE NEXT CLUE GOOD LUCK AND GO ON"
            
                    typing(txt);                                        //CALLING typing function
                    
                    
                    clue2.id = ""                                       //TO MAKE THE ID NAME BLANK TO PREVENT THE REPEATION OF CODE IN THE SAME DIV

                    clue1count++


            }
               
            else if((userinput === "ANSWER2")&&(clue2count<1)){

                    var clue3 = document.createElement("div")           //CREAING A NEW DIV clue3 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)
                    clue3.id = "clue3"                                  //SETTING AN ID FOR clue3

                    
                    screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
                    Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
                    ServerMessage.appendChild(clue3)                    //MAKING clue3 A SUB CHILD OF ServerMessage
                    

                    //ASSIGNING SPECIFIC VALUE TO demo AND txt

                    demo = document.getElementById("clue3")
                    txt = "THIS IS YOUR 3RD CLUE IN THIS HUNT. YOU HAVE TO PERFORM THE SPECFIC TASK TO GET INTO THE NEXT CLUE GOOD LUCK AND GO ON"
            
                    typing(txt);                                        //CALLING typing function                             
                    

                    clue3.id =""

                    clue2count++

                    
            }

            else if((userinput === "ANSWER3")&&(clue3count<1)){

                    var clue4 = document.createElement("div")           //CREAING A NEW DIV clue4 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)
                    clue4.id = "clue4"                                  //SETTING AN ID FOR clue4

                    
                    screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
                    Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
                    ServerMessage.appendChild(clue4)                    //MAKING clue4 A SUB CHILD OF ServerMessage
                    

                    //ASSIGNING SPECIFIC VALUE TO demo AND txt

                    demo = document.getElementById("clue4")
                    txt = "THIS IS YOUR 4TH CLUE IN THIS HUNT. YOU HAVE TO PERFORM THE SPECFIC TASK TO GET INTO THE NEXT CLUE GOOD LUCK AND GO ON"
            
                    typing(txt);                                        //CALLING typing function


                    clue4.id = ""                                       //TO MAKE THE ID NAME BLANK TO PREVENT THE REPEATION OF CODE IN THE SAME DIV

                    clue3count++

                    
            }    

            else if((userinput === "ANSWER4")&&(clue4count<1)){

                    var clue5 = document.createElement("div")           //CREAING A NEW DIV clue5 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)
                    clue5.id = "clue5"                                  //SETTING AN ID FOR clue2

                    
                    screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
                    Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
                    ServerMessage.appendChild(clue5)                    //MAKING clue5 A SUB CHILD OF ServerMessage


                    //ASSIGNING SPECIFIC VALUE TO demo AND txt

                    demo = document.getElementById("clue5")
                    txt = "THIS IS YOUR 5TH CLUE IN THIS HUNT. YOU HAVE TO PERFORM THE SPECFIC TASK TO GET INTO THE NEXT CLUE GOOD LUCK AND GO ON"
            
                    typing(txt);                                        //CALLING typing function
                    

                    clue5.id = ""                                       //TO MAKE THE ID NAME BLANK TO PREVENT THE REPEATION OF CODE IN THE SAME DIV

                    clue4count++

                    
            } 

            else if((userinput === "ANSWER5")&&(finalAnswercount<1)){

                    var finalAnswer = document.createElement("div")     //CREAING A NEW DIV finalAnswer (DIV FOR SHOWING THE USER THE HUNT IS OVER)
                    finalAnswer.id = "finalAnswer"                      //SETTING AN ID FOR finalAnswer

                    
                    screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
                    Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
                    ServerMessage.appendChild(finalAnswer)              //MAKING finalAnswer A SUB CHILD OF ServerMessage


                    //ASSIGNING SPECIFIC VALUE TO demo AND txt

                    demo = document.getElementById("finalAnswer")
                    txt = "YOU HAVE COMPLETED THE TREASURE HUNT"
            
                    typing(txt);                                        //CALLING typing function

                    finalAnswer.id = ""                                 //TO MAKE THE ID NAME BLANK TO PREVENT THE REPEATION OF CODE IN THE SAME DIV
                    

                    finalAnswercount++

            }

            else if((clue1count>0)||(clue2count>0)||(clue3count>0)||(clue4count>0)||(finalAnswercount>0)){

                var countMessage = document.createElement("div")        //CREAING A NEW DIV finalAnswer (DIV FOR SHOWING THE USER THE HUNT IS OVER)
                countMessage.id = "countMessage"                        //SETTING AN ID FOR finalAnswer

                
                screen.appendChild(Left)                                //MAKING Left A SUB CHILD OF screen
                Left.appendChild(ServerMessage)                         //MAKING ServerMessage A SUB CHILD OF Left
                ServerMessage.appendChild(countMessage)                 //MAKING finalAnswer A SUB CHILD OF ServerMessage


                //ASSIGNING SPECIFIC VALUE TO demo AND txt

                demo = document.getElementById("countMessage")
                txt = "YOU HAVE ALREADY ENTERED THE CODE '" + userinput + "'"
        
                typing(txt);                                            //CALLING typing function

                countMessage.id = ""                                    //TO MAKE THE ID NAME BLANK TO PREVENT THE REPEATION OF CODE IN THE SAME DIV
                

            }

            else{

                    var wrongAnswer = document.createElement("div")     //CREAING A NEW DIV wrongAnswer (DIV FOR SHOWING THE USER HAD ENTERED THE WRONG ANSWER)
                    wrongAnswer.id = "wrongAnswer"                      //SETTING AN ID FOR wrongAnswer

                    
                    screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
                    Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
                    ServerMessage.appendChild(wrongAnswer)              //MAKING wrongAnswer A SUB CHILD OF ServerMessage


                    //ASSIGNING SPECIFIC VALUE TO demo AND txt
                    
                    demo = document.getElementById("wrongAnswer")
                    txt = "SORRY WRONG INPUT" 
            
                    typing(txt);                                        //CALLING typing function

                    wrongAnswer.id = ""                                 //TO MAKE THE ID NAME BLANK TO PREVENT THE REPEATATION OF CODE IN THE SAME DIV

            }

                    timeText = document.createElement("div")
                    timeText.id = "timeText"
                    timeText.className = "timeText"

                    timeText.innerHTML = gettingTime();

                    ServerMessage.appendChild(timeText)                     //MAKING Time A SUB CHILD OF ServerMessage
                

            updateScroll();                                             //CALLING updateScroll FUNCTION TO ALWAYS PIN THE SCREEN DOWN
        
            Time.id = ""
        }