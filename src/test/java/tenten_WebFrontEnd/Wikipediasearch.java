package tenten_WebFrontEnd;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Wikipediasearch {
	WebDriver driver = null;
	
	@Before public void setUp(){
		String chromeDriverLocation = "src/main/resources/drivers/chromedriver.exe"; 
		System.setProperty("webdriver.chrome.driver", chromeDriverLocation);
		driver = new ChromeDriver();
	}
	
	@Given("^User is on the Wikipedia home page$")
	public void goToWikipediaHomePage(){
		driver.get("http://www.wikipedia.org/");	
	}
	
	@When("^User searches for \"([^\"]*)\" in English$")
	public void User_search_for(String arg){
		new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.xpath(".//*[@id='searchInput']")));
		WebElement search_inputField = driver.findElement(By.xpath(".//*[@id='searchInput']"));
		search_inputField.clear();
		search_inputField.sendKeys(arg);
		Select oSelect = new Select (driver.findElement(By.xpath(".//*[@id='searchLanguage']")));
		oSelect.selectByVisibleText("English");
		driver.findElement(By.xpath(".//*[@id='search-form']/fieldset/button")).click();			
	}
	
	@Then ("The first heading of the search results page matches \"([^\"]*)\"$")
	public void heading_of_Search_matchs_result(String arg){
		new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.xpath(".//*[@id='firstHeading']")));
		String firstHeading = driver.findElement(By.xpath(".//*[@id='firstHeading']")).getText();
		if (firstHeading.equalsIgnoreCase(arg)){
			System.out.println("Test pass " + arg + " is displayed as firstHeader");
		} else {
			System.out.println("Test Failed");
		}				
	}
	
	@Then ("Verify that the search results page is available in \"([^\"]*)\"$")
	public void search_result_page_is_available(String lang){
		int iSize  = 117;
		boolean T = false;
		for(int i=1; i<iSize; i++){
			if ((driver.findElement(By.xpath(".//*[@id='p-lang']/div/ul/li["+i+"]/a"))).getText().equalsIgnoreCase(lang)){
				T=true;
				System.out.println("Found language " + (driver.findElement(By.xpath(".//*[@id='p-lang']/div/ul/li["+i+"]/a"))).getText());
				break;			
			}
		}
		if (T== true){
			System.out.println("Test pass, Search results page is avaialable in  " + lang );
			
		} else {
			System.out.println("Test Failed");
		}		
	}
	
	@Then ("Navigate to the search results page in \"([^\"]*)\"$")
	public void navigate_to_the_search_results_page(String rpage){
		driver.findElement(By.linkText(rpage)).click();
	}

	@Then ("Validate that the search results page in the new language includes a link to the version in English$")
	public void search_result_page_in_new_language_include_a_link_to_the_version_in_english(){

		if  (driver.findElement(By.linkText("English")).isDisplayed()){
			System.out.println("Test pass, Link to version in English is available");
		} else {
			System.out.println("Test Fail, Link to version in English is NOT available");
		}
		//driver.close();	
	}
	
	@After public void cleanUp(){
		driver.close();
	}
	
	
	

	
	
	
}
