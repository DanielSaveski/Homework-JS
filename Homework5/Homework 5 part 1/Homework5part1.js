let animal = {
    name: 'Dog',
    kind: 'Animal',
    speak: function(message) {
      console.log(`${this.name} says: '${message}'`);
    }
  };
  
  animal.speak("Hey bro!!!");