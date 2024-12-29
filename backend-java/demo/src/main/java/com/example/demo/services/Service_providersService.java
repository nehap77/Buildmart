package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Service_providers;
import com.example.demo.repositories.Service_providersRepository;
@Service
public class Service_providersService {
	
	@Autowired
	Service_providersRepository spRepo;
	
	public String[] getLabEmails()
	{
		return spRepo.getLabEmails();
	}
	
	public Service_providers registerLabour(Service_providers lr)
	{
		return spRepo.save(lr);
	}

    
}
