package test01;
// Value Object:一個Object代表Dept Table一筆Row

import java.io.*;

public class Dept implements Serializable{

    private int deptid;
    private String deptname;
 
    //Constructor
    public Dept(int deptid, String deptname) {
      this.deptid = deptid;
      this.deptname = deptname;
    }

    public int getDeptid() {
      return this.deptid ;
    }

    public String getDeptname() {
      return this.deptname ;
    }

    public void setDeptname(String deptname) {
      this.deptname = deptname;
    }

}