

import org.junit.Test;

import com.businessintelli.mvp.model.Consumer;
import com.businessintelli.mvp.service.ConsumerService;


public class ConsumerServiceTest {

	ConsumerService service = new ConsumerService();
	
	@Test
	public void testCreateConsumer() throws Exception
	{
		Consumer cs1 = new Consumer();
		cs1.setId(1);
		cs1.setfirstName("Lasya");
		cs1.setlastName("sannapareddy");
		cs1.setPhone("+8165478955");
		cs1.setEmail("lasya@gmail.com");
		service.create(cs1);
		
	}

}
