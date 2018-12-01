Feature: Employee Self Service Testing

Scenario: ESS Login
Given url opened
Then enter user id and click next
Then enter password
And click login

Scenario: Employee Master 
#Given click on Employee Master
#And click Add new
#Then enter Emp Number
#Then enter Full Name
#Then enter Address
#And click Female
#And click Birth Date
#And click and select Birth Date form dropdown
#Then enter Mobile No
#Then enter Email ID
#And clcik Join Date
#And click Designation
#And click and select Designation form dropdown
#And click Save
#And click on Cancel

#Scenario: Open User Mstaer Page
#Given click user Master 
#And click Add New
#And click Employee No
#And click and select Employee No form dropdown
#And click save

#And click Client Master
#And click Add New 
#Then enter Client Name
#Then enter Contact No
#Then enter client Contact Email
#Then enter client Address
#Then enter City
#Then enter Country
#And Click Is Active
#And click and select Is Active form dropdown
#And click Save

#And click Project Master Page
#And click View
#And click Add New
#And click Employee
#And click and select Employee form dropdown
#And clcik Role
#And click and select Role for dropdown
#And click Save
#And click Cancel
#And click Back
#And click Add New
#Then enter Project Name
#Then enter Project Description
#And click Project Start Date
#And click Client
#And clcik and select Client
#And click Superviser 
#And click and select Superviser 
#And click IS Active
#And click and select IS Active form dropdown
#And click Save
#And click Cencel

Scenario: Timesheet Report
Then click Timesheet Tab
Then click on Timesheet Report
Then click week start date
Then click and select week start date of timesheet report from dropdown
Then click week end date
Then click and select week end date of timesheet report from dropdown
Then click Timesheet Status
Then click and select timesheet report from dropdown
Then click find button

Scenario: Leave
Given click on Leave Tab
And click on Leave Details
Then click on Add Leave button of Leave Details page
Then click on start date
Then click and select start date from dropdown
Then click on end date for add leave
Then click and select end date for add leave from dropdown
Then click on Duration
Then click and select duration from dopdown
Then click on Leave Type
Then click and select Leave Type from dropdown
Then Enter Leave Reason
Then click on Submit button
#Then Click Cencel

Scenario: Leave Manage
And click Manage Leave
#And click Approve

Scenario: Leave Report
And click on Leave
And click Leave Report
And click on Start Date
#And click and select on Start Date form dropdown
And click on End Date
And click on All
And click and select All Type
And click Find

Scenario: Dashboard
And click Report Dashboard

And click Timesheet Report
And click Start Date
And click End Date
And click Employee
And click and select employee form dropdown
And click All
And click and select All form dropdown
And click on Find

#Scenario: Gmail Close
#
#Then Close browser 