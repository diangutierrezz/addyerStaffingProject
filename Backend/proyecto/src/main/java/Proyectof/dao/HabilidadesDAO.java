package Proyectof.dao;

import Proyectof.ConnectionManager;
import Proyectof.dtos.Habilidades;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class HabilidadesDAO {
    private ConnectionManager db = new ConnectionManager();

  public List<Habilidades> mostrarHabilidades () throws SQLException {
    List<Habilidades> habilidades = new ArrayList<>();

    Statement stmt = this.db.obtenerConexion().createStatement();
    ResultSet rs = stmt.executeQuery("select id, habilidad from habilidades");

    while (rs.next()) {
      Habilidades h = new Habilidades(
        rs.getInt("id"),
        rs.getString("habilidad")
      );
      habilidades.add(h);
    }
    this.db.cerrarConexion();

    return habilidades;
  }
  public void agregarHabilidades (Habilidades h) throws SQLException {
    String query = "insert into habilidades (habilidad) values (?)";

    PreparedStatement pstmt = this.db.obtenerConexion().prepareStatement(query);
    pstmt.setString(1,h.getHabilidad());

    pstmt.executeUpdate();
    this.db.cerrarConexion();
  }

  public void borrarHabilidad(long id) throws SQLException {
    String sql = "delete from habilidades where id = ? ";
    PreparedStatement ps = this.db.obtenerConexion().prepareStatement(sql);
    ps.setLong(1, id);
    ps.executeUpdate();

  }
}
