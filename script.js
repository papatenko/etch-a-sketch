createCanvas()
createResetButton()

function createCanvas(){
    for (let index = 0; index < 256; index++) {
        createDot()
    }
}

function createDot(){
    // Create a new dot element
    var dot = document.createElement("div");

    // Set the dot's style properties
    dot.style.width = "25px"
    dot.style.height = "25px"
    dot.style.backgroundColor = "white"
    dot.id = "dot"

    // Added event listener that would turn each dot into a random color
    dot.addEventListener("mouseover", () => {
        var red = Math.floor(Math.random() * 255)
        var green = Math.floor(Math.random() * 255)
        var blue = Math.floor(Math.random() * 255)

        dot.style.backgroundColor="rgb("+red+","+green+","+blue+")"
    })

    // Add the dot to the page
    document.getElementById('canvas').appendChild(dot);
}

function createResetButton() {
    var resetButton = document.createElement("button")

    resetButton.innerText = "reset the dang square"

    resetButton.addEventListener("mousedown", () => resetCanvas())

    document.body.appendChild(resetButton);
}

function resetCanvas(){
    const canvas = document.querySelector("[id=canvas]")

    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    createCanvas()
}