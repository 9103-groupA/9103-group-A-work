// Splitcircle function, using the drawing apple's color
//Using constructor() method to created the splitcircle function
//https://p5js.org/reference/p5/class/
class SplitCircle 
{
    constructor(nx, ny, nRadius, angle, greenRatio) 
    {
        this.nx = nx;                       // Normalized coordinates of the center x of the circle
        this.ny = ny;                       // Normalized coordinates of the center y of the circle
        this.nRadius = nRadius;             // Circle normalization radius
        this.angle = angle;                 // The initial rotation of the circle
        this.greenRatio = greenRatio;       // Part of green in circle
        this.rotatedSpeed = random(1, 4);   // Autorotation rate
        this.activatedRotation = false;     // The sign indicating whether to enable rotation
    }

    // Update 
    update()
    {
        if (!this.activatedRotation) return;
        this.angle += this.rotatedSpeed;
    }

    // Display the apples
    display() 
    {
        // Calculate the position in the canvas
        let xpos = width * this.nx;
        let ypos = height * this.ny;
        let radius = width * this.nRadius;
        drawSplitCircle(xpos, ypos, radius, this.angle, this.greenRatio);
    }
}