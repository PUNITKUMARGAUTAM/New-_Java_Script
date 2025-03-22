const canvas = document.getElementById("whiteboard");
const ctx = canvas.getContext("2d");

let drawing = false;

// Start drawing when the mouse is pressed
canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    ctx.beginPath(); // Start a new path
    ctx.moveTo(e.offsetX, e.offsetY); // Move to the mouse position
});

// Draw lines as the mouse moves
canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;
    ctx.lineTo(e.offsetX, e.offsetY); // Draw a line to the new position
    ctx.stroke(); // Render the line
});

// Stop drawing when the mouse is released or leaves the canvas
canvas.addEventListener("mouseup", () => {
    drawing = false;
});

canvas.addEventListener("mouseleave", () => {
    drawing = false;
});

// Clear the canvas
document.getElementById("clear").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Save the canvas as an image
document.getElementById("save").addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "whiteboard.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
});
