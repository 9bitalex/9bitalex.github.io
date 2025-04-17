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
    


    // TODO 2 - Create Platforms
    
    createPlatform(350, 550, 50, 50)
    createPlatform(550, 550, 40, 50)
    createPlatform(50, 150, 50, 50)
    createPlatform(750, 500, 25, 50)
    createPlatform(950, 500, 25, 50)
    createPlatform(100, 600, 25, 50)
    createPlatform(100, 300, 25, 50)


    // TODO 3 - Create Collectables
    createCollectable("database", 200, 170, 0.5, 1);
    createCollectable("database", 530, 280, 0, 1);
    createCollectable("database", 890, 280, .1, 1);
    createCollectable("database", 100, 540, 0, 1);
    createCollectable("database", 1200, 100, .1, 1);



    
    // TODO 4 - Create Cannons
    
    createCannon("left", 600, 100);
    createCannon("left", 400, 3000);
    createCannon("right", 500, 3000);
    createCannon("top", 630, 1000);
    createCannon("top", 830, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
