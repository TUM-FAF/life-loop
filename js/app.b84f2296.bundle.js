!function(t){function e(e){for(var i,a,n=e[0],p=e[1],l=e[2],c=0,y=[];c<n.length;c++)a=n[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&y.push(r[a][0]),r[a]=0;for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(t[i]=p[i]);for(h&&h(e);y.length;)y.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,n=1;n<s.length;n++){var p=s[n];0!==r[p]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=s[0]))}return t}var i={},r={0:0},o=[];function a(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var n=window.webpackJsonp=window.webpackJsonp||[],p=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var h=p;o.push([9,1]),s()}([,function(t,e,s){t.exports=s.p+"assets/sky.cb8fe210.png"},function(t,e,s){t.exports=s.p+"assets/platform.fc7d654a.png"},function(t,e,s){t.exports=s.p+"assets/wall.e0c52718.png"},function(t,e,s){t.exports=s.p+"assets/splatform.08064950.png"},function(t,e,s){t.exports=s.p+"assets/star.3bbfad74.png"},function(t,e,s){t.exports=s.p+"assets/bomb.185c1ec9.png"},function(t,e,s){t.exports=s.p+"assets/dude.8615288f.png"},function(t,e,s){t.exports=s.p+"assets/apple.5e351d9e.png"},function(t,e,s){s(0),t.exports=s(10)},function(t,e,s){"use strict";s.r(e);var i=s(0),r=s(1),o=s.n(r),a=s(2),n=s.n(a),p=s(3),l=s.n(p),h=s(4),c=s.n(h),y=s(5),u=s.n(y),d=s(6),f=s.n(d),m=s(7),g=s.n(m),b=s(8),w=s.n(b),x=function(){var t=function(e,s){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])})(e,s)};return function(e,s){function i(){this.constructor=e}t(e,s),e.prototype=null===s?Object.create(s):(i.prototype=s.prototype,new i)}}(),v=function(t){function e(){return t.call(this,{key:"BootScene"})||this}return x(e,t),e.prototype.preload=function(){this.load.image("sky",o.a),this.load.image("ground",n.a),this.load.image("sground",c.a),this.load.image("wall",l.a),this.load.image("star",u.a),this.load.image("bomb",f.a),this.load.image("apple",w.a),this.load.spritesheet("dude",g.a,{frameWidth:32,frameHeight:48})},e.prototype.create=function(){this.scene.start("PlayScene")},e}(i.Scene),_=function(){var t=function(e,s){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])})(e,s)};return function(e,s){function i(){this.constructor=e}t(e,s),e.prototype=null===s?Object.create(s):(i.prototype=s.prototype,new i)}}(),O=function(t){function e(){var e=t.call(this,{key:"PlayScene"})||this;return e.score=0,e}return _(e,t),e.prototype.create=function(){this.input.addPointer(),this.pointer1=this.input.pointer1,this.pointer2=this.input.pointer2,this.cursors=this.input.keyboard.createCursorKeys(),this.add.image(0,0,"sky").setOrigin(0,0),this.scoreText=this.add.text(32,16,"while(🍎) {",{fontSize:"32px",fill:"#000"}),this.finishText=this.add.text(640,170,"Next Level ->",{fontSize:"20px",fill:"#000"}),this.platforms=this.physics.add.staticGroup(),this.platforms.create(400,450,"ground").setScale(2).refreshBody(),this.platforms.create(-50,280,"ground"),this.platforms.create(-50,140,"ground"),this.platforms.create(this.sys.game.canvas.width+40,280,"ground"),this.platforms.create(this.sys.game.canvas.width+40,140,"ground"),this.platforms.create(400,220,"sground"),this.platforms.create(500,350,"sground"),this.platforms.create(10,480,"wall"),this.platforms.create(10,-50,"wall"),this.platforms.create(this.sys.game.canvas.width-10,480,"wall"),this.platforms.create(this.sys.game.canvas.width-10,-50,"wall"),this.player=this.physics.add.sprite(20,200,"dude"),this.player.setBounce(.2),this.player.setCollideWorldBounds(!0),this.anims.create({key:"left",frames:this.anims.generateFrameNumbers("dude",{start:0,end:3}),frameRate:10,repeat:-1}),this.anims.create({key:"turn",frames:[{key:"dude",frame:4}],frameRate:20}),this.anims.create({key:"right",frames:this.anims.generateFrameNumbers("dude",{start:5,end:8}),frameRate:10,repeat:-1}),this.initApples()},e.prototype.update=function(){this.cursors.left.isDown?(this.player.setVelocityX(-160),this.player.anims.play("left",!0)):this.cursors.right.isDown?(this.player.setVelocityX(160),this.player.anims.play("right",!0)):(this.player.setVelocityX(0),this.player.anims.play("turn")),this.cursors.up.isDown&&this.player.body.touching.down&&this.player.setVelocityY(-330),this.player.body.position.x===this.sys.game.canvas.width-this.player.body.width&&this.player.body.velocity.x>0&&(this.player.body.position.x=0,this.nexLevel()),this.handleMobileTouch()},e.prototype.nexLevel=function(){this.score>=11&&(this.scoreText.setText("while(⭐) {"),this.score=0,this.initStars())},e.prototype.initApples=function(){this.apples=this.physics.add.group({key:"apple",repeat:10,setXY:{x:50,y:0,stepX:70}}),this.apples.children.iterate(function(t){t.setBounceY(Phaser.Math.FloatBetween(.4,.8))}),this.physics.add.collider(this.player,this.platforms),this.physics.add.collider(this.apples,this.platforms),this.physics.add.overlap(this.player,this.apples,this.eatApple,null,this)},e.prototype.initStars=function(){this.stars=this.physics.add.group({key:"star",repeat:10,setXY:{x:50,y:0,stepX:70}}),this.stars.children.iterate(function(t){t.setBounceY(Phaser.Math.FloatBetween(.4,.8))}),this.physics.add.collider(this.player,this.platforms),this.physics.add.collider(this.stars,this.platforms),this.physics.add.overlap(this.player,this.stars,this.collectStar,null,this)},e.prototype.handleMobileTouch=function(){var t=this.sys.game.canvas,e=t.width,s=t.height;if(this.pointer1.isDown){var i=this.pointer1.x,r=this.pointer1.y;console.log("1 "+i,r),i<e/2&&r>s/2&&(this.player.setVelocityX(-160),this.player.anims.play("left",!0)),i>e/2&&r>s/2&&(this.player.setVelocityX(160),this.player.anims.play("right",!0)),r<s/2&&this.player.body.touching.down&&this.player.setVelocityY(-330)}if(this.pointer2.isDown){i=this.pointer2.x,r=this.pointer2.y;console.log("2 "+i,r),i<e/2&&r>s/2&&(this.player.setVelocityX(-160),this.player.anims.play("left",!0)),i>e/2&&r>s/2&&(this.player.setVelocityX(160),this.player.anims.play("right",!0)),r<s/2&&this.player.body.touching.down&&this.player.setVelocityY(-330)}this.player.body.position.x===this.sys.game.canvas.width-this.player.body.width&&this.player.body.velocity.x>0&&(this.player.body.position.x=0,this.nexLevel())},e.prototype.collectStar=function(t,e){e.disableBody(!0,!0),this.score+=1,this.score>=11&&this.scoreText.setText("You broke out of the loop!")},e.prototype.eatApple=function(t,e){e.disableBody(!0,!0),this.score+=1,this.score>=11&&this.scoreText.setText("You broke out of the loop!")},e}(i.Scene),S={type:i.AUTO,scale:{mode:i.Scale.FIT,parent:"app",autoCenter:i.Scale.CENTER_BOTH,width:800,height:450},physics:{default:"arcade",arcade:{gravity:{y:400},debug:!1}},scene:[v,O]},k=new i.Game(S);window.game=k}]);