package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Category;
import com.example.demo.repositories.Category_Repo;

@Service
public class Category_Service {
	@Autowired
	Category_Repo crepo;
	
	public List<Category> getCategories()
	{
		return crepo.findAll();
	}
	

	public Category saveCategory(Category c)
	{
		return crepo.save(c);
	}
	public Category getCategory(int id)
	{ 
		Optional<Category> or=crepo.findById(id);
	 Category r=null;
	 try
	 {
		 if(or!=null)
		 {
			 r=or.get();
		 }
	 }
	 catch(Exception e)
	 {
		 e.printStackTrace();
	 }
	 return r;
	}
}
