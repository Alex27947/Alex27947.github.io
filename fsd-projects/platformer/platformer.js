$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms

  createPlatform(150,600,200,25);
    createPlatform(450,500,200,25);
    createPlatform(800,375,200,25);
    createPlatform(1100,250,200,25);
    createPlatform(200,400,200,25);


    // TODO 3 - Create Collectables
createCollectable("steve", 700, 400);
    createCollectable("steve", 900, 300);
    createCollectable("steve", 400, 550);
    createCollectable("steve", 600, 450);
    createCollectable("steve", 500, 600);


    
    // TODO 4 - Create Cannons

createCannon("top", 400, 1000);
    createCannon("left", 300, 1000);
    createCannon("bottom", 650, 1000);
    
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
