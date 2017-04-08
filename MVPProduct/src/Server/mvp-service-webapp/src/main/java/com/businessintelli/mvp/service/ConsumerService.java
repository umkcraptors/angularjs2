package com.businessintelli.mvp.service;


import com.businessintelli.mvp.model.*;

import java.io.*;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

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
		logger.info("Adding consumer");
		String consumerStr = consumer.toString();
		//fw.write(consumerStr);
		fw.append(consumerStr);
		fw.flush();
		logger.info("consumer added");
		return consumer.getId();
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

	public boolean update(Consumer consumer) throws Exception {
		
		
		return true;
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