
        var demo                                           //VARIABLE TO STORE THE DIV ID IN WHICH THE TYPING ANIMATION TO BE DONE
        var txt                                             //VARIABLE TO STORE THE TEXT THAT SHOULD BE ANIMATED

        var demo1
        var txt1

        var data = []                                       //VARIABLE TO STORE THE DATA OF INPUT TO SAVE AS PDF

        var score = 0;                                      //VARIABLE TO STORE THE SCORE

        var clues

        var storys

        var image

        var cluedisplay = 0;
        var storydisplay = 0;

        //VARIABLES USED FOR COUNTING THE NUMBER OF TIMES THE CODE IS ENTERED

        var startcount = 0
        var clue1count = 0
        var clue2count = 0
        var clue3count = 0
        var clue4count = 0
        var clue5count = 0
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


            timeText = document.createElement("div")
            timeText.id = "timeText"
            timeText.className = "timeText"

            timeText.innerHTML = gettingTime();

            ServerMessage.appendChild(timeText)                     //MAKING Time A SUB CHILD OF ServerMessage

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


            timeText = document.createElement("div")
            timeText.id = "timeText"
            timeText.className = "timeText"

            timeText.innerHTML = gettingTime();

            ServerMessage.appendChild(timeText)                     //MAKING Time A SUB CHILD OF ServerMessage


        }


        function printimage(){

            var screen = document.getElementById("screen")              //SCREEN 

            var Left = document.createElement("div")                    //CREATING A NEW DIV Left (GRAND PARENT DIV OF SERVER'S MESSAGE)
            Left.className = "Left"                                     //SETTING DIV NAME AS Right FOR DOING IT CONTINUESLY


            var ServerMessage = document.createElement("div")           //CREATING A NEW DIV ServerMessage (PARENT DIV OF SERVER'S MESSAGE)
            ServerMessage.className = "ServerMessage"                   //SETTING DIV NAME AS UserMessage FOR REUSABILITY

            var image = document.createElement("div")               //CREAING A NEW DIV clue1 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)
            
            image.style.width= "20rem"
            image.style.height = "20rem"


            screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
            Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
            ServerMessage.appendChild(image)                    //MAKING clue2 A SUB CHILD OF ServerMessage

            image.style.backgroundImage = "url('./Images/sju.png')" 
            image.style.backgroundSize = "cover"
            

            image.id = ""                                       //TO MAKE THE ID NAME BLANK TO PREVENT THE REPEATION OF CODE IN THE SAME DIV


            timeText = document.createElement("div")
            timeText.id = "timeText"
            timeText.className = "timeText"

            timeText.innerHTML = gettingTime();

            ServerMessage.appendChild(timeText)                     //MAKING Time A SUB CHILD OF ServerMessage


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

                   
                        clues = "Clue 1: The kidnapper’s Van was found entering the main gate of St. Joseph’s University. You are required to get hold of the main gate’s cctv footage. [Head to the main gate] You are required to describe the footage.   "

                        printclue(clues);
                

                        //printimage()
                startcount++

                data.push(secondTime() + "     -    " + userinput+"     -   "+score)

            }

            else if((userinput === "MAINGATE.MP4")&&(clue1count<1)){

                storys = "Agent 47, We are now looking into the information you've submitted. We are confirming the location."

                printstory(storys);

                clues = "Clue 2: We've just found out that the van took a left after entering and then went downhill. Follow the trace and find the van[qr code]."
                printclue(clues);

                    clue1count++

                    score+=10

                    data.push(secondTime() + "     -    " + userinput+"     -   "+score)

            }
               
            else if((userinput === "JB007")&&(clue2count<1)){

                storys = "You found a suspicious guy standing near the van. You approached him. He started to make a fuss, situation got heated up. You had to resort to force to make the guy talk. You found a barcode keychain with a text on the back saying 'vovel-barcode'"

                printstory(storys);

                clues = "Clue 3: Agent 47, We think that the 'vowel-barcode' might be a potential room number where they might be headed. You are required to scan the barcode to confirm this suspicion"
                
                printclue(clues);

                    clue2count++

                    score+=10

                    data.push(secondTime() + "     -    " + userinput+"     -   "+score)
                    
            }

            else if((userinput === "A-102")&&(clue3count<1)){

                storys = "You found out that the lock was forcefully opened and there were traces of blood and fingerprints on the scene."

                printstory(storys);

                clues = "Clue 4: Collect the potential evidences to confirm the identity. Find a location optimal to do the testing inside the campus premises."
                
                printclue(clues);


                    clue3count++

                    score+=10
                    
                    data.push(secondTime() + "     -    " + userinput+"     -   "+score)
            }    

            else if((userinput === "EVIDENCE.DATA")&&(clue4count<1)){

                    storys = "The samples matches with that of the kidnapped person.EMERGENCY!, Agent 47 we've just got info that the driver had informed the kidnappers about a suspicious person who enquired about them. We think the team is on the move to remove all the loopholes present. "

                printstory(storys);

                clues = "Clue 5: You are to head to the main computer lab in Magis block to stop this from happening. "
                
                printclue(clues);

                    clue4count++

                    score+=10

                    data.push(secondTime() + "     -    " + userinput+"     -   "+score)
                    
            } 

            else if((userinput === "SIXTY EIGHT")&&(clue5count<1)){

                storys = "You succesfully got inside the system. You checked for recent files. You've found the recently opened file with a suspicious name."

                printstory(storys);

                clues = "Clue 6:This might be an encrypted message. Wrack your brains! "
                

                clue5count++

                score+=10

                data.push(secondTime() + "     -    " + userinput+"     -   "+score)
                
        }            
            else if((userinput === "RESCUE")&&(finalAnswercount<1)){

                storys = "YOU HAVE RESCUDED THE HOSTAGE FROM THE TERRORISTS."

                printstory(storys);

                clues = "ENTER THE CODE 'END' TO SAVE YOUR GAME"
                
                printclue(clues);



                    finalAnswercount++

                    score+=10

                    data.push(secondTime() + "     -    " + userinput+"     -   "+score)
                    

            }

            else if(userinput === "END"){

                storys = "THANKS FOR PLAYING WITH US."

                printstory(storys);

                

                data.push(secondTime() + "     -    " + userinput+"     -   "+score)

                func_savedata(data);

            }

            else{

                storys = "SORRY WRONG INPUT"

                printstory(storys);

                    score -= 5

                    data.push(secondTime() + "     -    " + userinput+"     -   "+score)

            }


                

            updateScroll();                                             //CALLING updateScroll FUNCTION TO ALWAYS PIN THE SCREEN DOWN
        
    

            Time.id = ""
        }



        //SAVE AND DOWNLOAD THE FILE

        function func_savedata(data){
            
            

            var doc = new jsPDF()

            doc.text(data,20,10)
            doc.save('save.pdf')


          
          }

