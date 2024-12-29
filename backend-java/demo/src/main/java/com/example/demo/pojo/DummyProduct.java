package com.example.demo.pojo;




public class DummyProduct {

	    private String productName;
	    private String description;
	    private String stockQuantity;
	    
	    private byte[] picture;
	  
	    private int catid;

	    
		
		public int getCatid() {
			return catid;
		}

		public void setCatid(int catid) {
			this.catid = catid;
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

		public String getStockQuantity() {
			return stockQuantity;
		}

		public void setStockQuantity(String stockQuantity) {
			this.stockQuantity = stockQuantity;
		}

		public byte[] getPicture() {
			return picture;
		}

		public void setPicture(byte[] picture) {
			this.picture = picture;
		}

	

		public DummyProduct() {
			super();
			// TODO Auto-generated constructor stub
		}

		public DummyProduct(String productName, String description, String stockQuantity, byte[] picture,
				int category_id) {
			super();
			this.productName = productName;
			this.description = description;
			this.stockQuantity = stockQuantity;
			this.picture = picture;
			this.catid = category_id;
		}
	    

}
