package gmailLogin.GmailTesting;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;

import cucumber.api.java.en.Then;

public class StepDefinition {

	public static WebDriver obj = null;
	
	@Given("^url opened$")

	public void url_opened() {

		System.setProperty("webdriver.gecko.driver", "F:\\geckodriver-v0.21.0-win64\\geckodriver.exe");

		obj = new FirefoxDriver();

		obj.manage().window().maximize();

		obj.get("http://18.220.44.241:8080/");

	}

	@Then("^enter user id and click next$")

	public void enter_user_id_and_click_next() throws InterruptedException {

		obj.findElement(By.xpath("/html/body/div/div/div/div/div/div/div/form[1]/div[1]/input")).sendKeys("admin");

		// obj.findElement(By.xpath("/html/body/div[1]/div[1]/div[2]/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/content/span")).click();

		Thread.sleep(2000);

	}

	@Then("^enter password$")

	public void enter_password() {

		obj.findElement(By.xpath("/html/body/div/div/div/div/div/div/div/form[1]/div[2]/input")).sendKeys("admin");

	}

	@Then("^click login$")

	public void click_login() throws InterruptedException {

		obj.findElement(By.xpath("/html/body/div/div/div/div/div/div/div/form[1]/div[3]/div/input")).click();

		Thread.sleep(6000);

	}

	@Given("^click on Employee Master$")
	public void click_on_Employee_Master() throws Throwable 
	{
	  obj.findElement(By.xpath("/html/body/ui-view/div/div/nav/ul/li[2]/a")).click(); 
	  Thread.sleep(3000);
	}
	
//	 @Then("^click Add new$")
//	 public void click_Add_new() throws Throwable {
//	 obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[1]/button")).click();
//	 }
//	
//	 @Then("^enter Emp Number$")
//	 public void enter_Emp_Number() throws InterruptedException {
//	 obj.findElement(By.xpath("//*[@id='emp_Number']")).sendKeys("9765");
//	 Thread.sleep(3000);
//	 }
//	
//	 @Then("^enter Full Name$")
//	 public void enter_Full_Name() {
//	 obj.findElement(By.xpath("//*[@id='fullName']")).sendKeys("Sheela L Naik");
//	 }
//	
//	 @Then("^enter Address$")
//	 public void enter_Address() throws Throwable {
//	 obj.findElement(By.xpath("//*[@id='address']")).sendKeys("pune");
//	 }
//	
//	 @Then("^click Female$")
//	 public void click_Female() {
//	 obj.findElement(By.xpath("/html/body/div/div/div/form/div[1]/div/div/div[1]/div[5]/div/label[2]")).click();
//	 }
//	
//	 @Then("^click Birth Date$")
//	 public void click_Birth_Date() {
//	 obj.findElement(By.xpath("/html/body/div/div/div/form/div[1]/div/div/div[1]/div[6]/div/p/span/button")).click();
//	 }
//	
//	 // @Then("^click and select Birth Date form dropdown")
//	 // public void click_and_select_Birth_Date_form_dropdown()
//	 // {
//	 //obj.findElement(By.xpath("/html/body/div/div/div/form/div[1]/div/div/div[1]/div[6]/div/p/div/ul/li[1]/div/div/div/table/tbody/tr[2]/td[2]/button")).click();
//	 // }
//	
//	 @Then("^enter Mobile No$")
//	 public void enter_Mobile_No() throws Throwable {
//	
//	 obj.findElement(By.xpath("//*[@id='mobileNo']")).sendKeys("1134567890");
//	 }
//	
//	 @Then("^enter Email ID$")
//	 public void enter_email_ID() throws Throwable {
//	
//		 obj.findElement(By.xpath("//*[@id='email']")).sendKeys("sln@gmail.com");
//	 }
//	
//	 @Then("^clcik Join Date$")
//	 public void click_Join_Date() {
//		 obj.findElement(By.xpath("/html/body/div/div/div/form/div[1]/div/div/div[2]/div[3]/div/p/input")).click();
//	 }
//	
//	 @Then("^click Designation$")
//	 public void click_Designation() {
//		 obj.findElement(By.xpath("//*[@id='selectDesignation']")).click();
//	 }
//	
//	 @Then("^click and select Designation form dropdown$")
//	 public void click_and_select_Designation_form_dropdown() throws Throwable
//	 {
//		 obj.findElement(By.xpath("/html/body/div/div/div/form/div[1]/div/div/div[2]/div[4]/div/select/option[4]")).click();
//	 }
//	
////	 @Then("^click Save$")
////	 public void click_Save() throws Throwable {
////	 obj.findElement(By.xpath("/html/body/div/div/div/form/div[2]/button[1]")).click();
////	 }
//	 
//	 @Then("^click on Cancel")
//	 public void click_on_Cancel() throws Throwable {
//	 obj.findElement(By.xpath("/html/body/div/div/div/form/div[2]/button[2]")).click();
//	 } 

//	 @Then("^click user Master")
//	 public void click_user_Master() throws Throwable {
//	 obj.findElement(By.xpath("/html/body/ui-view/div/div/nav/ul/li[3]/a")).click();
//	 Thread.sleep(3000);
//	 }
	//
	// @Then("^click Add New$")
	// public void click_Add_New() throws Throwable {
	// obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[1]/button")).click();
	// Thread.sleep(2000);
	// }
	//
	// @Then("^click Employee No$")
	// public void click_Employee_No() throws Throwable {
	// obj.findElement(By.xpath("//*[@id='selectEmp']")).click();
	// }
	//
	// @Then("^click and select Employee No form dropdown$")
	// public void click_and_select_Employee_No_form_dropdown() throws Throwable
	// {
	// obj.findElement(By.xpath("/html/body/div[1]/div/div/form/div/div[1]/div/div[1]/div[2]/div/select/option[2]")).click();
	// }
	//
	// @Then("^click save$")
	// public void click_save() throws Throwable {
	// obj.findElement(By.xpath("/html/body/div[1]/div/div/form/div/div[2]/button[1]")).click();
	// }
	//
	// @Then("^click Client Master$")
	// public void click_Client_Master() throws Throwable {
	// obj.findElement(By.xpath("/html/body/ui-view/div/div/nav/ul/li[4]/a")).click();
	// }

	// @Then("^click Add New$")
	// public void click_Add_New()
	// {
	// obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[1]/button")).click();
	// }
	//
	// @Then("^enter Client Name$")
	// public void enter_Client_Name() throws Throwable {
	// obj.findElement(By.xpath("//*[@id='siteName']")).sendKeys("SheelaNaik");
	// }
	//
	// @Then("^enter Contact No$")
	// public void enter_Contact_No() throws Throwable {
	// obj.findElement(By.xpath("//*[@id='contactNumber']")).sendKeys("9876543210");
	// }
	//
	// @Then("^enter client Contact Email$")
	// public void enter_client_Contact_Email() throws Throwable {
	// obj.findElement(By.xpath("//*[@id='siteEmail']")).sendKeys("sh@gmail.com");
	// }
	//
	// @Then("^enter client Address$")
	// public void enter_client_Address() throws Throwable {
	// obj.findElement(By.xpath("//*[@id='siteAddress']")).sendKeys("pune");
	// }
	//
	// @Then("^enter City$")
	// public void enter_City() throws Throwable {
	// obj.findElement(By.xpath("//*[@id='city']")).sendKeys("pune");
	// }
	//
	// @Then("^enter Country$")
	// public void enter_Country() throws Throwable {
	// obj.findElement(By.xpath("//*[@id='country']")).sendKeys("pune");
	// }
	//
	// @Then("^Click Is Active$")
	// public void click_Is_Active() throws Throwable {
	// obj.findElement(By.xpath("/html/body/div[1]/div/div/form/div[1]/div/div/div[2]/div[3]/div/select")).click();
	// }
	//
	// @Then("^click and select Is Active form dropdown$")
	// public void click_and_select_Is_Active_form_dropdown() throws Throwable {
	// obj.findElement(By.xpath("/html/body/div[1]/div/div/form/div[1]/div/div/div[2]/div[3]/div/select/option[2]")).click();
	// }
	//
	// @Then("^click Save$")
	// public void click_Save() throws Throwable {
	// obj.findElement(By.xpath("/html/body/div[1]/div/div/form/div[2]/button[1]")).click();
	// }
	
//	//Projec Master Page
//
//	@Then("^click Project Master Page$")
//	public void click_Project_Master_Page() throws Throwable {
//		obj.findElement(By.xpath("/html/body/ui-view/div/div/nav/ul/li[5]/a")).click();
//	}
//
//	@Then("^click View$")
//	public void click_View() throws InterruptedException {
//		obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div/div[1]/table/tbody/tr[2]/td[9]/input")).click();
//	
//		Thread.sleep(2000);
//	}
//	
//
//	@Then("^click Add New$")
//	public void click_Add_New() throws InterruptedException {
//		obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[1]/button")).click();
//		Thread.sleep(2000);
//	}
//
//	@Then("^click Employee$")
//	public void click_Employee() {
//		obj.findElement(By.xpath("/html/body/div/div/div/form/div[2]/div/div/div/div[2]/div/select")).click();
//	}
//
//	@Then("^click and select Employee form dropdown$")
//	public void click_and_select_Employee_form_dropdown() {
//		obj.findElement(By.xpath("/html/body/div/div/div/form/div[2]/div/div/div/div[2]/div/select/option[3]")).click();
//	}
//
//	@Then("^clcik Role$")
//	public void clcik_Role() throws Throwable {
//		obj.findElement(By.xpath("/html/body/div/div/div/form/div[2]/div/div/div/div[3]/div/select")).click();
//	}
//
//	@Then("^click and select Role for dropdown$")
//	public void click_and_select_Role_for_dropdown() throws Throwable {
//		obj.findElement(By.xpath("/html/body/div/div/div/form/div[2]/div/div/div/div[3]/div/select/option[4]")).click();
//	}
//
//	@Then("^click Save$")
//	public void click_Save() throws Throwable {
//		obj.findElement(By.xpath("/html/body/div/div/div/form/div[3]/button[1]")).click();
//	}
//
//	@Then("^click Cancel$")
//	public void click_Cancel() throws Throwable {
//		obj.findElement(By.xpath("/html/body/div/div/div/form/div[3]/button[2]")).click();
//	}
//
//	@Then("^click Back$")
//	public void click_Back() throws Throwable {
//		obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div/button")).click();
//	}
//	
//	@Then("^enter Project Name$")
//	public void enter_Project_Name() throws Throwable {
//	   obj.findElement(By.xpath("//*[@id='projectName']")).sendKeys("abc");
//	}
//
//	@Then("^enter Project Description$")
//	public void enter_Project_Description() throws Throwable {
//		  obj.findElement(By.xpath("//*[@id='projectDesc']")).sendKeys("abc");
//	}
//
//	@Then("^click Project Start Date$")
//	public void click_Project_Start_Date() throws Throwable {
//		  obj.findElement(By.xpath("/html/body/div/div/div/form/div[2]/div/div/div/div[4]/div/p/span/button")).click();
//	}
//
//	@Then("^click Client$")
//	public void click_Client() throws Throwable {
//		obj.findElement(By.xpath("//*[@id='selectSite']")).click();
//	}
//
//	@Then("^clcik and select Client$")
//	public void clcik_and_select_Client() throws Throwable {
//		obj.findElement(By.xpath("/html/body/div/div/div/form/div[2]/div/div/div/div[5]/div/select/option[4]")).click();
//	}
//
//	@Then("^click Superviser$")
//	public void click_Superviser() throws Throwable {
//		obj.findElement(By.xpath("/html/body/div/div/div/form/div[2]/div/div/div/div[6]/div/select")).click();
//	}
//
//	@Then("^click and select Superviser$")
//	public void click_and_select_Superviser() throws Throwable {
//		obj.findElement(By.xpath("/html/body/div/div/div/form/div[2]/div/div/div/div[6]/div/select/option[2]")).click();
//	}
//
//	@Then("^click IS Active$")
//	public void click_IS_Active() throws Throwable {
//		obj.findElement(By.xpath("/html/body/div/div/div/form/div[2]/div/div/div/div[7]/div/select")).click();
//	}
//
//	@Then("^click and select IS Active form dropdown$")
//	public void click_and_select_IS_Active_form_dropdown() throws Throwable {
//		obj.findElement(By.xpath("/html/body/div/div/div/form/div[2]/div/div/div/div[7]/div/select/option[2]")).click();
//	}
//
//	@Then("^click Cencel$")
//	public void click_Cencel() throws Throwable {
//		obj.findElement(By.xpath("/html/body/div/div/div/form/div[2]/div/div/div/div[7]/div/select/option[2]")).click();
//	}
	
	
	@Then("^click Timesheet Tab")
	public void click_Timesheet_Tab()
	{
		obj.findElement(By.xpath("/html/body/ui-view/div/div/nav/ul/li[6]/a")).click();
	}
	
	@Then("^click on Timesheet Report$")

    public void click_on_Timesheet_Report() throws InterruptedException {

       obj.findElement(By.xpath("/html/body/ui-view/div/div/nav/ul/li[6]/ul/li[2]/a")).click();

       Thread.sleep(6000);
    }
    
    @Then ("^click week start date$")
    public void click_week_start_date()
    {
        obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div[1]/form/div[1]/p/span/button")).click();
    }
    
    
    @Then ("^click and select week start date of timesheet report from dropdown$")
    public void click_and_select_week_start_date_of_timesheet_report_from_dropdown()
    {
        obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div[1]/form/div[1]/p/div/ul/li[1]/div/div/div/table/tbody/tr[1]/td[5]/button")).click();
    }
  
  
    @Then ("^click week end date$")
    public void click_week_end_date()
    {
        obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div[1]/form/div[2]/p/span/button")).click();
    }
  
    @Then ("^click and select week end date of timesheet report from dropdown$")
    public void click_and_select_week_end_date_of_timesheet_report_from_dropdown()
    {
        obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div[1]/form/div[2]/p/div/ul/li[1]/div/div/div/table/tbody/tr[4]/td[5]/button")).click();
    }
  
    @Then ("^click Timesheet Status$")
    public void click_Timesheet_Status()
    {
        obj.findElement(By.xpath("//*[@id=\"timestatus\"]")).click();
    }
    
    @Then ("^click and select timesheet report from dropdown$")
    public void click_and_select_timesheet_report_from_dropdown()
    {
        obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div[1]/form/div[3]/select/option[1]")).click();
    }
    
    @Then("^click find button$")
    public void click_find_button() throws InterruptedException
    {
        obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div[1]/form/div[4]/input")).click();
        Thread.sleep(3000);
    }

	
	@Given("click on Leave Tab")
	 public void click_on_Leave_Tab() throws InterruptedException {
	      obj.findElement(By.xpath("/html/body/ui-view/div/div/nav/ul/li[8]/a")).click();
	      Thread.sleep(3000);
	 }

	 @Then("click on Leave Details")
	 public void click_on_Leave_Details() throws InterruptedException {
	      obj.findElement(By.xpath("/html/body/ui-view/div/div/nav/ul/li[8]/ul/li[1]/a")).click();
	      Thread.sleep(3000);
	 }

	 @Then("click on Add Leave button of Leave Details page")
	 public void click_on_Add_Leave_button_of_Leave_Details_page() throws InterruptedException {
	 obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[1]/button")).click();
	 Thread.sleep(3000);
	    //  obj.findElement(By.linkText("Add Leave")).click();
	 }

	 @Then("click on start date")
	 public void click_start_date() throws InterruptedException {
	      obj.findElement(By.xpath("/html/body/div/div/div/form/div[1]/div/div/div[1]/div[2]/p/span/button")).click();
	 }

	 @Then("click and select start date from dropdown")
	 public void click_and_select_start_date_from_dropdown() throws InterruptedException {
	      obj.findElement(By.xpath("/html/body/div/div/div/form/div[1]/div/div/div[1]/div[2]/p/div/ul/li[1]/div/div/div/table/tbody/tr[5]/td[6]/button")).click();
	 }

	 @Then("click on end date for add leave")
	 public void click_end_date_for_add_leave() throws InterruptedException {
	      obj.findElement(By.xpath("/html/body/div/div/div/form/div[1]/div/div/div[2]/div[2]/p/span/button")).click();
	 }

	 @Then("click and select end date for add leave from dropdown")
	 public void click_and_select_end_sdate_from_dropdown() throws InterruptedException {
	      obj.findElement(By.xpath("/html/body/div/div/div/form/div[1]/div/div/div[2]/div[2]/p/div/ul/li[1]/div/div/div/table/tbody/tr[5]/td[7]/button")).click();
	      Thread.sleep(3000);
	 }

	 @Then("click on Duration")
	 public void click_on_Duration() throws InterruptedException
	 {
	      obj.findElement(By.xpath("/html/body/div/div/div/form/div[1]/div/div/div[3]/div[2]/select")).click();
	      Thread.sleep(3000);
	 }

	 @Then("click and select duration from dopdown")
	 public void click_and_select_duration_from_dropdown() throws InterruptedException
	 {
	      obj.findElement(By.xpath("/html/body/div/div/div/form/div[1]/div/div/div[3]/div[2]/select/option")).click();
	 }

	 @Then("click on Leave Type")
	 public void click_on_Leave_Type() throws InterruptedException
	 {
	      obj.findElement(By.xpath("/html/body/div/div/div/form/div[1]/div/div/div[5]/div[2]/select")).click();
	      Thread.sleep(3000);
	 }

	 @Then("click and select Leave Type from dropdown")
	 public void click_and_select_Type_from_dropdown() throws InterruptedException
	 {
	      obj.findElement(By.xpath("/html/body/div/div/div/form/div[1]/div/div/div[5]/div[2]/select/option[3]")).click();
	      Thread.sleep(3000);
	 }

	 @Then("Enter Leave Reason")
	 public void Enter_Leave_Reason() throws InterruptedException
	 {
	       obj.findElement(By.xpath("//*[@id=\"subject\"]")).sendKeys("Sick Leave");
	       Thread.sleep(3000);
	 }

	 @Then("click on Submit button")
	 public void click_on_Submit_submit() throws InterruptedException
	 {
	      obj.findElement(By.xpath("/html/body/div/div/div/form/div[2]/button[1]")).click();
	      Thread.sleep(3000);
	 }

	//  @Then("click cancel")
	//  public void click_cancel() throws InterruptedException {
//	      obj.findElement(By.xpath("/html/body/div/div/div/form/div[1]/div/div/div[1]/div[2]/p/span/button")).click();
	//  }

//Manage Leave Page
	@Then("^click Manage Leave$")
	public void click_Manage_Leave()
	{
		obj.findElement(By.xpath("/html/body/ui-view/div/div/nav/ul/li[8]/ul/li[2]/a")).click();
	}
	
//	@Then("^click Approve$")
//	public void click_Approve()
//	{
//		obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div/div[2]/div/div/table/tbody/tr[1]/td[11]/button")).click();
//	}

	//Leave Report page
	@Then("^click on Leave$")
	public void click_on_Leave()
	{
		obj.findElement(By.xpath("/html/body/ui-view/div/div/nav/ul/li[8]/a")).click();
	}
	
	@Then("^click Leave Report")
	public void click_Leave_Report() throws InterruptedException
	{
		obj.findElement(By.xpath("/html/body/ui-view/div/div/nav/ul/li[8]/ul/li[3]/a")).click();
		Thread.sleep(5000);
	}
	
	@Then("^click on Start Date")
	public void click_on_Start_Date() throws InterruptedException
	{
		obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div[1]/form/div[1]/p/span/button")).click();
		Thread.sleep(3000);
	}
	
	
//	@Then("^click and select on Start Date form dropdown")
//	public void click_and_select_on_Start_Date_form_dropdown()
//	{
//		obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div[1]/div/form/div[1]/p/div/ul/li[1]/div/div/div/table/tbody/tr[3]/td[2]/button")).click();
//	}
	
	@Then("^click on End Date")
	public void click_on_End_Date() throws InterruptedException
	{
		obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div[1]/form/div[2]/p/span/button")).click();
		Thread.sleep(3000);
	}
	
	@Then("^click on All")
	public void click_on_All() throws InterruptedException
	{
		obj.findElement(By.xpath("//*[@id='timestatus']")).click();
		Thread.sleep(3000);
	}
	
	@Then("^click and select All Type")
	public void click_and_select_All_Type()
	{
		obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div[1]/form/div[3]/select/option[2]")).click();
	}
	@Then("^click Find")
	public void click_Find() throws InterruptedException
	{
		obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div[1]/form/div[4]/input")).click();
		Thread.sleep(3000);
	}
	
	
//	@Then("^click Holiday List")
//	public void click_Holiday_List()  {
//	   obj.findElement(By.xpath("/html/body/ui-view/div/div/nav/ul/li[8]/ul/li[3]/a")).click();
//	}
	
	@Then("^click Report Dashboard")
	public void click_Report_Dashboard() throws InterruptedException
	{
		obj.findElement(By.xpath("/html/body/ui-view/div/div/nav/ul/li[9]/a")).click();
		Thread.sleep(3000);
	}
	
	@Then("^click Timesheet Report")
	public void click_Timesheet_Report() throws InterruptedException
	{
		obj.findElement(By.xpath("/html/body/ui-view/div/div/nav/ul/li[9]/ul/li[1]/a")).click();
		Thread.sleep(3000);
	}
	
	@Then("^click Start Date")
	public void click_Start_Date()
	{
		obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div[1]/div/form/div[1]/p/span/button")).click();
	}
	
	@Then("^click End Date")
	public void click_End_Date()
	{
		obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div[1]/div/form/div[2]/p/span/button")).click();
	}
	
	@Then("^click Employee")
	public void click_Employee()
	{
		 obj.findElement(By.xpath("//*[@id='employeereport']")).click();
	}
	
	@Then("^click and select employee form dropdown")
	public void click_and_select_employee_form_dropdown()
	{
		obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div[1]/div/form/div[3]/select/option[3]")).click();
	}
	
	@Then("^click All")
	public void click_All()
	{
		obj.findElement(By.xpath("//*[@id='timestatus']")).click();
	}
	
	@Then("^click and select All form dropdown")
	public void click_and_select_All_form_dropdown()
	{
		obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div[1]/div/form/div[4]/select/option[5]")).click();
	}
	
	@Then("^click on Find")
	public void click_on_Find()
	{
		obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div[1]/div/form/div[5]/input")).click();
	}
	
	
//	@Then("^click Find button")
//	public void click_Find_button()
//	{
//		obj.findElement(By.xpath("/html/body/ui-view/div/main/div/ui-view/div/div/div[2]/div[1]/div/form/div[5]/input")).click();
//	}
	
	
	@After 
	public void closeBrowser(Scenario scenario) {
		if (scenario.isFailed()) {
			scenario.embed(((TakesScreenshot) obj).getScreenshotAs(OutputType.BYTES), "image/png");
			scenario.write("Scenario Failed");
		} else {
			scenario.write("Scenario passed");
		}
	}

	// @Then("^Close browser$")
	//
	// public void close_browser() {
	//
	// obj.quit();
	//
	// }

}