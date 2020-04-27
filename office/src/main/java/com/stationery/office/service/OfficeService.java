package com.stationery.office.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stationery.office.dao.StationeryRepository;
import com.stationery.office.modal.Approve;
import com.stationery.office.modal.DeleteStationery;
import com.stationery.office.modal.RequestCount;
import com.stationery.office.modal.Response;
import com.stationery.office.modal.Search;
import com.stationery.office.modal.Stationery;
import com.stationery.office.modal.StationeryRequest;
import com.stationery.office.modal.TotalCount;
import com.stationery.office.modal.UpdateStationary;

@Service
public class OfficeService implements IOfficeService {
	
	@Autowired
    private StationeryRepository repository;
	

	
	

	@Override
	public List<Stationery> findAll() {
		List<Stationery> staionery = (List<Stationery>) repository.findAll();		
		return staionery;
	}
	
	
	
	public List<Stationery> getByUser(Approve email) {
		if(null==email) {
			System.out.println("Search is null");
		}
		System.out.println("Seach input "+email.getEmail());
		List<Stationery> staionery = (List<Stationery>) repository.findAll();
		List<Stationery> staionery1 =new ArrayList<Stationery>();
		Stationery result1 = staionery.stream()                        // Convert to steam
                .filter(x -> email.getEmail().trim().equals(x.getEmail()))        // we want "jack" only
                .findAny()                                      // If 'findAny' then return found
                .orElse(null);
		staionery1.add(result1);
	
				
		return staionery1;
	}
	
	public List<Stationery> findByStationery(Search search) {
		if(null==search) {
			System.out.println("Search is null");
		}
		System.out.println("Seach input "+search.getData());
		List<Stationery> staionery = (List<Stationery>) repository.findAll();
		List<Stationery> staionery1 =new ArrayList<Stationery>();
		Stationery result1 = staionery.stream()                        // Convert to steam
                .filter(x -> search.getData().trim().equals(x.getStationeryName()))        // we want "jack" only
                .findAny()                                      // If 'findAny' then return found
                .orElse(null);
		staionery1.add(result1);
	
				
		return staionery1;
	}
	
	public Response add(StationeryRequest stationeryRequest) {
		Response res=new Response();
		Stationery statonery=new Stationery(stationeryRequest.getUserName(),"123", stationeryRequest.getEmail(), stationeryRequest.getUserRole(), stationeryRequest.getDepartment(), new Date(),new Date(), stationeryRequest.getStationeyName(), 0,stationeryRequest.getTotalCount(),"");
		try {
			repository.save(statonery);
			
			res.setMessage("Success");
			res.setStatusCode("200");
		} catch (Exception e) {
			res.setMessage("Failure");
			res.setStatusCode("201");
			e.printStackTrace();
		}
		return res;
		
	}
	
	public Response isValidUser(String email,String password) {
		Response loginRespons=new Response();
		List<Stationery> users= findAll();
		try {
			for(int i=0;i<users.size();i++) {
			
				if(users.get(i).getEmail().trim().equalsIgnoreCase(email.trim()) && users.get(i).getPassword().trim().equalsIgnoreCase(password.trim())){
					loginRespons.setMessage("Success");
					loginRespons.setStatusCode("200");
					loginRespons.setRole(users.get(i).getUserRole());
					break;
					
				}else {
					loginRespons.setMessage("Failure");
					loginRespons.setStatusCode("500");
				}
			}
					
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return loginRespons;
	}
	
	
	public Response updateRequestCount(RequestCount requestCount) {
		Response updateCountResponse=new Response();
		try {
			repository.updateRequestCount(Integer.parseInt(requestCount.getRequestCount()), requestCount.getEmail());
			updateCountResponse.setStatusCode("200");
			updateCountResponse.setMessage("Success");
		} catch (NumberFormatException e) {
			// TODO Auto-generated catch block
			updateCountResponse.setStatusCode("500");
			updateCountResponse.setMessage("Failure");
			e.printStackTrace();
		}
		return updateCountResponse;
		
	}

	public Response request(RequestCount requestCount) {
		Response updateCountResponse=new Response();
		try {
			repository.request("Pending",Integer.parseInt(requestCount.getRequestCount()), requestCount.getEmail());
			updateCountResponse.setStatusCode("200");
			updateCountResponse.setMessage("Success");
		} catch (NumberFormatException e) {
			// TODO Auto-generated catch block
			updateCountResponse.setStatusCode("500");
			updateCountResponse.setMessage("Failure");
			e.printStackTrace();
		}
		return updateCountResponse;
		
	}

	public Response updateTotalCount(TotalCount totalCount) {
		Response updateCountResponse=new Response();
		try {
			List<Stationery> s=findAll();
			Integer in = null;
			for(int i=0;i<s.size();i++) {
				if(s.get(i).getUserName().trim().equalsIgnoreCase(totalCount.getUserName().trim())) {
				in=s.get(i).getTotalCount()-Integer.parseInt(totalCount.getTotalCount());
				break;
				}
			}
			repository.updateTotalCount(in, totalCount.getUserName());
			updateCountResponse.setStatusCode("200");
			updateCountResponse.setMessage("Success");
		} catch (NumberFormatException e) {
			// TODO Auto-generated catch block
			updateCountResponse.setStatusCode("500");
			updateCountResponse.setMessage("Failure");
			e.printStackTrace();
		}
		return updateCountResponse;
	}
	
	public Response approve(Approve approve) {
		System.out.println("service approve ");
		Response approveResponse =new Response();
		try {
			List<Stationery> s=findAll();
			Integer in = 0;
			for(int i=0;i<s.size();i++) {
				if(s.get(i).getEmail().trim().equalsIgnoreCase(approve.getEmail().trim())) {
					System.out.println("Total count "+s.get(i).getTotalCount());
					System.out.println("Requested Count "+s.get(i).getRequestedcount());
					
				in=s.get(i).getTotalCount()-s.get(i).getRequestedcount();
				System.out.println("After minus "+in);
				break;
				}
			}
			repository.approve("Approved",in,approve.getEmail().trim());
			approveResponse.setStatusCode("200");
			approveResponse.setMessage("Success");
		} catch (NumberFormatException e) {
			// TODO Auto-generated catch block
			approveResponse.setStatusCode("500");
			approveResponse.setMessage("Failure");
			e.printStackTrace();
		}
		return approveResponse;
	}
	
	public Response update(UpdateStationary updateStaionery) {
		Response updateStationeryResponse=new Response();
		try {
			repository.updateStationery(updateStaionery.getStationeyName(), Integer.parseInt(updateStaionery.getTotalCount()), updateStaionery.getDepartment());
			updateStationeryResponse.setStatusCode("200");
			updateStationeryResponse.setMessage("Success");
		} catch (NumberFormatException e) {
			updateStationeryResponse.setStatusCode("500");
			updateStationeryResponse.setMessage("Failure");
			e.printStackTrace();
		}
		return updateStationeryResponse;
		
	}
	
	public Response delete(DeleteStationery deleteStationery) {
		Response deleteStationeryResponse=new Response();
		try {
			repository.deleteStationery(deleteStationery.getStationeyName());
			deleteStationeryResponse.setStatusCode("200");
			deleteStationeryResponse.setMessage("Success");
		} catch (NumberFormatException e) {
			deleteStationeryResponse.setStatusCode("500");
			deleteStationeryResponse.setMessage("Failure");
			e.printStackTrace();
		}
		return deleteStationeryResponse;
		
	}
		
	
}
