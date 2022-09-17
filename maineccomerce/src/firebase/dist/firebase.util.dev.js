"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firestore = exports.auth = exports.signInWithGoogle = void 0;

var _app = _interopRequireDefault(require("firebase/compat/app"));

require("firebase/compat/firestore");

require("firebase/compat/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyBev6goIgiku1Ub1mmp7ldywacjS8IZAQY",
  authDomain: "foodieshub-261ca.firebaseapp.com",
  projectId: "foodieshub-261ca",
  storageBucket: "foodieshub-261ca.appspot.com",
  messagingSenderId: "312774798686",
  appId: "1:312774798686:web:8ccd64ee450bb5c871f3cf",
  measurementId: "G-VW7H6E0MQ5"
};

_app["default"].initializeApp(firebaseConfig);

var firestore = _app["default"].firestore();

exports.firestore = firestore;

var auth = _app["default"].auth();

exports.auth = auth;
var provider = new _app["default"].auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

var signInWithGoogle = function signInWithGoogle() {
  return auth.signInWithPopup(provider);
};

exports.signInWithGoogle = signInWithGoogle;