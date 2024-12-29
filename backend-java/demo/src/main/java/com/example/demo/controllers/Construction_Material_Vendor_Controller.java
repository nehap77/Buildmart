package com.example.demo.controllers;



import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Address;
import com.example.demo.entities.Construction_Material_Vendor;
import com.example.demo.entities.Individual_Customer;
import com.example.demo.entities.Membership_payment;
import com.example.demo.entities.Plans;
import com.example.demo.entities.User;
import com.example.demo.registration.VendorRegistration;
import com.example.demo.services.AddressService;
import com.example.demo.services.AreaService;
import com.example.demo.services.Construction_Material_Vendor_Service;
import com.example.demo.services.Membership_PaymentService;
import com.example.demo.services.PlanService;
import com.example.demo.services.QuestionService;
import com.example.demo.services.Role_Service;
import com.example.demo.services.UserService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Construction_Material_Vendor_Controller {
	@Autowired
	Construction_Material_Vendor_Service vendorService;
	@Autowired
	UserService uService;
	@Autowired
	Role_Service rService;
	@Autowired
	QuestionService qService;
	@Autowired
	JavaMailSender sender;
	
	
	
	@PostMapping("/vendorRegister")
	public Construction_Material_Vendor registerVendor(@RequestBody VendorRegistration cm)
	{
		User u=uService.saveUser(new User(cm.getUname(),cm.getPwd(),cm.getAns(),rService.getRole(3),qService.getQuestion(cm.getQid())));
		System.out.println(new Construction_Material_Vendor(cm.getSname(),cm.getEmail(), cm.getCno(),cm.getRegno(),u));
		Construction_Material_Vendor cv=vendorService.saveVendor(new Construction_Material_Vendor(cm.getSname(),cm.getEmail(), cm.getCno(),cm.getRegno(),u));
		try {
			SimpleMailMessage mailMsg = new SimpleMailMessage();
		mailMsg.setFrom("dhirajnagargoje3@gmail.com");
		mailMsg.setTo(cv.getEmail());
		mailMsg.setSubject("Registered Successfully");
		mailMsg.setText("Congratulations"+cv.getShopName()+".\n You have been registered successfully. You can login after having Admin approval. We will reach you accordingly . Thank you !!!");
		sender.send(mailMsg);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	
		return cv;
	}
	
	   @GetMapping("/getVendorEmails")
	   public String[] getVendEmails()
	   {
	    	return vendorService.getVendEmails();
	   }
	   
	   @GetMapping("/getVendors")
	   public List<Construction_Material_Vendor> getVendors()
	   {
		   return vendorService.getAllVendors();
	   }
	   
	   @GetMapping("/getVendorByUid")
		 public Construction_Material_Vendor getVendorById(@RequestParam int uid )
		 {
		   
			 return vendorService.getVendor(uid);
		 }
		 
	   @PutMapping("/editVendor/{uid}")
		 public Construction_Material_Vendor editprofile(@PathVariable int uid,@RequestBody Construction_Material_Vendor dummyCustomer) {
				return vendorService.updateVendorProfile(uid,dummyCustomer);
		    }
	   
	   @GetMapping("/allowVender")
	   public boolean allowVendor(@RequestParam int vpid)
	   {
		   boolean flag=true;
		   try {
		   Construction_Material_Vendor cv=vendorService.getVendor(vpid);
		   vendorService.allow(vpid);
		   SimpleMailMessage mailMsg = new SimpleMailMessage();
			mailMsg.setFrom("dhirajnagargoje3@gmail.com");
			mailMsg.setTo(cv.getEmail());
			mailMsg.setSubject("Your Account is Approved");
			mailMsg.setText("Congratulations"+cv.getShopName()+".\n Your Accout is Approved by System. You can login Now...  Thank you !!!");
			sender.send(mailMsg);
		   }
		   catch(Exception e)
		   {
			   flag=false;
			   e.printStackTrace();
			   
		   }
		   return flag;
		   
	   }
	   
	   @GetMapping("/blockVender")
	   public boolean blockVendor(@RequestParam int vpid)
	   {boolean flag=true;
	   	
	   
		   try
		   {Construction_Material_Vendor cv=vendorService.getVendor(vpid);
		    vendorService.block(vpid);
		   SimpleMailMessage mailMsg = new SimpleMailMessage();
			mailMsg.setFrom("dhirajnagargoje3@gmail.com");
			mailMsg.setTo(cv.getEmail());
			mailMsg.setSubject("Your Account is Rejected");
			mailMsg.setText("Thank you "+cv.getShopName()+" for your interest in Buildmart.\r\n"
					+ "\r\n"
					+ "We appreciate your time and efforts for participating in our registration process. We regret to inform that you have not been Approved for this position.");
			sender.send(mailMsg);}
		   catch(Exception e) {
			   
			   flag=false;
			   e.printStackTrace();
		   }
		  return flag;
	   }


}
