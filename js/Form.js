class Form {
  constructor() {
    this.input= createInput("").attribute("placeholder" , "Enter Your name")
    this.playButton= createButton("Play")
    this.titleImg = createImg("./assets/title.png" , "gameTitle")
    this.greeting = createElement("h2")
    
  }

  setElementPosition(){
this.titleImg.postition(120,100);
this.input.position(vidth/2,height/2);
this.playButton.position(vidth/2 +20,height/2 +60);
this.greeting.position(vidth/2 -300,height/2 -100);

  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      player.name = this.input.value();
      player.index = 1;
      //player.addPlayer();
    });
  }
  
  display(){
this.setElementPosition();
this.handieMousepressed();
  }

}
