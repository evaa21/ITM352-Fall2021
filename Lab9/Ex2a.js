while(true) {
    moved = 
    controller.move();
    sleep(200);
    if(!moved) {
    controller.rotate();
     }
    }
    