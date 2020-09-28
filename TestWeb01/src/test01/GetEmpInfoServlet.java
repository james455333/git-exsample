package test01;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.PrintWriter;
import java.io.IOException;
import java.sql.*;
import javax.naming.*;
import javax.sql.*;

public class GetEmpInfoServlet extends HttpServlet {

  private static final String CONTENT_TYPE = "text/html; charset=UTF-8";

  DataSource ds = null;

  public void init() throws ServletException
  {
    try 
    {
      InitialContext ctxt = new InitialContext();
      ds = (DataSource) ctxt.lookup("java:comp/env/jdbc/xe");  // for Oracle DB
    }
    catch (NamingException ne)
    {
      throw new ServletException(ne);
    }
  }

  public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
  {
    request.setCharacterEncoding("UTF-8");
    String queryVal = request.getParameter("queryVal");
    String query = "select employee_id, first_name from employees " + 
                   "where first_name like \'" + queryVal + "\'";
    
    System.out.println(query);
      
    response.setContentType(CONTENT_TYPE);
    PrintWriter out = response.getWriter();
    out.println("<html>");
    out.println("<head><title>GetEmployeeInfoServlet</title></head>");
    out.println("<body>");
    
    try 
    {
      System.out.println("before connection");	
      Connection conn = ds.getConnection();
      System.out.println("after connection");	
      Statement stmt = conn.createStatement();
      ResultSet rs = stmt.executeQuery(query);

      out.println("<table border=1 width=50%>");
      out.println("<tr><th width=25%>Emplyee ID</th>" +
                  "<th width=75%>Employee First Name</th></tr>");
      for (int count = 0; ; count++) 
      {
        if (rs.next())
        {
          out.println("<tr><td>"+ rs.getInt(1) + "</td><td>" +
                      rs.getString(2) + "</td></tr>");
        }
        else 
        {
          out.println("</table><h3>" + count + " rows retrieved</h3>");
          break;
        }
      }
      rs.close();
      stmt.close();
      conn.close();
    }
    catch (SQLException se)
    {
      se.printStackTrace(out);
    }
    
    out.println("</body></html>");
    out.close();
  }
}