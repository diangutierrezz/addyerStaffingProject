package Proyectof.dao;
import Proyectof.ConnectionManager;
import Proyectof.dtos.UsuarioHabilidades;
import Proyectof.dtos.UsuarioHabilidades;
import Proyectof.dtos.UsuarioProyecto;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class UsuarioHabilidadesDAO {
  private ConnectionManager db = new ConnectionManager();

  public List<UsuarioHabilidades> mostrarUsuarioHabilidades(long id) throws SQLException {
    List<UsuarioHabilidades> usuarioHabilidades = new ArrayList<>();

    Statement stmt = this.db.obtenerConexion().createStatement();
    ResultSet rs = stmt.executeQuery("select Distinct u.id, u.id_usuario, u.habilidad " +
      "from usuario join usuariohabilidades as u on usuario.id = u.id_usuario " +
      "join habilidades on u.habilidad = u.habilidad " +
      "where u.id_usuario = " + Long.toString(id));


    while (rs.next()) {
      UsuarioHabilidades uh = new UsuarioHabilidades(
        rs.getInt("id"),
        rs.getInt("id_usuario"),
        rs.getInt("id_habilidad")
      );
      usuarioHabilidades.add(uh);
    }
    this.db.cerrarConexion();

    return usuarioHabilidades;

  }

  public void agregarUsuarioHabilidades(UsuarioHabilidades uh, String h) throws SQLException {
    String query = "insert into usuariohabilidades (id_usuario, id_habilidad) values " +
      " (?,(select id from habilidades where habilidad = ?))";

    PreparedStatement pstmt = this.db.obtenerConexion().prepareStatement(query);
    pstmt.setInt(1, uh.getId_usuario());
    pstmt.setString(2, h);


    pstmt.executeUpdate();
    this.db.cerrarConexion();
  }

  public void CrearUsuarioHabilidades(String rut, String h) throws SQLException {
    String query = " insert into usuariohabilidades (id_usuario, id_habilidad) values " +
      " ((select id from usuario where rut = ?),(select id from habilidades where habilidad = ?))";

    PreparedStatement pstmt = this.db.obtenerConexion().prepareStatement(query);
    pstmt.setString(1, rut);
    pstmt.setString(2, h);
    pstmt.executeUpdate();
    this.db.cerrarConexion();
  }

  public List<UsuarioHabilidades> mostrarUsuarioHabilidadesPorRut(String rut) throws SQLException {
    List<UsuarioHabilidades> usuarioHabilidades = new ArrayList<>();

    Statement stmt = this.db.obtenerConexion().createStatement();
    ResultSet rs = stmt.executeQuery("select Distinct u.id, u.id_usuario, u.habilidad " +
      "from usuario join usuariohabilidades as u on usuario.id = u.id_usuario " +
      "join habilidades on u.habilidad = u.habilidad " +
      "where u.rut = ?");


    while (rs.next()) {
      UsuarioHabilidades uh = new UsuarioHabilidades(
        rs.getInt("id"),
        rs.getInt("id_usuario"),
        rs.getInt("id_habilidad")
      );
      usuarioHabilidades.add(uh);
    }
    this.db.cerrarConexion();

    return usuarioHabilidades;

  }

  public void borrarHabilidadProyecto(UsuarioHabilidades p) throws SQLException {
    String sql = " delete from usuariohabilidades where id_usuario = ? and id_habilidades = ? ";
    PreparedStatement ps = this.db.obtenerConexion().prepareStatement(sql);
    ps.setInt(1, p.getId_usuario());
    ps.setInt(2, p.getId_habilidad());
    ps.executeUpdate();
  }


}
