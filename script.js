
        var demo                                           //VARIABLE TO STORE THE DIV ID IN WHICH THE TYPING ANIMATION TO BE DONE
        var txt                                             //VARIABLE TO STORE THE TEXT THAT SHOULD BE ANIMATED

        var demo1
        var txt1

        var data = []                                       //VARIABLE TO STORE THE DATA OF INPUT TO SAVE AS PDF

        var score = 0;                                      //VARIABLE TO STORE THE SCORE

        var clues = new Array("Clue 1: The kidnapper’s Van was found entering the main gate of St. Joseph’s University. You are required to get hold of the main gate’s cctv footage. [Head to the main gate]","Clue 1: The kidnapper’s Van was found entering the main gate of St. Joseph’s University. You are required to get hold of the main gate’s cctv footage. [Head to the main gate]")

        var storys = new Array("Agent 47, This is Diana, Mission: Rescue of a Kidnapped Ethical Hacker.","Agent 47, This is Diana, Mission: Rescue of a Kidnapped Ethical Hacker.")

        var cluedisplay = 0;
        var storydisplay = 0;

        //VARIABLES USED FOR COUNTING THE NUMBER OF TIMES THE CODE IS ENTERED

        var startcount = 0
        var clue1count = 0
        var clue2count = 0
        var clue3count = 0
        var clue4count = 0
        var finalAnswercount = 0
        

        demo = document.getElementById("initial")           //ASSIGNING THE INITIAL DIV TO DEMO 
        txt = "ENTER THE CODE 'START' TO BEGIN THE GAME"    //ASSIGNING THE INITIAL TEXT TO txt

        typing(txt);                                        //CALLING typing FUNCTION FOR THE FIRST TEXT TO BE SHOWN

        timeText.innerHTML = gettingTime();


        function printstory(storys){

            var screen = document.getElementById("screen")              //SCREEN 

            var Left = document.createElement("div")                    //CREATING A NEW DIV Left (GRAND PARENT DIV OF SERVER'S MESSAGE)
            Left.className = "Left"                                     //SETTING DIV NAME AS Right FOR DOING IT CONTINUESLY


            var ServerMessage = document.createElement("div")           //CREATING A NEW DIV ServerMessage (PARENT DIV OF SERVER'S MESSAGE)
            ServerMessage.className = "ServerMessage"                   //SETTING DIV NAME AS UserMessage FOR REUSABILITY

            var story = document.createElement("div")               //CREAING A NEW DIV clue1 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)
            story.id = "story"                                  //SETTING AN ID FOR clue1
        
            
            screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
            Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
            ServerMessage.appendChild(story)                    //MAKING clue2 A SUB CHILD OF ServerMessage
            


            //ASSIGNING SPECIFIC VALUE TO demo AND txt

            demo = document.getElementById("story")
            txt = storys
    
            typing(txt);                                        //CALLING typing function

            story.id = ""

            storydisplay = 1

        }

        function printclue(clues){

            var screen = document.getElementById("screen")              //SCREEN 

            var Left = document.createElement("div")                    //CREATING A NEW DIV Left (GRAND PARENT DIV OF SERVER'S MESSAGE)
            Left.className = "Left"                                     //SETTING DIV NAME AS Right FOR DOING IT CONTINUESLY


            var ServerMessage = document.createElement("div")           //CREATING A NEW DIV ServerMessage (PARENT DIV OF SERVER'S MESSAGE)
            ServerMessage.className = "ServerMessage"                   //SETTING DIV NAME AS UserMessage FOR REUSABILITY

            var clue = document.createElement("div")               //CREAING A NEW DIV clue1 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)
            clue.id = "clue"                                  //SETTING AN ID FOR clue1
            

            screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
            Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
            ServerMessage.appendChild(clue)                    //MAKING clue2 A SUB CHILD OF ServerMessage

            demo1 = document.getElementById("clue")
            txt1 = clues

            typing1(txt1);                                        //CALLING typing function

            clue.id = ""                                       //TO MAKE THE ID NAME BLANK TO PREVENT THE REPEATION OF CODE IN THE SAME DIV


            cluedisplay = 1
        }

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
         

        function typing1(txt1){
                
            var i = 0;
            var speed = 50;
    
            function typeWriter1() {
                if (i < txt1.length) {
                    demo1.innerHTML += txt1.charAt(i);
                    i++;
                setTimeout(typeWriter1, speed);
    
                document.getElementById("usertext").style.pointerEvents="none"      //SET THE POINTER NOT TO USE WILL TYPING ANIMATION IS DONE
                
                }
                else{
    
                    document.getElementById("usertext").style.pointerEvents="auto"  //SET THE POINTER BACK TO NORMAL
    
                }
                updateScroll();
    
            }
    
            typeWriter1();
            
            }


        //SETTING TIMINGS

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

        function secondTime(){

            var dt = new Date();
            let hours = dt.getHours();
            let minutes = dt.getMinutes();
            let seconds = dt.getSeconds();
            let ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes.toString().padStart(2, '0');
            let time = hours + ':' + minutes  + ':' + seconds + " " + ampm;
            return time
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





            if((userinput === "START")&&(startcount<1)){

                        storys = "Agent 47, This is Diana, Mission: Rescue of a Kidnapped Ethical Hacker."

                        printstory(storys);

                   
                        clues = "Clue 1: The kidnapper’s Van was found entering the main gate of St. Joseph’s University. You are required to get hold of the main gate’s cctv footage. [Head to the main gate] You are required to describe the footage."

                        printclue(clues);
                
                  
                startcount++

            }

            else if((userinput === "ANSWER1")&&(clue1count<1)){

                storys = "Agent 47, This is Diana, Mission: Rescue of a Kidnapped Ethical Hacker."

                printstory(storys);

                clues = "Clue 1: The kidnapper’s Van was found entering the main gate of St. Joseph’s University. You are required to get hold of the main gate’s cctv footage. [Head to the main gate]"
                
                printclue(clues);

                    clue1count++

                    score+=10

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

                    score+=10
                    
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

                    score+=10
                    
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

                    score+=10
                    
            } 

            else if((userinput === "ANSWER5")&&(finalAnswercount<1)){

                    var finalAnswer = document.createElement("div")     //CREAING A NEW DIV finalAnswer (DIV FOR SHOWING THE USER THE HUNT IS OVER)
                    finalAnswer.id = "finalAnswer"                      //SETTING AN ID FOR finalAnswer

                    
                    screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
                    Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
                    ServerMessage.appendChild(finalAnswer)              //MAKING finalAnswer A SUB CHILD OF ServerMessage


                    //ASSIGNING SPECIFIC VALUE TO demo AND txt

                    demo = document.getElementById("finalAnswer")
                    txt = "YOU HAVE COMPLETED THE TREASURE HUNT \n PLEASE ENTER CODE 'END' TO SAVE YOUR GAME"
            
                    typing(txt);                                        //CALLING typing function

                    finalAnswer.id = ""                                 //TO MAKE THE ID NAME BLANK TO PREVENT THE REPEATION OF CODE IN THE SAME DIV
                    

                    finalAnswercount++

                    score+=10

                    

            }

            else if(userinput === "END"){

                var end = document.createElement("div")     //CREAING A NEW DIV finalAnswer (DIV FOR SHOWING THE USER THE HUNT IS OVER)
                end.id = "end"                      //SETTING AN ID FOR finalAnswer

                
                screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
                Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
                ServerMessage.appendChild(end)              //MAKING finalAnswer A SUB CHILD OF ServerMessage


                //ASSIGNING SPECIFIC VALUE TO demo AND txt

                demo = document.getElementById("end")
                txt = "THANKS FOR PLAYING WITH US"
        
                typing(txt);                                        //CALLING typing function

                end.id = ""                                 //TO MAKE THE ID NAME BLANK TO PREVENT THE REPEATION OF CODE IN THE SAME DIV
                
               

                func_savedata(data);

        }

            else if(((userinput === "START")&&(startcount>0))||(userinput === "ANSWER2")&&(clue2count>0)||(userinput === "ANSWER1")&&(clue1count>0)||(userinput === "ANSWER3")&&(clue3count>0)||(userinput === "ANSWER4")&&(clue4count>0)||(userinput === "ANSWER5")&&(finalAnswercount>0)){

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
                
                score -= 5
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

                    score -= 5

            }

                    timeText = document.createElement("div")
                    timeText.id = "timeText"
                    timeText.className = "timeText"

                    timeText.innerHTML = gettingTime();

                    ServerMessage.appendChild(timeText)                     //MAKING Time A SUB CHILD OF ServerMessage
                

            updateScroll();                                             //CALLING updateScroll FUNCTION TO ALWAYS PIN THE SCREEN DOWN
        
    

            data.push(secondTime() + "     -    " + userinput+"     -   "+score)

            Time.id = ""
        }



        //SAVE AND DOWNLOAD THE FILE

        function func_savedata(data){
            
            

            var doc = new jsPDF()

            doc.text(data,20,10)
            doc.save('save.pdf')


          
          }

