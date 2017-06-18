import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Resolutions = new Mongo.Collection('resolutions');

if(Meteor.isServer){
  Meteor.publish('resolutions', function(){
    return Resolutions.find({ owner : this.userId })
  })
}

Meteor.methods({
  'resolutions.insert'(text){
    check(text, String)
    if(!Meteor.userId() ){
      throw new Meteor.Error('not-authorized');
    }
    Resolutions.insert({
      text: text,
      complete: false,
      createdAt: new Date(),
      owner : Meteor.userId(),
    });
  },
  'resolutions.setComplete'(resolution){
    check(resolution._id, String);
    check(resolution.complete, Boolean);
    if(Meteor.userId() != resolution.owner)
      throw new Error('not-authorized');
    Resolutions.update(resolution._id, { $set : { complete : !resolution.complete}})
  },
  'resolutions.remove'(resolution){
    check(resolution._id, String)
    if(Meteor.userId() != resolution.owner)
      throw new Error('not-authorized');
    Resolutions.remove(resolution._id);
  }
});
