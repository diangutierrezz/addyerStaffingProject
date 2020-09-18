package Proyectof.dao;

import Proyectof.ConnectionManager;
import Proyectof.dtos.ProyectoHabilidades;
import Proyectof.dtos.UsuarioProyecto;

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

  public void borrarHabilidadProyecto(ProyectoHabilidades p) throws SQLException {
    String sql = " delete from proyectohabilidades where id_proyecto = ? and  id_habilidades = ? ";
    PreparedStatement ps = this.db.obtenerConexion().prepareStatement(sql);
    ps.setLong(1, p.getId_proyecto());
    ps.setLong(2, p.getId_habilidades());
    ps.executeUpdate();
  }

}
