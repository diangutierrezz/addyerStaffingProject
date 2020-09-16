package Proyectof.dao;

import Proyectof.ConnectionManager;
import Proyectof.dtos.ProyectoHabilidades;

import java.sql.PreparedStatement;
import java.sql.SQLException;

public class ProyectoHabilidadesDAO {
  private ConnectionManager db = new ConnectionManager();

  public void agregarProyectoHabilidades(ProyectoHabilidades uh, String h) throws SQLException {
    String query = "insert into proyectohabilidades (id_proyecto, id_habilidad) values " +
      " (?,(select id from habilidades where habilidad = ?))";

    PreparedStatement pstmt = this.db.obtenerConexion().prepareStatement(query);
    pstmt.setLong(1, uh.getId_proyecto());
    pstmt.setString(2, h);


    pstmt.executeUpdate();
    this.db.cerrarConexion();
  }

}
