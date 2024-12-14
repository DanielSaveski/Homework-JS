function tellStory(arr) {
    let name = arr[0];
    let mood = arr[1];
    let activity = arr[2];
    let story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;

    return story;
  }

  let storyArray = ["Daniel", "In a good mood", "Playing Video Games"];
  let story = tellStory(storyArray);
  console.log(story); 