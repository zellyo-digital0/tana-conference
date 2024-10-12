var input = document.getElementById("input"),

    submit = document.getElementById("submit"),

    boxCAPTCHA = document.getElementById("box-CAPTCHA"),

    boxDone = document.getElementById("box-done"),

    CAPTCHA = document.getElementById("CAPTCHA");

input.onfocus = function () {

    "use strict";

    if (this.placeholder === "Type CAPTCHA Here") {

        this.placeholder = "";
    }

};

input.onblur = function () {

    "use strict";

    if (this.placeholder === "") {

        this.placeholder = "Type CAPTCHA Here";
    }

};

function generateCAPTCHA() {

    "use strict";

    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",

        CAPTCHALength = 6,

        randomCAPTCHA = "",

        i,

        randomNumber;

    for (i = 0; i < CAPTCHALength; i = i + 1) {

        randomNumber = Math.floor(Math.random() * chars.length);

        randomCAPTCHA += chars.substring(randomNumber, randomNumber + 1);
    }

    CAPTCHA.innerHTML = randomCAPTCHA;

    submit.onclick = function () {

        if (input.value === "") {

            document.getElementById("wrong").style.display = "block";

            document.getElementById("done").style.display = "none";

            document.getElementById("wrong").innerHTML = "This Field Can't Be Empty";

            input.focus();

            generateCAPTCHA();

        } else if (input.value !== randomCAPTCHA) {

            document.getElementById("done").style.display = "none";

            document.getElementById("wrong").style.display = "block";

            document.getElementById("wrong").innerHTML = "Try Again";

            input.value = "";

            generateCAPTCHA();

        } else {

            boxDone.style.display = "block";

            boxCAPTCHA.style.display = "none";

        }

    };

}

window.onload = generateCAPTCHA();

function back() {

    "use strict";

    document.getElementById("wrong").style.display = "none";

    boxDone.style.display = "none";

    boxCAPTCHA.style.display = "block";

    input.value = "";

    generateCAPTCHA();

}