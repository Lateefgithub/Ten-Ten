package tenten_WebFrontEnd;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
//import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"html:target/ReportsDestination", "pretty", "junit:target/junitrep"})

public class TestRunner {

}
