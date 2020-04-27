package com.stationery.office.modal;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "stationery")
@Getter @Setter @NoArgsConstructor
public class Stationery {
	
	 
	   @Id
	   @GeneratedValue(strategy = GenerationType.IDENTITY)
	   @Column(name="user_id")
       private Integer userId;
	   @Column(name="username")
	   private String userName; 
	   @Column(name="email")
	   private String email;
	   @Column(name="password")
	   private String password;
	   @Column(name="user_role")
	   private String userRole;
	   @Column(name="department")
	   private String department;
	   @Column(name="created_on")
	   private Date createdOn;
	   @Column(name="last_login")
	   private Date lastLogin;
	   
	   @Column(name="stationery_name")	   
	   private String stationeryName;
	   @Column(name="requested_count")
	   private Integer requestedcount;
	   @Column(name="total_count")
	   private Integer totalCount;
	   
	   @Column(name="status")
	   private String status;
	   
	public Stationery(String userName,String password, String email, String userRole, String department, Date createdOn,Date lastLogin,
			String stationeryName, Integer requestedcount, Integer totalCount,String status) {
		super();		
		this.userName = userName;
		this.password=password;
		this.email = email;
		this.userRole = userRole;
		this.department = department;
		this.createdOn = createdOn;
		this.lastLogin=lastLogin;
		this.stationeryName = stationeryName;
		this.requestedcount = requestedcount;
		this.totalCount = totalCount;
		this.status=status;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public Integer getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(Integer totalCount) {
		this.totalCount = totalCount;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserRole() {
		return userRole;
	}
	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}
	public Integer getRequestedcount() {
		return requestedcount;
	}
	public void setRequestedcount(Integer requestedcount) {
		this.requestedcount = requestedcount;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getStationeryName() {
		return stationeryName;
	}
	public void setStationeryName(String stationeryName) {
		this.stationeryName = stationeryName;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	} 
	
	
	
	
	
	   
	   
	   
	   
}
