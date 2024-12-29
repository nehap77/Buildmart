package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Individual_Customer;
import com.example.demo.entities.Question;
import com.example.demo.entities.Role;
import com.example.demo.entities.User;
import com.example.demo.registration.CustomerRegistration;
import com.example.demo.repositories.Individual_Customer_Repository;
import com.example.demo.services.Individual_Customer_Service;
import com.example.demo.services.QuestionService;
import com.example.demo.services.Role_Service;
import com.example.demo.services.UserService;
@RestController
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "*")
public class Individual_Customer_Controller {
	@Autowired
	Individual_Customer_Service customerService;
	@Autowired
	UserService uservice;
	@Autowired
	Role_Service rservice;
	@Autowired
	QuestionService qservice;
	
	
	@PostMapping("/customerRegister")
	public Individual_Customer registerCustomer(@RequestBody CustomerRegistration cr)
	{
		User a=uservice.saveUser(new User(cr.getUname(),cr.getPwd(),cr.getAns(),rservice.getRole(1),qservice.getQuestion(cr.getQid())));
		
	    Individual_Customer c=customerService.saveCustomer(new Individual_Customer(a,cr.getFname(), cr.getLname(), cr.getEmail(), cr.getCno()));
		
	    
	    return c;
	    
	}
	 @GetMapping("/getCustEmails")
	   public String[] getCustEmails()
	    {
	    	return customerService.getCustEmails();
	   }
	    
	 
	 @GetMapping("/getCustomers")
	 public List<Individual_Customer> getAllCustomers()
	 {
		 return customerService.getAllCustomers();
	 }
	 
	 
	 @GetMapping("/getCustomerByUid")
	 public Individual_Customer getCustById(@RequestParam int uid )
	 {
		 return customerService.getCustById(uid);
	 }
	 
	 @GetMapping("/getCustomerByUId/{id}")
	 public Individual_Customer getCustomerByUserid(@PathVariable int id) {
			
	     return customerService.getCustomerById(id);
	 }
//	 
//	 @GetMapping("/getCustomerByUId/{uid}")
//	 public Individual_Customer getCustomerByUId(@PathVariable int uid) {
//		
//	     return customerService.getCustById(uid);
//	 }

	 
	 @PutMapping("/editCustomer/{uid}")
	 public Individual_Customer editprofile(@PathVariable int uid,@RequestBody Individual_Customer dummyCustomer) {
			return customerService.updateCustomerProfile(uid,dummyCustomer);
	    }
	 
	 
	

}
