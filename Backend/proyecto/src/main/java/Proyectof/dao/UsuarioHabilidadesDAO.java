package Proyectof.dao;
import Proyectof.ConnectionManager;
import Proyectof.dtos.UsuarioHabilidades;
import Proyectof.dtos.UsuarioHabilidades;

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
    ResultSet rs = stmt.executeQuery("select Distinct u.id, u.id_usuario, u.habilidad "+
      "from usuario join usuariohabilidades as u on usuario.id = u.id_usuario "+
      "join habilidades on u.habilidad = u.habilidad "+
      "where u.id_usuario = " + Long.toString(id));


    while (rs.next()) {
      UsuarioHabilidades uh = new UsuarioHabilidades(
        rs.getLong("id"),
        rs.getLong("id_usuario"),
        rs.getString("habilidad")
      );
      usuarioHabilidades.add(uh);
    }
    this.db.cerrarConexion();

    return usuarioHabilidades;

  }

  public void agregarUsuarioHabilidades (UsuarioHabilidades uh) throws SQLException {
    String query = "insert into usuariohabilidades (id_usuario, habilidad) values (?, ?)";

    PreparedStatement pstmt = this.db.obtenerConexion().prepareStatement(query);
    pstmt.setLong(1,uh.getId_usuario());
    pstmt.setString(2,uh.getHabilidad());

    pstmt.executeUpdate();
    this.db.cerrarConexion();
  }

}
