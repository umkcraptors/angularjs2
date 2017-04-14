

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.businessintelli.mvp.dao.ConsumerDAO;
import com.businessintelli.mvp.dao.GenericJDBCDao;
import com.businessintelli.mvp.model.Consumer;
import com.businessintelli.mvp.service.ConsumerService;


public class ConsumerServiceTest {

	ConsumerService service = new ConsumerService();
	GenericJDBCDao genDao = new GenericJDBCDao();
	ConsumerDAO dao = new ConsumerDAO(genDao);
	
	@Test
	public void testCreateConsumer() throws Exception
	{
		service.setConsumerDao(dao);
		
		Consumer cs1 = new Consumer();
		cs1.setId(1);
		cs1.setfirstName("Lasya");
		cs1.setlastName("sannapareddy");
		cs1.setPhone("+8165478955");
		cs1.setEmail("lasya@gmail.com");
		service.create(cs1);
		
	}

}
