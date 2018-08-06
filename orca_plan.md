* HOME PAGE
*NAV
* FOOTER
FONTS: Roboto - Nunito

componentWillMount() {
  document.title = ‘Contact us | Site Name';
}

for screen readers ^^
https://simplyaccessible.com/article/react-a11y/

[logo goes to home page]
Sign-Up Page
  -list password requirements
Sign-In form

Things you can do with cards:
  * get a new one
  * add value (unregistered/CVV number)
  //
  * register one
  * nickname one(???)
  * add pass -> List of Products! Explain what they are!
  * manage autoload
  * one-time add value (registered)
  * pay for vanpool

customer service/if shit goes wrong:
  * report a lost, stolen or damaged card
  * order replacement card -> pass the card number and current balance to back end/custserv
  * contact customer service


Info/FAQ:
  * the faq page
   ---> contact customer service




User Model:
  fname
  lname  
  username
  email
  phone
  dob
  mailing address: 1/2/city/state/zip
  billing address: 1/2/city/state/zip
  secret question / secret answer
  password
  cards

Card Model:
  UserId
  CVV
  Card number
  Card nickname
  Balance
  Pass
  Auto-Reload Amount (Null if not activated)
  Passenger Type (Adult, Child, Senior)
  Status (active/inactive)

Activity Model:
  CardId
  Date/Time
  Item
  Amount
  balance



Auth wishlist:
  Password reset
