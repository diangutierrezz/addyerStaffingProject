package Proyectof;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionManager {
    private static Connection connection = null;
   // private static String url = "jdbc:sqlserver://localhost:1433; databasename=TALLER8; user=sa; password=Minombrenoessebastian2020.";
    private static String url = "jdbc:sqlserver://localhost:1433; databasename=Proyecto; integratedSecurity=true";

    public Connection obtenerConexion() throws SQLException {
        if( this.connection == null ) {
            this.connection = DriverManager.getConnection( url );
        }
        return this.connection;
    }

    public void cerrarConexion() throws SQLException {
        this.connection.close();
        this.connection = null;
    }
}
