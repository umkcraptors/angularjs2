package com.businessintelli.mvp.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.businessintelli.mvp.model.Consumer;
import com.businessintelli.mvp.service.ConsumerService;

@Repository
public class ConsumerDAO 
{
	final static Logger logger = Logger.getLogger(ConsumerDAO.class);
	
	@Autowired
	GenericJDBCDao genericDao;
	
	
	
	public GenericJDBCDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericJDBCDao genericDao) {
		this.genericDao = genericDao;
	}

	public ConsumerDAO()
	{
		
	}
	
	public ConsumerDAO(GenericJDBCDao dao)
	{
		genericDao = dao;
		genericDao.openConnection();
	}
	
	@SuppressWarnings("finally")
	public int createConsumer(Consumer consumer) throws SQLException
	{
		genericDao.openConnection();
		PreparedStatement pStmt = null;
		logger.info("Creating Consumer");
		String insertSQL = "INSERT INTO CONSUMER" + "(CONSUMER_ID,CONSUMER_EMAIL,CONSUMER_FIRSTNAME,CONSUMER_MIDDLENAME,CONSUMER_LASTNAME,CONSUMER_PHONE,CONSUMER_STATUS,CONSUMER_HANDLE) VALUES" + "(?,?,?,?,?,?,?,?)";

		try{
			Connection con = genericDao.getConnection();
		
		logger.info("Connection is Established");
		pStmt = con.prepareStatement(insertSQL);
		pStmt.setInt(1, consumer.getId());
		pStmt.setString(2, consumer.getEmail());
		pStmt.setString(3, consumer.getfirstName());
		pStmt.setString(4, consumer.getmiddleName());
		pStmt.setString(5, consumer.getlastName());
		pStmt.setString(6, consumer.getPhone());
		pStmt.setString(7, consumer.getStatus());
		pStmt.setString(8, consumer.getHandle());

		pStmt.executeUpdate();
		}
		catch (SQLException e)
		{
			logger.error(e);
			throw e;
		}
		finally
		{
		pStmt.close();
		genericDao.closeConnection();
		logger.info("Consumer is created");
		return consumer.getId();
				}
		
	}
	
	public Consumer retrieveConsumer(int pid) throws SQLException
	{
		genericDao.openConnection();
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
			genericDao.closeConnection();
			return null;
		
	}
}
