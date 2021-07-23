@tag
Feature: Buy Amazon Kindle 

Scenario: Buying Kindle E-Reader
Given Go to amazon.ca
When Click on hamburger menu (top left corner)
Then Select Kindle under Digital Content and Devices
Then Click Kindle under Kindle E-Reader
Then Click Buy Now
And Verify User is asked for email or mobile number
