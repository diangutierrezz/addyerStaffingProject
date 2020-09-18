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

  public void borrarColabProyecto(UsuarioProyecto p) throws SQLException {
    String sql = " delete from usuarioproyecto where id_usuario =  ? and id_proyecto = ? ";
    PreparedStatement ps = this.db.obtenerConexion().prepareStatement(sql);
    ps.setInt(1, p.getId_usuario());
    ps.setInt(2, p.getId_proyecto());
    ps.executeUpdate();
  }
}
