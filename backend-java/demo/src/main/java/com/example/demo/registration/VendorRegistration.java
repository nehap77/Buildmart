package com.example.demo.registration;


public class VendorRegistration {
	
	private String vname;
	private String email;
	private String cno;
	private String sname;
	private String regno;
	private String uname;
	private String pwd;
	private String cpwd;
	private int qid;
	private String ans;
	public String getVname() {
		return vname;
	}
	public void setVname(String vname) {
		this.vname = vname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCno() {
		return cno;
	}
	public void setCno(String cno) {
		this.cno = cno;
	}
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public String getRegno() {
		return regno;
	}
	public void setRegno(String regno) {
		this.regno = regno;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getCpwd() {
		return cpwd;
	}
	public void setCpwd(String cpwd) {
		this.cpwd = cpwd;
	}
	public int getQid() {
		return qid;
	}
	public void setQid(int qid) {
		this.qid = qid;
	}
	public String getAns() {
		return ans;
	}
	public void setAns(String ans) {
		this.ans = ans;
	}
	public VendorRegistration(String vname, String email, String cno, String sname, String regno, String uname,
			String pwd, String cpwd, int qid, String ans) {
		super();
		this.vname = vname;
		this.email = email;
		this.cno = cno;
		this.sname = sname;
		this.regno = regno;
		this.uname = uname;
		this.pwd = pwd;
		this.cpwd = cpwd;
		this.qid = qid;
		this.ans = ans;
	}
	public VendorRegistration() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "VendorRegistration [vname=" + vname + ", email=" + email + ", cno=" + cno + ", sname=" + sname
				+ ", regno=" + regno + ", uname=" + uname + ", pwd=" + pwd + ", cpwd=" + cpwd + ", qid=" + qid
				+ ", ans=" + ans + "]";
	}
	
	
}


