var player;

var platform, platform_collider;

var platform2, platform2_collider;

var climbing;

function setup(){
    createCanvas(400,400);

    player = createSprite(200, 200, 50, 50);
    player.shapeColor=("purple");

    platform = createSprite(200, 500, 600, 50);

    platform_collider = createSprite(200, 500, 600, 49);
    platform_collider.visible=false;

    platform2 = createSprite(300, 350, 200, 50);

    platform2_collider = createSprite(300, 380, 200, 10);
    //platform2_collider.shapeColor=("red");
    platform2_collider.visible=false;

    clibming = false
}

function draw(){
    background("green");

    camera.x=player.x;
    camera.y=player.y;

    controls();

    player.collide(platform_collider);
    player.collide(platform2);
    if(climbing === false){
    player.collide(platform2_collider);
    }

    if(keyDown("space")&& player.y >= 250) {
        player.velocityY = -15;
    }else if(player.isTouching(platform) || player.isTouching(platform2)){
        player.velocityY=0;
    }else {
    player.velocityY = player.velocityY + 0.8;
    }

    drawSprites();
}

function controls(){
    if(keyDown("a")){
        player.x=player.x-5;
    }
    if(keyDown("d")){
        player.x=player.x+5;
    }

    if(keyDown("k")){
        climbing=true;
    }
    if(keyDown("j")){
        climbing=false;
    }
}