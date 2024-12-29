package com.example.demo.entities;

import java.sql.Blob;
import java.util.Arrays;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "product_name")
    private String productName;
    
		@Column(name = "description")
    private String description;

    @Lob
    @Column(name="picture")
    private byte[] picture;
  
		@ManyToOne(cascade = CascadeType.ALL)
		@JoinColumn(name="cid")
    private Category category;
    
    @JsonIgnoreProperties("product")
 		@OneToMany(mappedBy = "product" , cascade = CascadeType.ALL)
    private List<Vendor_Product> vendorProductList;

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(int id, String productName, String description, Category category) {
		super();
		this.id = id;
		this.productName = productName;
		this.description = description;
		this.category = category;
	}
	

	public Product(String productName, String description, byte[] picture, Category category) {
		super();
		this.productName = productName;
		this.description = description;
		this.picture = picture;
		this.category = category;
	}

	public Product(String productName, String description, Category category,
			List<Vendor_Product> vendorProductList) {
		super();
		this.productName = productName;
		this.description = description;
		this.category = category;
		this.vendorProductList = vendorProductList;
	}
	

	public Product(String productName, String description, byte[] picture, Category category,
			List<Vendor_Product> vendorProductList) {
		super();
		this.productName = productName;
		this.description = description;
		this.picture = picture;
		this.category = category;
		this.vendorProductList = vendorProductList;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public List<Vendor_Product> getVendorProductList() {
		return vendorProductList;
	}

	public void setVendorProductList(List<Vendor_Product> vendorProductList) {
		this.vendorProductList = vendorProductList;
	}

	public byte[] getPicture() {
		return picture;
	}

	public void setPicture(byte[] picture) {
		this.picture = picture;
	}

     
    
}