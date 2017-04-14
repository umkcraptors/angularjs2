package com.businessintelli.mvp.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.businessintelli.mvp.model.Consumer;
import com.businessintelli.mvp.service.ConsumerService;

@Controller
public class ConsumerServiceController 
{

	final static Logger logger = Logger.getLogger(ConsumerServiceController.class);
	
	@Autowired
	ConsumerService service;
	
	@RequestMapping( method = RequestMethod.GET)
	public @ResponseBody Consumer getConsumer(int consumerId) 
	{

		try {
			return service.retrive(consumerId);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@RequestMapping( value = "/create",method = RequestMethod.POST)
	public @ResponseBody int create (@RequestBody Consumer consumer)
	{
		logger.info(" User Values :" + consumer);
		try {
			return service.create(consumer);
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		logger.info("User Created");
		return 1;
	}
	}

