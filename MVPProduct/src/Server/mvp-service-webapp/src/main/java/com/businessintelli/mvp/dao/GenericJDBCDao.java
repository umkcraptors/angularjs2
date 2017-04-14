package com.businessintelli.mvp.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.springframework.stereotype.Repository;

import com.businessintelli.mvp.model.Consumer;

@Repository
public class GenericJDBCDao 
{
	private Connection connection;

    
 public GenericJDBCDao() 
 {

     System.out.println("-------- Oracle JDBC Connection Testing ------");

     try {

         Class.forName("oracle.jdbc.driver.OracleDriver");

     } catch (ClassNotFoundException e) {

         System.out.println("Where is your Oracle JDBC Driver?");
         e.printStackTrace();
         return;
     }
     System.out.println("Oracle JDBC Driver Registered!");
 }

	public void openConnection() {

		try {

			connection = DriverManager.getConnection("jdbc:oracle:thin:@bizintelli.ckhkrxleqe3b.us-west-2.rds.amazonaws.com:1521:xe", "bizintelli", "Secbad2Iselin");

		} catch (Exception e) {

			System.out.println("Connection Failed! Check output console");
			e.printStackTrace();
			return;

		}
	}
     
     public void closeConnection(){
     	try{
     		connection.close();
     	} catch (Exception e){
     		e.printStackTrace();
     	}
     }

     public Connection getConnection()
     {
    	 return connection;
     }


}