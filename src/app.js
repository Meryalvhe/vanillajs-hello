/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function random() {
  var who = ["Mi prima", "Mi amiga", "Mi hermana", "Mi novio"];
  var action = ["lamió", "botó", "dejó", "dañó"];
  var what = ["mi cuchara", "mi libro", "mi lampara", "mis zapatos"];
  var when = [
    "ayer",
    "hace una hora",
    "cuando salió del trabajo",
    "en el gym",
    "en el baño"
  ];

  var rand_who = Math.floor(Math.random() * who.length);
  var rand_action = Math.floor(Math.random() * action.length);
  var rand_what = Math.floor(Math.random() * what.length);
  var rand_when = Math.floor(Math.random() * when.length);

  document.getElementById("excuse").innerHTML =
    who[rand_who] +
    " " +
    action[rand_action] +
    " " +
    what[rand_what] +
    " " +
    when[rand_when];
};
