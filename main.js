x = 0;
y = 0;
draw_cricle = "";
draw_rect="";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listeing please speak";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var content = event.resilts[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognized as:" + content;
        if(content=="circle")
        {
            x=Math.floor(Math.random()*900);
            y=Math.floor(Math.random()*600);
            document.getElementById("status").innerHTML = "Started drawing rectangle";
            draw_rect = "set";
        }
}

function setup(){
    canvas = createCanvas(900,600);
}

function draw(){
    if(draw_circle=="set")
    {
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius,draw_circle);
        document.getElementById("status").innerHTML = "Circle is drawn. ";
        draw_cirlce="";
    }

    if(draw-rect=="set")
    {
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle is drawn. ";
        draw_rect="";
    }

}    