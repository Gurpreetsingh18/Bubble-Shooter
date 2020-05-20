
var bubbles;
var bubblesVel;
var bubblesSize;

function updateBubbles() {
    touch = false;
    for (var i = 0; i < bubbles.length; i++) {
        push();

        //bubble collisions 
        if (dist(bubbles[i].x, bubbles[i].y, player.x, player.y) < bubblesSize / 2) {
            touch = true;
            console.log(touch);
        }
        //update bubbles locations
        bubbles[i].add(bubblesVel[i]);

        //contain bubbles
        //contain player
        if (bubbles[i].x > width + bubblesSize / 2) {
            bubbles[i].x = 0
        }
        if (bubbles[i].x < -bubblesSize / 2) {
            bubbles[i].x = 400
        }
        if (bubbles[i].y > height + bubblesSize / 2) {
            bubbles[i].y = 0
        }
        if (bubbles[i].y < -bubblesSize / 2) {
            bubbles[i].y = 400
        }

        fill(132, 112, 255, 45)
        stroke(255);
        ellipse(bubbles[i].x,bubbles[i].y,bubblesSize);
        pop();
    }
    if (touch == true) {
        playerColor = color(255, 0, 0);
        Health--;
    } else {
        playerColor = color(255);
    }

}