function tellStory(details) {
  let [name, mood, activity] = details;
  let story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
  
  return story;
}

let storyDetails = ["Daniel", "Happy", "Playing Video Games"];
let result = tellStory(storyDetails);

console.log(result);
alert(result);