package com.businessintelli.mvp.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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

		return service.retrive(consumerId);
	}
}
