
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;

public class AutoBooking {
    public static void main(String[] args) {
        System.setProperty("webdriver.edge.driver", "D:\\edgedriver_win64\\msedgedriver.exe");
        WebDriver driver =new EdgeDriver();
        driver.manage().window().maximize();
        driver.get("https://www.makemytrip.com/railways/");
        System.out.println("Page URL -> "+driver.getCurrentUrl());
        System.out.println("Page Title -> "+driver.getTitle());
        driver.findElement(By.xpath("//input[@id='fromCity']")).click();
        Sleep();
        driver.findElement(By.xpath("//input[@placeholder='From']")).sendKeys("DELHI",Keys.ARROW_DOWN,Keys.ENTER);
        Sleep();
        WebElement To = driver.findElement(By.xpath("//input[@placeholder='To']"));
        To.sendKeys("LUCKNOW");
        Sleep();
        To.sendKeys(Keys.ARROW_DOWN,Keys.ENTER);
        Sleep();
       WebElement NxtBtn= driver.findElement(By.className("DayPicker-NavButton--next"));
       NxtBtn.click();
       NxtBtn.click();
       NxtBtn.click();
        Sleep();
        driver.findElement(By.xpath("//div[@aria-label='Sat May 20 2023']")).click();
        Sleep();
        driver.findElement(By.xpath("//li[text()='Third AC']")).click();
        Sleep();
        driver.findElement(By.xpath("//a[text()='Search']")).click();

//        driver.quit();

    }
    static void Sleep(){
        try {
            Thread.sleep(800);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
