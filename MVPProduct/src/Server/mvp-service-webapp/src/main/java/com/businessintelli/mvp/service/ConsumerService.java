package com.businessintelli.mvp.service;


import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Map;
import java.util.Scanner;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import com.businessintelli.mvp.model.Consumer;
import com.fasterxml.jackson.databind.ObjectMapper;

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