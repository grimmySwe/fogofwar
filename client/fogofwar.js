Games = new Meteor.Collection("games");
Meteor.subscribe("games");

Template.greeting = function () {
  return Meteor.userId();
};

Template.show_games.helpers({
  games: function() {
    return Games.find();
  }
})