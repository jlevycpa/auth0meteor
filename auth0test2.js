if (Meteor.isClient) {

  Template.hello.helpers({
    userId: function () {
      return Meteor.userId();
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      lock.show();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.methods({
    getServerUser: function(){
      return this.userId;
    }
  })
}
