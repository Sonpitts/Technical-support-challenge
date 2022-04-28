"use strict";

// selecting elements
const depositbtn = document.querySelector(".deposit");
const withdrawalbtn = document.querySelector(".withdrawal");
const betbtn = document.querySelector(".betpayout");

// Deposits Variables
const backendTransactionCode = "QDQ0184ZRU";
const backendPhoneNumber = 723436728;

// Withdrawal Variable
const successfulwithdrawal = [729290290, 782290290];

// Pending bet variable
const wonBets = ["4239", "7394", "7382", "3827"];

// Deposit details capture functionality
depositbtn.addEventListener("click", function () {
  let transactionCode = prompt(
    "Key the transaction code of the missing deposit?"
  );
  transactionCode = transactionCode.toUpperCase();

  console.log(transactionCode);
  let phoneNumber = Number(prompt("Key the phone number that transacted"));
  console.log(phoneNumber);

  if (
    transactionCode === backendTransactionCode &&
    phoneNumber === backendPhoneNumber
  ) {
    alert("Deposit completed");
  } else if (transactionCode !== backendTransactionCode) {
    alert("Confirm the correct transaction code");
  } else if (phoneNumber !== backendPhoneNumber) {
    alert("Confirm the correct phone number");
  }
});

// Withdraw details capture functionality
withdrawalbtn.addEventListener("click", function () {
  let withdrawNumber = Number(
    prompt("Enter the phone number that transacted the withdrawal")
  );
  if (successfulwithdrawal.includes(withdrawNumber)) {
    alert("Withdrawal successfull! Check with your mobile servise subscriber.");
  } else if (withdrawNumber != successfulwithdrawal) {
    alert("Follow-up initiated! Check back later.");
  }
});

// Pending bet ID capture functionality
betbtn.addEventListener("click", function () {
  const betID = prompt("Enter pending bet ID?");
  if (wonBets.includes(betID)) {
    alert("Congratulations on your winning 🎉! your bet is settled.");
  } else {
    alert("You didn't win the Bet 😞! Thanks for betting with us.");
  }
});
