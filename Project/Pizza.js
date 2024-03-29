function getReceipt() {
    //This initializes the string so it is passed from 
    //function to function, growing line by linbe into a full receipt
    var text1 = "<h3>You ordered:<h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++)  {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 75;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 50;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 60;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 80;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 100;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = LE"+sizeTotal+"00");
    console.log("size text1: "+text1);
    console.log("subtotal: LE"+runningTotal+".00");
    //These variables will get passed to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount >  1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"LE"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"LE"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>"+
        runningTotal+".00"+"</strong></h3>";
};