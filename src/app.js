/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let suit = ["♦", "♥", "♠", "♣"];
  let number = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  let cardSuit = suit[Math.floor(Math.random() * suit.length)];
  if (cardSuit == "♦" || cardSuit == "♥") {
    document.querySelector(".container-fluid").style.color = "red";
  }

  let cardNumber = number[Math.floor(Math.random() * number.length)];

  document.querySelector(".suitTop").innerHTML = cardSuit;
  document.querySelector(".cardNumber").innerHTML = cardNumber;
  document.querySelector(".suitBottom").innerHTML = cardSuit;
};
