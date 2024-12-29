package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Service_providers;
@Repository
public interface Service_providersRepository extends JpaRepository<Service_providers, Integer> {
	
	
	@Query("select l.email from Service_providers l")
	 public String[] getLabEmails();
}
