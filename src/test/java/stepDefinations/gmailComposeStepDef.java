package stepDefinations;

import BddCucumber.FileUpload;
import BddCucumber.PrepBrowser;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.LoginPageProperties;

public class gmailComposeStepDef extends PrepBrowser{
//	LoginPageProperties lp=new LoginPageProperties(driver);
	@Given("^User launches \"([^\"]*)\" page$")
	public void user_launches_page(String arg1) throws Throwable {
		driver=initializeBrowser();
		System.out.println(arg1);
		String URL=prope.getProperty(arg1);
		System.out.println(URL);
		driver.get(URL);
	    // Write code here that turns the phrase above into concrete actions
//	    throw new PendingException();
	}

	@Then("^User should be \"([^\"]*)\" page$")
	public void user_should_be_page(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(!driver.getTitle().equals(arg1)) {
			throw new Exception (arg1+" not found");
		}

	}



	@When("^User clicks \"([^\"]*)\" button on \"([^\"]*)\" page$")
	public void user_clicks_button_on_page(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
//	    throw new PendingException();
		
	}

	@When("^User enters \"([^\"]*)\" in the \"([^\"]*)\" inputbox on \"([^\"]*)\" page$")
	public void user_enters_in_the_inputbox_on_page(String arg1, String arg2, String arg3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
//	    throw new PendingException();
		
	}
	@Then("^User validates \"([^\"]*)\" button is \"([^\"]*)\" on \"([^\"]*)\" page$")
	public void user_validates_button_is_on_page(String arg1, String arg2, String arg3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
//	    throw new PendingException();
	}

	@Then("^User validates \"([^\"]*)\" button is \"([^\"]*)\" the \"([^\"]*)\" button on \"([^\"]*)\" page$")
	public void user_validates_button_is_the_button_on_page(String arg1, String arg2, String arg3, String arg4) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
//	    throw new PendingException();
	}
	
	@Then("^User upload \"([^\"]*)\" document$")
	public void user_upload_document(String filePath) throws Throwable {
		FileUpload function=new FileUpload();
	    // Write code here that turns the phrase above into concrete actions
	    function.fileupload(filePath);
	}

}
