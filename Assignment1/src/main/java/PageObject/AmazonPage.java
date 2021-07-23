package PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AmazonPage 
{
	public AmazonPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id="nav-hamburger-menu")
	public WebElement nav_hamburger;

	@FindBy(xpath = "//div[text()='Kindle']")
	public WebElement select_Kindle;

	@FindBy(xpath = "//a[text()='Kindle']")
	public WebElement lnk_kindle;

	@FindBy(id="buy-now-button")
	public WebElement btn_buyNow;
	
	@FindBy(id = "ap_email")
	public WebElement txt_username;
	
	
	
}
