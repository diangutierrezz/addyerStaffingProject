package Proyectof.dao;

import Proyectof.ConnectionManager;
import Proyectof.dtos.Habilidades;
import Proyectof.dtos.UsuarioHabilidades;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class UsuarioHabilidadesDAO {
  private ConnectionManager db = new ConnectionManager();

  public List<UsuarioHabilidades> mostrarUsuarioHabilidades() throws SQLException {
    List<UsuarioHabilidades> usuarioHabilidades = new ArrayList<>();

    Statement stmt = this.db.obtenerConexion().createStatement();
    ResultSet rs = stmt.executeQuery("");

    while (rs.next()) {
      UsuarioHabilidades uh = new UsuarioHabilidades(
        rs.getLong("id"),
        rs.getLong("id_usuario"),
        rs.getLong("id_habilidades")
      );
      usuarioHabilidades.add(uh);
    }
    this.db.cerrarConexion();

    return usuarioHabilidades;
  }

  public void agregarUsuarioHabilidades (UsuarioHabilidades uh) throws SQLException {
    String query = "insert into usuariohabilidades (id, id_usuario, id_habilidad) values (?, ?, ?)";

    PreparedStatement pstmt = this.db.obtenerConexion().prepareStatement(query);
    pstmt.setLong(1,uh.getId());
    pstmt.setLong(2,uh.getId_usuario());
    pstmt.setLong(3,uh.getId_habilidades());

    pstmt.executeUpdate();
    this.db.cerrarConexion();
  }

}
