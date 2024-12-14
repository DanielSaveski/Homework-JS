let animal = {
    name: 'Dog',
    kind: 'Animal',
    speak: function(message) {
      console.log(`${this.name} says: '${message}'`);
    }
  };
  
  // Example usage:
  animal.speak("Hey bro!!!");