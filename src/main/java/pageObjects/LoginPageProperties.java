package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LoginPageProperties {
	
	public WebDriver driver;
	
//	public LoginPageProperties(WebDriver driver);
//	public void xpathsEle(String elem) {
		By EmailAddress=By.xpath("//input[@id='identifierId']");
//	}
	
	
	public LoginPageProperties(WebDriver driver2) {
			driver=driver2;
		}


	public WebElement webElement(By element) {
		return driver.findElement(element);
		
	}
	
	

}
