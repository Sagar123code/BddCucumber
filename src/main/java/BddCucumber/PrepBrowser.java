package BddCucumber;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class PrepBrowser {
	public WebDriver driver;
	public Properties prope;
	
	public WebDriver initializeBrowser() throws Exception {
		prope=new Properties();
		
		FileInputStream file=new FileInputStream("C:\\Users\\DEEL\\Sagar\\EmailCompose\\src\\main\\java\\BddCucumber\\data.properties");
		
		prope.load(file);
		
		String browserType=prope.getProperty("browser");
		if(browserType.equals("Chrome")) {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\DEEL\\Sagar\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		}
		else if(!browserType.equals("Chrome")) { 
			throw new Exception(browserType+" driver proprties is not set in the PrepBrowser class");
			
		}
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		 return driver;
	}
   
}
