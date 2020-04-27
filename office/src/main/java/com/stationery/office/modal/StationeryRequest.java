package com.stationery.office.modal;

public class StationeryRequest {
	
	private String userName;
	private String email;
	private String userRole;
	private String department;
	private String stationeyName;
	private Integer totalCount;
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUserRole() {
		return userRole;
	}
	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getStationeyName() {
		return stationeyName;
	}
	public void setStationeyName(String stationeyName) {
		this.stationeyName = stationeyName;
	}
	public Integer getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(Integer totalCount) {
		this.totalCount = totalCount;
	}
	

	
}
