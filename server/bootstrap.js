Meteor.startup(function () {
    // code to run on server at startup
    if (Games.find().count() === 0) {
        Games.insert({name: "testspel 1"});
        Games.insert({name: "testspel 2"});
    }
});