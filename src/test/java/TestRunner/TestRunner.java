package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
// features = "Feature"
		features="src/test/java/features",
 glue={"stepDefinations"},
 dryRun= true,
 plugin={"pretty" , "html:C:\\Users\\DEEL\\Sagar\\EmailCompose\\Reports"}
 )

public class TestRunner {

	
}
