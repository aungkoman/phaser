setInterval(function(){ 
    for(let i = 1; i < players.length; i++){
        let player = players[i];
        let playerOverText = playerOverTexts[i];
        let rand = Math.floor(Math.random() * Math.floor(4));
        if(rand == 0 ){
            player.setVelocityX(-160);
            player.anims.play('left', true);
        }
        else if(rand == 1){
            player.setVelocityX(160);
            player.anims.play('right', true);
        }
        else if(rand == 2){
            //player.setVelocityY(-330);
            //player.anims.play('turn', true);
        }
        else{
            player.setVelocityX(0);
            player.anims.play('turn',true);
        }
        //playerOverText.setX(player.x-50);
        //playerOverText.setY(player.y-50);
    }
}, 1000);