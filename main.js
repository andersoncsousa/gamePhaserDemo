var game = new Phaser.Game(600, 400, Phaser.AUTO);
game.state.add('state1', demo.stage1);
game.state.start('state1');