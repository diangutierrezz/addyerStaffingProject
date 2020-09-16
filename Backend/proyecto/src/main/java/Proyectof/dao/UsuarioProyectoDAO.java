package Proyectof.dao;

import Proyectof.ConnectionManager;
import Proyectof.dtos.ProyectoHabilidades;
import Proyectof.dtos.UsuarioProyecto;

import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UsuarioProyectoDAO {
  private ConnectionManager db = new ConnectionManager();

  public void agregarColabProyecto(UsuarioProyecto uh, long h) throws SQLException {
    String query =
      "insert into usuarioproyecto (id_usuario, id_proyecto) values" +
      "       (?,(select id from proyecto where id = ?))";

    PreparedStatement pstmt = this.db.obtenerConexion().prepareStatement(query);
    pstmt.setLong(1, uh.getId_usuario());
    pstmt.setLong(2, h);

    pstmt.executeUpdate();
    this.db.cerrarConexion();
  }
}
