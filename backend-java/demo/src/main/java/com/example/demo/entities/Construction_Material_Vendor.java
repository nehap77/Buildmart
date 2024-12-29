package com.example.demo.entities;

import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "construction_material_vendors")
public class Construction_Material_Vendor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "shop_name")
    private String shopName;

    @Column(name = "email")
    private String email;

    @Column(name = "contact_number")
    private String contactNumber; 
    
    @Column
    private String reg_no;
    
    @Column
    private int valid;

    @JsonIgnoreProperties({"vendor","company","customer","labour"})
    @OneToOne
    @Cascade(value = CascadeType.ALL)
	@JoinColumn(name="uid")
    User user;

	
	

	public Construction_Material_Vendor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Construction_Material_Vendor(int id, String shopName, String email, String contactNumber, User user
			) {
		super();
		this.id = id;
		this.shopName = shopName;
		this.email = email;
		this.contactNumber = contactNumber;
		this.user = user;
//		MembershipPayment = membershipPayment;
	}

	public Construction_Material_Vendor(String shopName, String email, String contactNumber, String reg_no, User user) {
		super();
		this.shopName = shopName;
		this.email = email;
		this.contactNumber = contactNumber;
		this.reg_no = reg_no;
		this.user = user;
	}

	public Construction_Material_Vendor(String shopName, String email, String contactNumber, User user) {
		super();
		this.shopName = shopName;
		this.email = email;
		this.contactNumber = contactNumber;
		this.user = user;
	}
	public Construction_Material_Vendor(String shopName, String email, String contactNumber) {
		super();
		this.shopName = shopName;
		this.email = email;
		this.contactNumber = contactNumber;
//		MembershipPayment = membershipPayment;
	}



	public String getReg_no() {
		return reg_no;
	}

	public void setReg_no(String reg_no) {
		this.reg_no = reg_no;
	}

	public int getValid() {
		return valid;
	}

	public void setValid(int valid) {
		this.valid = valid;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getShopName() {
		return shopName;
	}

	public void setShopName(String shopName) {
		this.shopName = shopName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	

	



	




	
	
    
	
}