package com.businessintelli.mvp.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.businessintelli.mvp.model.Consumer;

@Repository
public class ConsumerDAO 
{
	
	@Autowired
	GenericJDBCDao genericDao;
	
	public ConsumerDAO()
	{
		genericDao.openConnection();
	}
	
	public int createConsumer(Consumer consumer) throws SQLException
	{
		
		String insertSQL = "";
		Connection con = genericDao.getConnection();
		PreparedStatement pStmt = con.prepareStatement(insertSQL);
		//TODO add params
		
		pStmt.executeUpdate();
		pStmt.close();
		return 1; //TODO add try catch and throw and add finally close
	}
	
	public Consumer retrieveConsumer(int pid) throws SQLException
	{

			String selectSql = "Select * from CONSUMER where consumer_id = ?";
			PreparedStatement pStmt = genericDao.getConnection().prepareStatement(selectSql);
			//TODO
			ResultSet rs = pStmt.executeQuery();
			while (rs.next()) 
			{
				Consumer c = new Consumer();
				c.setfirstName(rs.getString("consumer_firstname"));
				c.setEmail(rs.getString("consumer_email"));
				c.setPhone(rs.getString("consumer_phone"));
				c.setlastName(rs.getString("consumer_lastname"));
				return c;
			}
			
			return null;
		
	}
}
