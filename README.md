# Technical-support-challenge
In this challenge, I used JavaScript programming language. The repository contains; Allinone.html which as a standalone file contains HTML, CSS, and JavaScript. It would be the ideal file to download and test the functionality of the app without downloading any other additional files.The other files index.html and script.js go together, where 
script.js is linked to index.html.

# Functionality of the application.
All the user needs to do is to click any of the three buttons depending on the issue the user is concerned about.
The buttons include; 
  1. Pending deposit
  2. Withdrawal not reflecting
  3. Delayed bet payout 
   
# Pending deposit button
When the user clicks on the pending deposit button, it will prompt the user to; 
    "Key the transaction code of the missing deposit?" 
almost immediately it will also prompt; 
    "Key the phone number that transacted".
After the user keys in the required details, the app will 1st convert the entered transaction code to uppercase and compare both the transaction code and phone number with the backend app details. 
(have used variables as indicated under comments in sript.js to compare the user details with)
if the user details match/exists as in backend app details (variables as indicated under comments) the app will 
notify; 
    "Deposit completed! Confirm account balance" 
and the user's pending deposit will have been updated.

if the shared transaction code and phone number (user details) do not match/exist in the backend app (variables as 
indicated under comments) the app will notify;
    "Confirm the correct transaction code" or "Confirm the correct phone number" 
respectively depending on which one not matching the variable. Implies the transaction was not captured on the 
backend application or probably the user didn't make the deposit or correct details were not shared. 

# Withdrawal not reflecting button
Once the button is clicked it populates a prompt;
    "Enter the phone number that transacted the withdrawal"
After the user enters the number, the application confirms whether the number transacted a successful withdrawal by 
verifying if the number exists under the successful withdrawal array (as captured under the withdrawal array variable). 
If the number exists, this notification pops up;
    "Withdrawal successful! Check with your mobile service subscriber."
Where the number does not exist, the below notification pops up;
    "Follow-up initiated! Check back later."

# Delayed bet payout
After the button is clicked, it prompts the user to;
    "Enter pending bet ID?"
The captured bet ID is verified if it exists under wonBets array (as captured under wonBets variables). If the bet ID
exist below notification pops up;
    "Congratulations on your winning 🎉! your bet is settled."
Where the bet ID does not exist under wonBets array, the below notification pops up;
    "You didn't win the Bet 😞! Thanks for betting with us."
