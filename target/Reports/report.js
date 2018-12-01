$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/demo.feature");
formatter.feature({
  "line": 1,
  "name": "Employee Self Service Testing",
  "description": "",
  "id": "employee-self-service-testing",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "ESS Login",
  "description": "",
  "id": "employee-self-service-testing;ess-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "url opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter user id and click next",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "enter password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.url_opened()"
});
formatter.result({
  "duration": 311447346803,
  "error_message": "org.openqa.selenium.TimeoutException: Timeout loading page after 300000ms\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-35I8T5P\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\spnaik\\AppData\\Local\\Temp\\rust_mozprofile.illY6XYdIjJt, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d63.0.3, platformVersion\u003d10.0, moz:processID\u003d12944.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: adb18808-5651-489b-a570-3ce16254e9c0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:364)\r\n\tat gmailLogin.GmailTesting.StepDefinition.url_opened(StepDefinition.java:30)\r\n\tat ✽.Given url opened(src/test/java/demo.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.enter_user_id_and_click_next()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.enter_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("Scenario Failed");
formatter.after({
  "duration": 113849486,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Employee Master",
  "description": "",
  "id": "employee-self-service-testing;employee-master",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.write("Scenario passed");
formatter.after({
  "duration": 605044,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "#Given click on Employee Master"
    },
    {
      "line": 11,
      "value": "#And click Add new"
    },
    {
      "line": 12,
      "value": "#Then enter Emp Number"
    },
    {
      "line": 13,
      "value": "#Then enter Full Name"
    },
    {
      "line": 14,
      "value": "#Then enter Address"
    },
    {
      "line": 15,
      "value": "#And click Female"
    },
    {
      "line": 16,
      "value": "#And click Birth Date"
    },
    {
      "line": 17,
      "value": "#And click and select Birth Date form dropdown"
    },
    {
      "line": 18,
      "value": "#Then enter Mobile No"
    },
    {
      "line": 19,
      "value": "#Then enter Email ID"
    },
    {
      "line": 20,
      "value": "#And clcik Join Date"
    },
    {
      "line": 21,
      "value": "#And click Designation"
    },
    {
      "line": 22,
      "value": "#And click and select Designation form dropdown"
    },
    {
      "line": 23,
      "value": "#And click Save"
    },
    {
      "line": 24,
      "value": "#And click on Cancel"
    },
    {
      "line": 26,
      "value": "#Scenario: Open User Mstaer Page"
    },
    {
      "line": 27,
      "value": "#Given click user Master"
    },
    {
      "line": 28,
      "value": "#And click Add New"
    },
    {
      "line": 29,
      "value": "#And click Employee No"
    },
    {
      "line": 30,
      "value": "#And click and select Employee No form dropdown"
    },
    {
      "line": 31,
      "value": "#And click save"
    },
    {
      "line": 33,
      "value": "#And click Client Master"
    },
    {
      "line": 34,
      "value": "#And click Add New"
    },
    {
      "line": 35,
      "value": "#Then enter Client Name"
    },
    {
      "line": 36,
      "value": "#Then enter Contact No"
    },
    {
      "line": 37,
      "value": "#Then enter client Contact Email"
    },
    {
      "line": 38,
      "value": "#Then enter client Address"
    },
    {
      "line": 39,
      "value": "#Then enter City"
    },
    {
      "line": 40,
      "value": "#Then enter Country"
    },
    {
      "line": 41,
      "value": "#And Click Is Active"
    },
    {
      "line": 42,
      "value": "#And click and select Is Active form dropdown"
    },
    {
      "line": 43,
      "value": "#And click Save"
    },
    {
      "line": 45,
      "value": "#And click Project Master Page"
    },
    {
      "line": 46,
      "value": "#And click View"
    },
    {
      "line": 47,
      "value": "#And click Add New"
    },
    {
      "line": 48,
      "value": "#And click Employee"
    },
    {
      "line": 49,
      "value": "#And click and select Employee form dropdown"
    },
    {
      "line": 50,
      "value": "#And clcik Role"
    },
    {
      "line": 51,
      "value": "#And click and select Role for dropdown"
    },
    {
      "line": 52,
      "value": "#And click Save"
    },
    {
      "line": 53,
      "value": "#And click Cancel"
    },
    {
      "line": 54,
      "value": "#And click Back"
    },
    {
      "line": 55,
      "value": "#And click Add New"
    },
    {
      "line": 56,
      "value": "#Then enter Project Name"
    },
    {
      "line": 57,
      "value": "#Then enter Project Description"
    },
    {
      "line": 58,
      "value": "#And click Project Start Date"
    },
    {
      "line": 59,
      "value": "#And click Client"
    },
    {
      "line": 60,
      "value": "#And clcik and select Client"
    },
    {
      "line": 61,
      "value": "#And click Superviser"
    },
    {
      "line": 62,
      "value": "#And click and select Superviser"
    },
    {
      "line": 63,
      "value": "#And click IS Active"
    },
    {
      "line": 64,
      "value": "#And click and select IS Active form dropdown"
    },
    {
      "line": 65,
      "value": "#And click Save"
    },
    {
      "line": 66,
      "value": "#And click Cencel"
    }
  ],
  "line": 68,
  "name": "Timesheet Report",
  "description": "",
  "id": "employee-self-service-testing;timesheet-report",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 69,
  "name": "click Timesheet Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "click on Timesheet Report",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "click week start date",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "click and select week start date of timesheet report from dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "click week end date",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "click and select week end date of timesheet report from dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "click Timesheet Status",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "click and select timesheet report from dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "click find button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.click_Timesheet_Tab()"
});
formatter.result({
  "duration": 64865620,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: /html/body/ui-view/div/div/nav/ul/li[6]/a\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-35I8T5P\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\spnaik\\AppData\\Local\\Temp\\rust_mozprofile.illY6XYdIjJt, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d63.0.3, platformVersion\u003d10.0, moz:processID\u003d12944.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: adb18808-5651-489b-a570-3ce16254e9c0\n*** Element info: {Using\u003dxpath, value\u003d/html/body/ui-view/div/div/nav/ul/li[6]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat gmailLogin.GmailTesting.StepDefinition.click_Timesheet_Tab(StepDefinition.java:338)\r\n\tat ✽.Then click Timesheet Tab(src/test/java/demo.feature:69)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.click_on_Timesheet_Report()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_week_start_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_and_select_week_start_date_of_timesheet_report_from_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_week_end_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_and_select_week_end_date_of_timesheet_report_from_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_Timesheet_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_and_select_timesheet_report_from_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_find_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.write("Scenario Failed");
formatter.after({
  "duration": 26293442,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Leave",
  "description": "",
  "id": "employee-self-service-testing;leave",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 80,
  "name": "click on Leave Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "click on Leave Details",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "click on Add Leave button of Leave Details page",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "click on start date",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "click and select start date from dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "click on end date for add leave",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "click and select end date for add leave from dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "click on Duration",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "click and select duration from dopdown",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "click on Leave Type",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "click and select Leave Type from dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "Enter Leave Reason",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.click_on_Leave_Tab()"
});
formatter.result({
  "duration": 15407795,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: /html/body/ui-view/div/div/nav/ul/li[8]/a\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-35I8T5P\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\spnaik\\AppData\\Local\\Temp\\rust_mozprofile.illY6XYdIjJt, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d63.0.3, platformVersion\u003d10.0, moz:processID\u003d12944.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: adb18808-5651-489b-a570-3ce16254e9c0\n*** Element info: {Using\u003dxpath, value\u003d/html/body/ui-view/div/div/nav/ul/li[8]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat gmailLogin.GmailTesting.StepDefinition.click_on_Leave_Tab(StepDefinition.java:398)\r\n\tat ✽.Given click on Leave Tab(src/test/java/demo.feature:80)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.click_on_Leave_Details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_on_Add_Leave_button_of_Leave_Details_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_start_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_and_select_start_date_from_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_end_date_for_add_leave()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_and_select_end_sdate_from_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_on_Duration()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_and_select_duration_from_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_on_Leave_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_and_select_Type_from_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.Enter_Leave_Reason()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_on_Submit_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.write("Scenario Failed");
formatter.after({
  "duration": 19244194,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 93,
      "value": "#Then Click Cencel"
    }
  ],
  "line": 95,
  "name": "Leave Manage",
  "description": "",
  "id": "employee-self-service-testing;leave-manage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 96,
  "name": "click Manage Leave",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.click_Manage_Leave()"
});
formatter.result({
  "duration": 22238569,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: /html/body/ui-view/div/div/nav/ul/li[8]/ul/li[2]/a\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-35I8T5P\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\spnaik\\AppData\\Local\\Temp\\rust_mozprofile.illY6XYdIjJt, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d63.0.3, platformVersion\u003d10.0, moz:processID\u003d12944.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: adb18808-5651-489b-a570-3ce16254e9c0\n*** Element info: {Using\u003dxpath, value\u003d/html/body/ui-view/div/div/nav/ul/li[8]/ul/li[2]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat gmailLogin.GmailTesting.StepDefinition.click_Manage_Leave(StepDefinition.java:486)\r\n\tat ✽.And click Manage Leave(src/test/java/demo.feature:96)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.write("Scenario Failed");
formatter.after({
  "duration": 22396384,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 97,
      "value": "#And click Approve"
    }
  ],
  "line": 99,
  "name": "Leave Report",
  "description": "",
  "id": "employee-self-service-testing;leave-report",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 100,
  "name": "click on Leave",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "click Leave Report",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "click on Start Date",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 103,
      "value": "#And click and select on Start Date form dropdown"
    }
  ],
  "line": 104,
  "name": "click on End Date",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "click on All",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "click and select All Type",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "click Find",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.click_on_Leave()"
});
formatter.result({
  "duration": 16478574,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: /html/body/ui-view/div/div/nav/ul/li[8]/a\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-35I8T5P\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\spnaik\\AppData\\Local\\Temp\\rust_mozprofile.illY6XYdIjJt, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d63.0.3, platformVersion\u003d10.0, moz:processID\u003d12944.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: adb18808-5651-489b-a570-3ce16254e9c0\n*** Element info: {Using\u003dxpath, value\u003d/html/body/ui-view/div/div/nav/ul/li[8]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat gmailLogin.GmailTesting.StepDefinition.click_on_Leave(StepDefinition.java:499)\r\n\tat ✽.And click on Leave(src/test/java/demo.feature:100)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.click_Leave_Report()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_on_Start_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_on_End_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_on_All()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_and_select_All_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_Find()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png");
formatter.write("Scenario Failed");
formatter.after({
  "duration": 10955044,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "Dashboard",
  "description": "",
  "id": "employee-self-service-testing;dashboard",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 110,
  "name": "click Report Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "click Timesheet Report",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "click Start Date",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "click End Date",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "click Employee",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "click and select employee form dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "click All",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "click and select All form dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "click on Find",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.click_Report_Dashboard()"
});
formatter.result({
  "duration": 13618367,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: /html/body/ui-view/div/div/nav/ul/li[9]/a\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-35I8T5P\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\spnaik\\AppData\\Local\\Temp\\rust_mozprofile.illY6XYdIjJt, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d63.0.3, platformVersion\u003d10.0, moz:processID\u003d12944.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: adb18808-5651-489b-a570-3ce16254e9c0\n*** Element info: {Using\u003dxpath, value\u003d/html/body/ui-view/div/div/nav/ul/li[9]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat gmailLogin.GmailTesting.StepDefinition.click_Report_Dashboard(StepDefinition.java:558)\r\n\tat ✽.And click Report Dashboard(src/test/java/demo.feature:110)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.click_Timesheet_Report()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_Start_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_End_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_Employee()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_and_select_employee_form_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_All()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_and_select_All_form_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_on_Find()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded5.png");
formatter.write("Scenario Failed");
formatter.after({
  "duration": 16575730,
  "status": "passed"
});
});