package com.stationery.office.dao;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.stationery.office.modal.Stationery;

public interface StationeryRepository extends CrudRepository<Stationery, Long> {
	
	@Transactional
	@Modifying
	@Query("UPDATE Stationery b SET b.requestedcount = :value WHERE b.email = :email")
	void updateRequestCount(@Param("value") Integer value, @Param("email") String email);
	
	@Transactional
	@Modifying
	@Query("UPDATE Stationery b SET b.totalCount = :value,b.requestedcount = 0 WHERE b.userName = :userName")
	void updateTotalCount(@Param("value") Integer value, @Param("userName") String userName);
	
	@Transactional
	@Modifying
	@Query("UPDATE Stationery b SET b.stationeryName = :sn,b.totalCount = :value WHERE b.department = :department")
	void updateStationery(@Param("sn") String sn,@Param("value") Integer value, @Param("department") String department);
	
	@Transactional
	@Modifying
	@Query("DELETE FROM Stationery b WHERE b.stationeryName = :sn")
	void deleteStationery(@Param("sn") String sn);
	
	@Transactional
	@Modifying
	@Query("UPDATE Stationery b SET b.status = :status,b.totalCount = :value,b.requestedcount = 0 WHERE b.email = :email")
	void approve(@Param("status") String status,@Param("value") Integer value, @Param("email") String email);
	
	@Transactional
	@Modifying
	@Query("UPDATE Stationery b SET b.status = :status,b.requestedcount = :reqc WHERE b.email = :email")
	void request(@Param("status") String status,@Param("reqc") Integer reqc, @Param("email") String email);
	
	
}


