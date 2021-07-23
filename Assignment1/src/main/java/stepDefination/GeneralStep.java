package stepDefination;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.cucumber.listener.Reporter;

import PageObject.AmazonPage;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import utility.DriverFactory;
import utility.Utility;

public class GeneralStep{

	public WebDriver driver;
	AmazonPage amazonPage;
	Utility utill;

	@Before
	public void setUp() {

		driver = DriverFactory.get_driver_instance();
		amazonPage = new AmazonPage(driver);
		utill=new Utility();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
	}

	@After
	public void tearDown(Scenario scenario) throws IOException {
		driver.quit();
	}

	@Given("Go to amazon.ca")
	public void go_to_amazon_ca() {
		driver.get(Utility.getProperty("url"));
	}

	@When("Click on hamburger menu \\(top left corner)")
	public void click_on_hamburger_menu_top_left_corner() throws Exception 
	{
		utill.PerformActionOnElement(amazonPage.nav_hamburger,"click", "");
		
	}

	@Then("Select Kindle under Digital Content and Devices")
	public void select_kindle_under_digital_content_and_devices() throws Exception {
	    
		utill.PerformActionOnElement(amazonPage.select_Kindle,"click", "");
	}

	@Then("Click Kindle under Kindle E-Reader")
	public void click_kindle_under_kindle_e_reader() throws Exception {
		utill.PerformActionOnElement(amazonPage.lnk_kindle,"click", "");
	    
	}

	@Then("Click Buy Now")
	public void click_buy_now() throws Exception {
		driver.switchTo().defaultContent();
		utill.PerformActionOnElement(amazonPage.btn_buyNow,"click", "");
	}

	@Then("Verify User is asked for email or mobile number")
	public void verify_user_is_asked_for_email_or_mobile_number() {
		Assert.assertTrue(amazonPage.txt_username.isDisplayed());
	   
	}

}
