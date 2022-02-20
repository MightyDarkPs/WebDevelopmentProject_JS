//Unique Firebase Object
var firebaseConfig = {
    apiKey: "AIzaSyAPYONE1xV5W2Ma9x9zvt4tkvnJvNHkleg",
    authDomain: "saqagroup-7d3cc.firebaseapp.com",
    projectId: "saqagroup-7d3cc",
    storageBucket: "saqagroup-7d3cc.appspot.com",
    messagingSenderId: "781565427876",
    appId: "1:781565427876:web:06b47d2812ce9ea9986631",
    measurementId: "G-NBTKEGJVVF"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("requests")

//Get Submit Form
let submitButton = document.getElementById('submit')

submitButton.addEventListener("mouseenter", function( event ) {
    submitButton.className = "button-28_withHover";
});

submitButton.addEventListener("mouseleave", function( event ) {
    submitButton.className = "button-28";
});

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()

    //Get Form Values
    let firstName = document.getElementById('fname').value
    let lastName = document.getElementById('lname').value
    let gender = document.getElementById('gender').value
    let phone = document.getElementById('phone').value
    let birthday = document.getElementById('birthday').value
    let about = document.getElementById('about').value

    //Save Form Data To Firebase
    db.doc().set({
        FirstName: firstName,
        LastName: lastName,
        Gender: gender,
        Phone: phone,
        Birthday: birthday,
        About: about
    }).then(() => {
        console.log("Data saved")
    }).catch((error) => {
        console.log(error)
    })

    //alert
    alert("Your Form Has Been Submitted Successfully")
});

let ourTeamDescription = document.getElementById("our_team_desc");
ourTeamDescription.innerHTML += "<audio src='src/Accralate.mp3' controls/>"

document.addEventListener('keypress', (event) => {
    const keyName = event.key;

    alert('You Clicked ' + keyName + ", but we do not support this command");
});

$(document).ready(function(){
    $("#img-responsive").animate({
        opacity: 0.3
    }, function () {
        $("#img-responsive").animate({
            opacity: 1.0
        })
    })
});

