import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import { Meteor } from 'meteor/meteor';
import Loader from 'angular-ecmascript/module-loader';
import RoutesConfig from '../routes.js';
import ChatsCtrl from '../controllers/chats.controller.js';

const App = "Whatsapp";

Angular.module(App, [
  'angular-meteor',
  'ionic'
]);

new Loader(App)
  .load(ChatsCtrl)
  .load(RoutesConfig);

if(Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
} else {
  Angular.element(document).ready(onReady);
}

function onReady() {
  Angular.bootstrap(document, [App]);
}
