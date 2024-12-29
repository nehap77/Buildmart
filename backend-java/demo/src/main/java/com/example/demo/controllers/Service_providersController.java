package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Individual_Customer;
import com.example.demo.entities.Service_providers;
import com.example.demo.entities.User;
import com.example.demo.registration.CustomerRegistration;
import com.example.demo.registration.LabourRegistration;
import com.example.demo.services.QuestionService;
import com.example.demo.services.Role_Service;
import com.example.demo.services.Service_providersService;
import com.example.demo.services.UserService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Service_providersController {
	@Autowired
	Service_providersService spService;
	@Autowired
	UserService uservice;
	@Autowired
	Role_Service rservice;
	@Autowired
	QuestionService qservice;

	 @GetMapping("/getLabEmails")
	   public String[] getLabEmails()
	    {
	    	return spService.getLabEmails();
	   }
	    
	 
	 @PostMapping("/labourRegister")
		public Service_providers registerCustomer(@RequestBody LabourRegistration cr)
		{
			User a=uservice.saveUser(new User(cr.getUname(),cr.getPwd(),cr.getAns(),rservice.getRole(4),qservice.getQuestion(cr.getQid())));
			
			Service_providers l=spService.registerLabour(new Service_providers(cr.getFname(), cr.getLname(), cr.getEmail(), cr.getCno(),cr.getExp(),a,cr.getStat(),cr.getRates()));
			
		    
		    return l;
		    
		}

}
