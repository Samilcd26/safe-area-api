function generateRoomName() {
    // Array of words that can be used to create room names
    var words = ['Blue', 'Green', 'Red', 'Yellow', 'Purple', 'Orange', 'Silver', 'Gold', 'Shiny', 'Bright', 'Mystical', 'Peaceful', 'Legendary', 'Quiet', 'Fast', 'Timely', 'Cosmic', 'Galaxy', 'Alien', 'Martian', 'Traveler', 'Cool', 'Hot', 'Flowery', 'Ocean', 'Mountain', 'Forest', 'Windy', 'Secret', 'Summit'];
  
    // Select a random word
    var randomWord = words[Math.floor(Math.random() * words.length)];
  
    // Generate a random number (between 1000 and 9999)
    var randomNumber = Math.floor(Math.random() * 9000) + 1000;
  
    // Concatenate the word and number to create the room name
    var roomName = randomWord + randomNumber;
  
    return roomName;
  }

  module.exports={ generateRoomName}