package com.businessintelli.mvp.service;


import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.businessintelli.mvp.dao.ConsumerDAO;
import com.businessintelli.mvp.model.Consumer;


@Service
public class ConsumerService
{

	final static Logger logger = Logger.getLogger(ConsumerService.class);
	
	@Autowired
	ConsumerDAO consumerDao;
	
	public ConsumerService()
	{
		
	}
	
	public int create(Consumer consumer) throws Exception
	{
		
		return consumerDao.createConsumer(consumer);
		
	}

	public Consumer retrive(int pId) throws Exception
	{

		return consumerDao.retrieveConsumer(pId);
	}

	public Consumer update(Consumer consumer)   {
		
		return null;
		
		
	}
		
	

	public boolean delete(int pId) {
		return true;
	}


}