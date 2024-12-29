package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Construction_Material_Vendor;
@Transactional
@Repository
public interface Construction_Material_Vendor_Repo extends JpaRepository<Construction_Material_Vendor, Integer> {
		
	@Query("select v.email from Construction_Material_Vendor v")
	 public String[] getVendorEmails();
	
	@Query(value = "select * from construction_material_vendors where uid=:uid",nativeQuery = true)
	public Construction_Material_Vendor getVendorById(int uid);

	@Modifying
	@Query(value="update construction_material_vendors set valid='1'  where uid=:id",nativeQuery=true)
	public int allowvendor(int id);


	@Modifying
	@Query(value="update construction_material_vendors set valid='0'  where uid=:vpid",nativeQuery=true)
	public int blockvendor(int vpid);
}
