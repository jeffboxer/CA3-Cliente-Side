
// Part 1 ---- Password Validation

// Function that will show the requirements to the user as soon as he clicks on the textbox

function requirements() {
    document.getElementById('pwdreq').innerHTML = "<br><br>The password must have at least one lowercase letter.<br>The password must have at least one uppercase letter.<br>It must contain (at least) one digit and (at least) one special character.<br>And it must be at least eight characters long."

}


//Function that will give the user the option to show the typed password

function showPwd() {
    var x = document.getElementById("pwd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// This part will create an object using Regex and store the possible combinations we want.
var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

// This function will check if the password typed in our textbox matches our Regex
function pwdChecker() {
    var pwdget = document.getElementById("pwd").value;

    // Message to be return in case of false or true along with text color changing.
    if (pwdget.match(regex)) {
        document.getElementById('status').style.color = "green";
        document.getElementById('status').innerHTML = "The password has passed the strength test.";
        document.getElementById('pwdreq').innerHTML = "";
        return true;
    }
    else {
        document.getElementById('status').style.color = "red";
        document.getElementById('status').innerHTML = "The password has not passed the strength test.Try again !";
        return false;
    }

}

// Part 2 -- JSON

// Creating an Event for my See Customers button
document.getElementById('getusers').addEventListener('click', getUsers);

//Importing data from JSON users
function getUsers() {
    fetch('https://randomuser.me/api/?results=5')
        .then((res) => res.json())
        .then((data) => {
            let author = data.results;
            let output = ''
            console.log(data);
            author.forEach(function (user) {
                output +=
                    // Choosing the information from the users I want to be shown
                    `
            <div>
                <p> <h2>Name: ${user.name.first}</h2></p>
                    <div><img src="${user.picture.medium}"></div>
                <p>Phone Number: ${user.phone}</p>
                <p> Date of Birth: ${user.dob.date}</p>
                <p>Age: ${user.dob.age} </p>
                <p>Email: ${user.email}</p>
                <p>Gender: ${user.gender} </p>
                <p>City: ${user.location.city} </p>
                <p>Country: ${user.location.country} </p>
                <p>Post Code: ${user.location.postcode} </p>
                  
            </div>
            `;
            });

            //output my users Array in this part of my Html Code
            document.getElementById('customers').innerHTML = output;

        })
}
//Creating an event to hide Costumers:
function hideUsers() {
    document.getElementById('customers').innerHTML = "";

}


//Variables Starters
var gsaladtotal;
var csaladtotal;
var tsaladtotal;

//Variables Main
var tcburgertotal;
var tbcburgertotal;
var tfburgertotal;

//Variables Desserts
var tsicecreamtotal;
var tcicecreamtotal;
var tvicecreamtotal;

// Caesar Salad

var item1 = 5.50.toFixed(2);
document.getElementById('item1').innerHTML = "€ " + item1;

//- Button

function i1sub() {


    let x = document.getElementById('tcsalad').value;
    if (x <= 0 || x == null) {
        x = 0;
    }
    else {
        x--;
        document.getElementById('tcsalad').value = (x);
    }
}


//+ Button    

function i1add() {


    let x = document.getElementById('tcsalad').value;
    x++;
    document.getElementById('tcsalad').value = (x);

}

function tcsalad() {

    let qt = document.getElementById("tcsalad").value;
    csaladtotal = qt * item1;

}

// Greek Salada

var item2 = 7.50.toFixed(2);
document.getElementById('item2').innerHTML = "€ " + item2;

//- Button

function i2sub() {

    let x = document.getElementById('tgsalad').value;
    if (x <= 0 || x == null) {
        x = 0;
    }
    else {
    x--;
    document.getElementById('tgsalad').value = (x);
    }
}

//+ Button    

function i2add() {


    let x = document.getElementById('tgsalad').value;
    x++;
    document.getElementById('tgsalad').value = (x);

}


function tgsalad() {

    let qtgsalad = document.getElementById("tgsalad").value;
    gsaladtotal = qtgsalad * item2;

}


// Tuna Salad

var item3 = 10.50.toFixed(2);
document.getElementById('item3').innerHTML = "€ " + item3;

//- Button

function i3sub() {

    let x = document.getElementById('ttsalad').value;
    if (x <= 0 || x == null) {
        x = 0;
    }
    else {
    x--;
    document.getElementById('ttsalad').value = (x);
    }
}

//+ Button    

function i3add() {


    let x = document.getElementById('ttsalad').value;
    x++;
    document.getElementById('ttsalad').value = (x);

}

function ttsalad() {

    let qttsalad = document.getElementById("ttsalad").value;
    tsaladtotal = qttsalad * item3;

}

// Item prices Main

//Cheeseburger
var item4 = 14.00.toFixed(2);
document.getElementById('item4').innerHTML = "€ " + item4;

//- Button

function i4sub() {

    let x = document.getElementById('tcburger').value;
    if (x <= 0 || x == null) {
        x = 0;
    }
    else {
    x--;
    document.getElementById('tcburger').value = (x);
    }
}

//+ Button    

function i4add() {


    let x = document.getElementById('tcburger').value;
    x++;
    document.getElementById('tcburger').value = (x);
}

function tcburger() {

    let qtcburger = document.getElementById("tcburger").value;
    tcburgertotal = qtcburger * item4;

}

//Bacon Cheese Burger
var item5 = 15.50.toFixed(2);
document.getElementById('item5').innerHTML = "€ " + item5;

//- Button

function i5sub() {
    
    let x = document.getElementById('tbcburger').value;
    if (x <= 0 || x == null) {
        x = 0;
    }
    else {
    x--;
    document.getElementById('tbcburger').value = (x);
    }
}


//+ Button    

function i5add() {


    let x = document.getElementById('tbcburger').value;
    x++;
    document.getElementById('tbcburger').value = (x);

}

function tbcburger() {

    let qtbcburger = document.getElementById("tbcburger").value;
    tbcburgertotal = qtbcburger * item5;

}

// Falafel Cheese Burger
var item6 = 11.00.toFixed(2);
document.getElementById('item6').innerHTML = "€ " + item6;

//- Button

function i6sub() {

    let x = document.getElementById('tfburger').value;
    if (x <= 0 || x == null) {
        x = 0;
    }
    else {
    x--;
    document.getElementById('tfburger').value = (x);
    }
}


//+ Button    

function i6add() {

    let x = document.getElementById('tfburger').value;
    x++;
    document.getElementById('tfburger').value = (x);

}

function tfburger() {

    let qtfburger = document.getElementById("tfburger").value;
    tfburgertotal = qtfburger * item6;

}

// Item prices Dessert

//Strawberry Ice Cream
var item7 = 5.00.toFixed(2);
document.getElementById('item7').innerHTML = "€ " + item7;


//- Button

function i7sub() {

    let x = document.getElementById('tsicecream').value;
    if (x <= 0 || x == null) {
        x = 0;
    }
    else {
    x--;
    document.getElementById('tsicecream').value = (x);
    }
}


//+ Button    

function i7add() {


    let x = document.getElementById('tsicecream').value;
    x++;
    document.getElementById('tsicecream').value = (x);

}

function tsicecream() {

    let qtsicecream = document.getElementById("tsicecream").value;
    tsicecreamtotal = qtsicecream * item7;

}

// Chocollate Ice Cream
var item8 = 5.50.toFixed(2);
document.getElementById('item8').innerHTML = "€ " + item8;

//- Button

function i8sub() {

    let x = document.getElementById('tcicecream').value;
    if (x <= 0 || x == null) {
        x = 0;
    }
    else {
    x--;
    document.getElementById('tcicecream').value = (x);
    }
}


//+ Button    

function i8add() {


    let x = document.getElementById('tcicecream').value;
    x++;
    document.getElementById('tcicecream').value = (x);

}

function tcicecream() {

    let qtcicecream = document.getElementById("tcicecream").value;
    tcicecreamtotal = qtcicecream * item8;

}

//Vanilla Ice Cream
var item9 = 5.00.toFixed(2);
document.getElementById('item9').innerHTML = "€ " + item9;

//- Button

function i9sub() {

    let x = document.getElementById('tvicecream').value;
    if (x <= 0 || x == null) {
        x = 0;
    }
    else {
    x--;
    document.getElementById('tvicecream').value = (x);
    }
}


//+ Button    

function i9add() {


    let x = document.getElementById('tvicecream').value;
    x++;
    document.getElementById('tvicecream').value = (x);

}

function tvicecream() {

    let qtvicecream = document.getElementById("tvicecream").value;
    tvicecreamtotal = qtvicecream * item9;

}

//Drinks

//Sof Drinks
var item10 = 2.50.toFixed(2);
document.getElementById('item10').innerHTML = "€ " + item10;

//- Button

function i10sub() {

    let x = document.getElementById('tsdrink').value;
    if (x <= 0 || x == null) {
        x = 0;
    }
    else {
    x--;
    document.getElementById('tsdrink').value = (x);
    }
}


//+ Button    

function i10add() {

    let x = document.getElementById('tsdrink').value;
    x++;
    document.getElementById('tsdrink').value = (x);

}

function tsdrink() {

    let qtsdrink = document.getElementById("tsdrink").value;
    tsdrinktotal = qtsdrink * item10;

}

//Natural Juice
var item11 = 3.50.toFixed(2);
document.getElementById('item11').innerHTML = "€ " + item11;

//- Button

function i11sub() {

    let x = document.getElementById('tnjuice').value;
    if (x <= 0 || x == null) {
        x = 0;
    }
    else {
    x--;
    document.getElementById('tnjuice').value = (x);
    }
}


//+ Button    

function i11add() {


    let x = document.getElementById('tnjuice').value;
    x++;
    document.getElementById('tnjuice').value = (x);

}

function tnjuice() {

    let qtnjuice = document.getElementById("tnjuice").value;
    tnjuicetotal = qtnjuice * item11;

}

//Still Water
var item12 = 1.00.toFixed(2);
document.getElementById('item12').innerHTML = "€ " + item12;


//- Button

function i12sub() {

    let x = document.getElementById('tswater').value;
    if (x <= 0 || x == null) {
        x = 0;
    }
    else {
    x--;
    document.getElementById('tswater').value = (x);
    }
}


//+ Button    

function i12add() {


    let x = document.getElementById('tswater').value;
    x++;
    document.getElementById('tswater').value = (x);

}

function tswater() {

    let qtswater = document.getElementById("tswater").value;
    tswatertotal = qtswater * item12;

}

//Sparkling Water
var item13 = 1.50.toFixed(2);
document.getElementById('item13').innerHTML = "€ " + item13;

//- Button

function i13sub() {

    let x = document.getElementById('tspwater').value;
    if (x <= 0 || x == null) {
        x = 0;
    }
    else {
    x--;
    document.getElementById('tspwater').value = (x);
    }
}


//+ Button    

function i13add() {

    let x = document.getElementById('tspwater').value;
    x++;
    document.getElementById('tspwater').value = (x);

}

function tspwater() {

    let qtspwater = document.getElementById("tspwater").value;
    tspwatertotal = qtspwater * item13;

}


//Bill calculator
function total() {
    let starters = (gsaladtotal + csaladtotal + tsaladtotal);
    let mains = (tcburgertotal + tbcburgertotal + tfburgertotal);
    let dessert = (tsicecreamtotal + tcicecreamtotal + tvicecreamtotal);
    let veg = (gsaladtotal + csaladtotal + tfburgertotal);
    let drinks = (tsdrinktotal + tnjuicetotal + tswatertotal + tspwatertotal);
    let nveg = (starters + mains + dessert + drinks) - veg;



    document.getElementById("starter").value = "€ " + starters;
    document.getElementById("main").value = "€ " + mains;
    document.getElementById("dessert").value = "€ " + dessert;
    document.getElementById("veg").value = "€ " + veg;
    document.getElementById("nveg").value = "€ " + nveg;
    document.getElementById("drinks").value = "€ " + drinks;

    let bill = (drinks + dessert + mains + starters);
    document.getElementById("bill").value = "€ " + bill;
}

