// stoppping right click
document.addEventListener('contextmenu', event => event.preventDefault());


// for opening of website
var typ, text;
typ = 0;
text = "Welcome...."

function typing() {
    if (typ < text.length) {
        document.getElementById("text").innerHTML += text.charAt(typ);
        document.getElementById('portfolio').style.display = 'none';
        typ++
        setTimeout(typing, 200)
        while (typ >= text.length) {
            document.querySelector('.opening').style.display = "none";
            document.getElementById('portfolio').style.display = 'block';

            break
        }
    }
}






// for dark mode
let i = 1;

function daynight() {
    if (i == 1) {
        document.body.style.backgroundColor = 'black'
        var elements = document.getElementsByClassName('dark'); // get all elements
        for (var j = 0; j < elements.length; j++) {
            elements[j].style.color = "white";
        }
        document.querySelector('.exploremore img').style.filter = "invert(50)"
            // call button
        document.querySelector('#aboutmepara .actionbuttons').style.backgroundColor = 'black'
        document.querySelector('#aboutmepara .actionbuttons').style.border = '2px solid white'
            // cv button
        document.querySelector('#cv').style.border = '2px solid white'
        document.querySelector('#cv').style.backgroundColor = 'black'
            // success
        document.querySelector('.borders').style.border = '2px solid white'
        document.querySelector('.borders').style.backgroundColor = 'black'
        i = 0
    } else {
        document.body.style.backgroundColor = 'white'
        var elements = document.getElementsByClassName('dark'); // get all elements
        for (var j = 0; j < elements.length; j++) {
            elements[j].style.color = "rgba(34, 34, 34, 0.651)";
        }
        document.querySelector('.exploremore img').style.filter = "none"
            // call button 
        document.querySelector('#aboutmepara .actionbuttons').style.backgroundColor = 'white';
        document.querySelector('#aboutmepara .actionbuttons').style.border = '2px solid rgba(34, 34, 34, 0.651)'

        // cv button
        document.querySelector('#cv').style.border = '2px solid rgba(34, 34, 34, 0.651)'
        document.querySelector('#cv').style.backgroundColor = 'white'

        // success 
        document.querySelector('.borders').style.border = '2px solid rgba(34, 34, 34, 0.651)'
        document.querySelector('.borders').style.backgroundColor = 'white'
        i = 1
    }
}









// about section


document.querySelector('#aboutmecont').addEventListener('mouseover', function muji() {
    document.querySelector('#aboutmetitle').style.display = 'none';
    document.querySelector('#aboutmepara').style.display = 'block';
    document.querySelector('#mainimg img').style.display = 'block'
    document.querySelector('#mainimg #contactdiv').style.display = 'none'

})

document.querySelector('#aboutmecont').addEventListener('mouseout', function mujii() {
    document.querySelector('#aboutmetitle').style.display = 'block';
    document.querySelector('#aboutmepara').style.display = 'none';
    document.querySelector('#mainimg img').style.display = 'none'
    document.querySelector('#mainimg #contactdiv').style.display = 'flex'

})




// wow
let gana = new Audio('../music/wow.mp3')
gana.currentTime = 0;

function wow() {
    hamexit()
    document.getElementById('wowcont').style.display = 'block';
    document.getElementById('portfolio').style.display = 'none';
    gana.currentTime = 0;
    gana.play()
}
setTimeout(wow, 60000)

function wowexit() {
    document.getElementById('wowcont').style.display = 'none'
    document.getElementById('portfolio').style.display = 'block'
    gana.pause()
    gana.currentTime = 0;

}


// sends mail  from email.js
function sendMail(params) {
    var tempParams = {
        from_name: document.querySelector('.name input').value,
        email: document.querySelector('.email input').value,
        message: document.querySelector('.message textarea').value
    }
    emailjs.send('gmail', 'template_tno4a19', tempParams).then(function(res) {
        console.log("success", res.status)
    })
    document.querySelector('.name input').value = ""
    document.querySelector('.email input').value = ""
    document.querySelector('.message textarea').value = ""

    // success

    function successremove() {
        document.querySelector("#contactformdiv .contactform").style.display = 'flex';
        document.querySelector("#contactformdiv .success").style.display = 'none';
    }

    function success() {
        document.querySelector("#contactformdiv .contactform").style.display = 'none';
        document.querySelector("#contactformdiv .success").style.display = 'block';
        setTimeout(successremove, 3000)

    }
    success();
}

//  hamburger 
function ham() {
    document.querySelector('.hamburgercont').style.display = "flex"
    document.querySelector('#portfolio').style.display = 'none'
}

function hamexit() {
    document.querySelector('.hamburgercont').style.display = "none"
    document.querySelector('#portfolio').style.display = 'block'


}



// typing animation and darkmode
daynight();
typing();
