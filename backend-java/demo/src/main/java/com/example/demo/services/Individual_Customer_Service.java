package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Construction_Material_Vendor;
import com.example.demo.entities.Individual_Customer;
import com.example.demo.entities.Order_Status;
import com.example.demo.repositories.Individual_Customer_Repository;
@Service
public class Individual_Customer_Service {
	@Autowired
	Individual_Customer_Repository customerRepo;
	
	public Individual_Customer saveCustomer(Individual_Customer c)
	{
		return customerRepo.save(c);
	}
	
	public String[] getCustEmails()
	{
		return customerRepo.getCustEmails();
	}
	public List<Individual_Customer> getAllCustomers()
	{
		return customerRepo.findAll();
	}
	
//	public Individual_Customer getCustomerById(int id)
//	{
//		Optional<Individual_Customer> pr =  customerRepo.findById(id);
//		Individual_Customer p = null;
//		try
//		{
//			p = pr.get();
//		}
//		catch (Exception e) {
//			e.printStackTrace();// TODO: handle exception
//		}
//		return p;
//	}
	
	public Individual_Customer getCustomerById(int id)
	{
		Optional<Individual_Customer> pr =  customerRepo.findById(id);
		Individual_Customer p = null;
		try
		{
			p = pr.get();
		}
		catch (Exception e) {
			e.printStackTrace();// TODO: handle exception
		}
		return p;
	}
	
	public Individual_Customer getCustById(int uid)
	{
		return customerRepo.getCustById(uid);
	}
	
	public Individual_Customer updateCustomerProfile(int uid, Individual_Customer dummyCustomer) {
//		User user = urepo.findById(uid).get();
        //user.setUsername(dummyCustomer.getUsername());
       // user.setPassword(dummyCustomer.getPassword());
        //user.setStatus(false);
//        Role r = rrepo.findById(3).get();
//        user.setRole(r);
//        urepo.save(user);

		Individual_Customer customer = customerRepo.getCustById(uid);
        customer.setFirst_name(dummyCustomer.getFirst_name());
        customer.setLast_name(dummyCustomer.getLast_name());
        customer.setEmail(dummyCustomer.getEmail());
        customer.setContact_number(dummyCustomer.getContact_number());
//        customer.setEmergency_contact(dummyCustomer.getEmergency_contact());
//        customer.setDob(dummyCustomer.getDob());
//        LocalDate localDate = LocalDate.now();
//        Date todayDate = Date.valueOf(localDate);
//        customer.setReg_date(todayDate);
//        customer.setPancard_no(dummyCustomer.getPancard_no());
//        customer.setAdhar_card(dummyCustomer.getAdhar_card());
//        customer.setEmail_id(dummyCustomer.getEmail_id());
//        customer.setUser(user);
//        Area a = arepo.findById(null);
//        customer.setArea(a);
//        customer.setAddress(dummyCustomer.getAddress());
        return customerRepo.save(customer);
		
	}

}
