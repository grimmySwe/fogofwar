Games = new Meteor.Collection("games");

Meteor.publish("games", function () {
  return Games.find();
});
