for(var i=0; i<document.querySelectorAll(".drum").length;i++)
{
    var drumElement = document.querySelectorAll("button")[i];
   var keyElement =Event.key;
    drumElement.addEventListener("click", function(){
        var mybutton=this.innerHTML;
        select(mybutton);
    });
}
        function select(key){
        switch (key) {
            case "w":
                    var aud=new Audio("sounds/crash.mp3");
                    aud.play();
                break;
            case "a":
                    var aud=new Audio("sounds/kick-bass.mp3");
                    aud.play();
                    break;
            case "s":
                var aud=new Audio("sounds/snare.mp3");
                aud.play();
                break;
                case "d":
                    var aud=new Audio("sounds/tom-1.mp3");
                    aud.play();
                    break;
                    case "j":
                        var aud=new Audio("sounds/tom-2.mp3");
                        aud.play();
                        break;
                        case "k":
                            var aud=new Audio("sounds/tom-3.mp3");
                            aud.play();
                            break;
                            case "l":
                                var aud=new Audio("sounds/tom-4.mp3");
                                aud.play();
                                break;

            default:
                break;
}
        }
document.addEventListener("keydown", function(Event){
    var keyEvent = Event.key;
    select(keyEvent);
});
