// //verysimplefunction
// //playCards
// //cookdDinner
// //finishMathHomework

// // function callFriend(friendsName = "Bakyt") {  
// //   console.log("Pick up the phone");
// //   console.log("Type in the number " + friendsName);
// //   console.log("Press call");
// //   console.log("Wait for the answer");
// // }

// // callFriend("Bakyt");
// // callFriend("Akjol");
// // callFriend("Seitek");
// // callFriend();

// function calculateSquareArea(a, b) {
//   console.log(a * b);
// }

// // calculateSquareArea(5, 10);
// // calculateSquareArea(10, 11);
// // calculateSquareArea(1, 0);

// function calculateCylinderVolume(r, h) {
//   return 3.14 * r *r * h;
// }

// var smallGlassVol = calculateCylinderVolume(3, 4);
// var bottleVol = calculateCylinderVolume(3, 10);

// // console.log(smallGlassVol);
// // console.log(bottleVol);

// // alert();
// // confirm();
// // prompt();

// // document.write("<h1>Hello world! </h1>");
// // document.writeln("<p>Goodbye world!</p>");

// function countdown(number) {
//   for (let i = number; i < 10; i++){
//     document.write(i + "<br>");
//   }
// }

// // countdown(5);
// // countdown(15);

// // countdown(prompt("Enter the number!" , 100))

// // var number  = Math.random();
// // document.write(number);


// // function colorfulText(){
// //   var red = Math.random() * 255;
// //   var blue = Math.random() * 255;
// //   var green = Math.random() * 255; 

// //   document.write('<h1 style= "color: rgb('   + red + ', ' + green + ' , ' + blue + ')>')
// // }

// // function colorfulText(text, color) {
// //   document.write(`<h1 style=color>`)                                                    my
// // }

// // var color = randomColor();
// // colorfulText("Hello world!", color);
// // colorfulText("Bye world!", color);




// function randomColor() {
//   var red = Math.random() * 255; //0-1 0.1 * 255  25.5
//   var blue = Math.random() * 255;
//   var green = Math.random() * 255;

//   return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
// }
//    function colorfulText(text, color){
//   document.write('<h1 style="color: ' + color + ';">' + text + '</h1>');
// } 
// var color = randomColor(); //red
// colorfulText("Hello world", color);
// colorfulText("Bye world", color);





//   var username = prompt ("What is your name?");

// var username = prompt ("Which color?");
// alert("Welcome " + username  + randomColor );

// function randomColor() {
//   var red = Math.random() * 255; //0-1 0.1 * 255  25.5
//   var blue = Math.random() * 255;
//   var green = Math.random() * 255;

//   return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
// }
//   function colorfulText(text, color){
//   document.write('<h1 style="color: ' + color + ';">' + text + '</h1>');
// } 
// var color = randomColor(); //red
// colorfulText(welcome , color);
// colorfulText(username , color);


function getColorUsername() {
  var username = prompt("What's your name?");
  var color = prompt("Which color?");
  var colorfulName = `Welcome ` `<p style = "color:  `+ color +`;">` + username + `</p>`;
  document.write(colorfulName);
}

getColorUsername()