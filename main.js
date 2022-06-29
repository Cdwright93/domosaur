//1.Change the span with the class `mess-with-me` to have a font size of 40px.
function messWithMe() {
  let messWithMe = document.querySelector(".mess-with-me");
  messWithMe.style.fontSize = "40px";
}
//2.Change the paragraph with the class `mess-with-me` to have a background color of green.
function messWithParagraph() {
  let messWithParagraph = document.querySelector(".mess-with-me");
  messWithParagraph.style.backgroundColor = "green";
}
//3. Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. If you're not sure of how to do this, look up the CSS rule for that!
function hideDino() {
  let dino = document.querySelector("#hide-me");
  dino.style.display = "none";
}
//4. Change the first dinosaur image so that the image's dimensions are 324 pixels wide.
function changeDinoSize() {
  let dino = document.querySelector("#triceratops");
  dino.style.width = "324px";
}
//part 2 - -- - - - - - - --
//1. Add an event listener to the span with the class `mess-with-me` so that when it is clicked, the font color changes to orange.
function messWithColor() {
  let messWithColor = document.querySelector(".mess-with-me");
  messWithColor.addEventListener("click", function () {
    messWithColor.style.color = "orange";
  });
}
//2. Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.
function addBorder() {
  let dino = document.querySelector("#triceratops");
  dino.addEventListener("click", function () {
    dino.style.border = "5px solid red";
  });
}
//3. Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.
function makeGhost() {
  let dino = document.querySelector("#feathers");
  dino.addEventListener("click", function () {
    dino.style.opacity = "0.5";
  });
}
//4. Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice.
function messWithBG() {
  let dinos = document.querySelector("#row");
  let toggler = document.querySelector("#toggle");
  let toggleState = false;
  toggler.addEventListener("click", function () {
    toggleState = !toggleState;
    if (toggleState === false) {
      dinos.style.backgroundColor = "lightgreen";
    } else {
      dinos.style.backgroundColor = "white";
    }
  });
}
//5. Add an event listener to the dinosaur with the id `biggify` that, when HOVERED, grows the image to 200 pixels wide. Note that this is a different event, and you'll likely need to do some research on what different string you'll need to pass. It's not gonna be `click`!

function biggify() {
  let dino = document.querySelector("#biggify");
  //need to add a mouseover with a boolean that will reduce the size of the image back to its original size when the mouse is no longer hovering over the image.
  let shrink = false;
  dino.addEventListener("mouseover", function () {
    shrink = !shrink;
    if (shrink == true) {
      dino.style.width = "200px";
    }
  });
  dino.addEventListener("mouseleave", function () {
    shrink = !shrink;
    if (shrink == false) {
      dino.style.width = "324px";
    }
  });
  //im aware this is not EXACTLY what the stretch goal was asking for but I didnt want to create any void states so i made it conditional. I am comofortable with react and changing states via hooks, which is why i wrote it like this.
}

//Stretch Goals - - - - - -- - - - - -
//1. Make it so that when you click the "Switch Background Color" button, you switch it back and forth from white to whatever color you chose. This doesn't require another event listener, but, rather, a rewrite of the function you made into your event listener. **Hint:** when you haven't explicitly set the background color **through JavaScript** yet, its value will always be an empty string, no matter what you've set it to in other sources (like the browser's default white background, or through your own CSS file).

//2. Add a new event listener so that when the `biggify` dinosaur is no longer hovered, they change back to their original size.  **Hint:** same as the above one, but for its width! **Hint 2:** You'll have to use a different kind of event than you did before, but... it's a related event with a similar name.

messWithMe();
messWithParagraph();
hideDino();
changeDinoSize();
messWithColor();
addBorder();
makeGhost();
messWithBG();
biggify();
