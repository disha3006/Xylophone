for(var i = 0; i< document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){

        var buttonName = this.textContent;


        switch (buttonName) {
            case "Q": 
            var audio =new Audio("1.mp3");
            audio.play();
            break;

            case "W": 
            var audio =new Audio("2.mp3");
            audio.play();
            break;

            case "E": 
            var audio =new Audio("3.mp3");
            audio.play();
            break;

            case "R":
            var audio =new Audio("4.mp3");
            audio.play();
            break;

            case "T": 
            var audio =new Audio("5.mp3");
            audio.play();
            break;

            case "Y": 
            var audio =new Audio("6.mp3");
            audio.play();
            break;

            case "U": 
            var audio =new Audio("7.mp3");
            audio.play();
            break;

            case "I": 
            var audio =new Audio("8.mp3");
            audio.play();
            break;
        }
    });
}
