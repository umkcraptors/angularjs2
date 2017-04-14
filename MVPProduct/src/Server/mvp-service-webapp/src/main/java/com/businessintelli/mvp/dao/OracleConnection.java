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
public class OracleConnection {
	   Connection connection;
	   Statement stmt;
    PreparedStatement pStmt;
    
 public OracleConnection() {

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

     public void openConnection(){
     //Connection connection = null;

     try { 

    	 connection = DriverManager.getConnection(
                 "jdbc:oracle:thin:@localhost:1521:xe", "student", "student");

     } catch (Exception e) {

         System.out.println("Connection Failed! Check output console");
         e.printStackTrace();
         return;

     }
     }
     
     public Consumer retrieveConsumer(int pid)
    		    //throws SQLException 
     {

    		   /* Statement stmt = null;
    		    String query =
    		        "select consumer_firstname, consumer_email, consumer_phone, " +
    		        "from " + "CONSUMER";*/

    		    try {
    		    	String sql = "Select * from CONSUMER";
    		        pStmt = connection.prepareStatement(sql);
    		        ResultSet rs = pStmt.executeQuery("select * from CONSUMER");
    		        while (rs.next()) {
    		        	Consumer c= new Consumer();
    		        	c.setfirstName(rs.getString("consumer_firstname"));
    		        	c.setEmail(rs.getString("consumer_email"));
    		        	c.setPhone(rs.getString("consumer_phone"));
    		            c.setlastName(rs.getString("consumer_lastname"));
    		            return c;
    		        }
    		    } catch (SQLException e ) {
    		    	e.printStackTrace();
    		    	
    		    }
    		    return null;
    		    	//JDBCTutorialUtilities.printSQLException(e);
    		   /* } finally {
    		        if (stmt != null) { stmt.close(); }
    		    }*/
    		}
     public void closeConnection(){
     	try{
     		pStmt.close();
     		connection.close();
     	} catch (Exception e){
     		e.printStackTrace();
     	}
     }




}