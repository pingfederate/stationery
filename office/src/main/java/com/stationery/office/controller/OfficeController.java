package com.stationery.office.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stationery.office.modal.Approve;
import com.stationery.office.modal.DeleteStationery;
import com.stationery.office.modal.RequestCount;
import com.stationery.office.modal.Response;
import com.stationery.office.modal.Search;
import com.stationery.office.modal.Stationery;
import com.stationery.office.modal.StationeryRequest;
import com.stationery.office.modal.TotalCount;
import com.stationery.office.modal.UpdateStationary;
import com.stationery.office.service.OfficeService;

@RestController
public class OfficeController {
	


@Autowired
private OfficeService officeService;


	
	
    @CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/get")
	public List<Stationery> getStationery() {
	return officeService.findAll(); 
	}
    
    
    @CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/getByUser")
	public List<Stationery> getByUser(@RequestBody Approve email) {
    	List<Stationery> status = officeService.getByUser(email);
		return status;
	}
    
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/add")
	public Response createStationery(@RequestBody StationeryRequest stationeryRequest) {
		Response status = officeService.add(stationeryRequest);
		return status;
	}
	 

	    @CrossOrigin(origins = "http://localhost:3000")
		@GetMapping("/update")
		public String updateStationery() {
			try {
				//officeService.update(10,"karthick");
				return "Sucessfully updated";
			}catch(Exception e) {
				e.printStackTrace();
				return "Not updated";
			}
			
}
	    @CrossOrigin(origins = "http://localhost:3000")
		@RequestMapping(value="/login",method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
		public Response login(@RequestParam (name="email") String email,@RequestParam (name="pwd") String pwd) {
			return officeService.isValidUser(email, pwd);
			      
		}
	    
	    @CrossOrigin(origins = "http://localhost:3000")
		@PostMapping("/request1")
		public Response updateRequestCount(@RequestBody RequestCount requestCount) {
			Response status = officeService.updateRequestCount(requestCount);
			return status;
		}
	    
	    @CrossOrigin(origins = "http://localhost:3000")
		@PostMapping("/request")
		public Response request(@RequestBody RequestCount requestCount) {
			Response status = officeService.request(requestCount);
			return status;
		}
	    
	    @CrossOrigin(origins = "http://localhost:3000")
		@PostMapping("/approve")
		public Response approve(@RequestBody Approve approve) {
			Response status = officeService.approve(approve);
			return status;
		}
		
	    @CrossOrigin(origins = "http://localhost:3000")
		@PostMapping("/update")
		public Response update(@RequestBody UpdateStationary updateStationery) {
			Response status = officeService.update(updateStationery);
			return status;
		}
	    
	    @CrossOrigin(origins = "http://localhost:3000")
		@PostMapping("/delete")
		public Response delete(@RequestBody DeleteStationery deleteStationery) {
			Response status = officeService.delete(deleteStationery);
			return status;
		}
	   	     
	    @CrossOrigin(origins = "http://localhost:3000")
	    @PostMapping("/search")
		public List<Stationery> getStationery(@RequestBody Search search) {
	    	
		return officeService.findByStationery(search);
		}
		
}