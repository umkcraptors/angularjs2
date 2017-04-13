package com.businessintelli.mvp.service;


//import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
//import java.util.Map;
//import java.util.Scanner;
import java.util.HashMap;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import com.businessintelli.mvp.model.Consumer;
//import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class ConsumerService
{

	final static Logger logger = Logger.getLogger(ConsumerService.class);
	
	private FileWriter fw;
	
	public ConsumerService()
	{
		try {
			fw = new FileWriter("C:/temp/consumer.txt");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		logger.info("Consumer file is created");
	}
	
	public int create(Consumer consumer) throws Exception
	{
		/*logger.info("Adding consumer");
		String consumerStr = consumer.toString();
		//fw.write(consumerStr);
		fw.append(consumerStr);
		fw.flush();
		logger.info("consumer added");
		return consIntegertId();*/
		Consumer cs1 = new Consumer();
		cs1.setId(1);
		cs1.setfirstName("ram");
		cs1.setEmail("ram@gmail.com");
		cs1.setlastName("kandagatla");
		cs1.setPhone("+8148568955");
		
		
		Consumer cs2 = new Consumer();
		cs2.setId(2);
		cs2.setfirstName("ram");
		cs2.setEmail("ram@gmail.com");
		cs2.setlastName("kandagatla");
		cs2.setPhone("+8148568955");
		
		Consumer cs3 = new Consumer();
		cs3.setId(3);
		cs3.setfirstName("ram");
		cs3.setEmail("ram@gmail.com");
		cs3.setlastName("kandagatla");
		cs3.setPhone("+8148568955");
		
		HashMap<integer, String> HMap = new HashMap<integer, String>;
		HMap.put(1,"cs1");
		HMap.put(1,"cs2")
		HMap.put(1,"cs3")
	}

	public Consumer retrive(int pId) 
	{
		Consumer cs2 = new Consumer();
		cs2.setId(2);
		cs2.setfirstName("ram");
		cs2.setEmail("ram@gmail.com");
		cs2.setlastName("kandagatla");
		cs2.setPhone("+8148568955");
		return cs2;
	}

	public String update(Consumer consumer) throws IOException  {
		
		String consumerStr = consumer.toString();
		fw.append(consumerStr);
		return consumerStr;
		
		
		/*
		Scanner input = new Scanner(new File("Stock.json"));
	  

	    ObjectMapper mapper = new ObjectMapper();
	    Map<String,Object> map = mapper.readValue(input, Consumer.class);
	    }
		*/
		
		
		
	}
		
	

	public boolean delete(int pId) {
		return true;
	}

/*	public static void main(String[] args)  {

		try {
			
			
			
            Consumer cs2 = new Consumer();
			cs2.setId(2);
			cs2.setfirstName("ram");
			cs2.setEmail("ram@gmail.com");
			cs2.setlastName("kandagatla");
			cs2.setPhone("+8148568955");
			service.create(cs2);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	*/
}