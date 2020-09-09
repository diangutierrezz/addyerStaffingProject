package Proyectof.dao;

import Proyectof.ConnectionManager;
import Proyectof.dtos.usuario;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class UsuarioDAO {
  private ConnectionManager db = new ConnectionManager();

  public List<usuario> listarUsuarios() throws SQLException {
    List<usuario> COLABORADORES = new ArrayList<usuario>();

    Statement stmt = this.db.obtenerConexion().createStatement();
    ResultSet rs = stmt.executeQuery("select ID, ROL, NOMBRE, APELLIDO, RUT, " +
      " CORREO, CONTRASEÑA, CARGO from USUARIO");

    while (rs.next()) {
      usuario n = new usuario(
        rs.getInt("ID"),
        rs.getString("ROL"),
        rs.getString("NOMBRE"),
        rs.getString("APELLIDO"),
        rs.getString("RUT"),
        rs.getString("CORREO"),
        rs.getString("CONTRASEÑA"),
        rs.getString("CARGO")
      );
      COLABORADORES.add(n);
    }
    this.db.cerrarConexion();
    return COLABORADORES;
  }

  public void agregarUsuario(usuario n) throws SQLException {
    String query = "insert into usuario ( ROL, NOMBRE, APELLIDO, RUT, CORREO, CONTRASEÑA, CARGO) " +
      " values ( ?, ?, ?, ?, ?, ?, ?)";

    PreparedStatement pstmt = this.db.obtenerConexion().prepareStatement(query);
    pstmt.setString(1, n.getRol());
    pstmt.setString(2, n.getNombre());
    pstmt.setString(3, n.getApellido());
    pstmt.setString(4, n.getRut());
    pstmt.setString(5, n.getCorreo());
    pstmt.setString(6, n.getContraseña());
    pstmt.setString(7, n.getCargo());

    pstmt.executeUpdate();
    this.db.cerrarConexion();
  }

  public usuario loginAdmin(usuario u) throws SQLException {
    String sql = "SELECT * FROM USUARIO WHERE CORREO = '" + u.getCorreo() + "' AND CONTRASEÑA = '" + u.getContraseña() +
      "' AND ROL = 'Admin'";
    PreparedStatement ps = this.db.obtenerConexion().prepareStatement(sql);
    ResultSet rs = ps.executeQuery();
    rs.next();
      int idu = rs.getInt(1);
      String rolu = rs.getString(2);
      String nombreu = rs.getString(3);
      String apellidou = rs.getString(4);
      String rutu = rs.getString(5);
      String correou = rs.getString(6);
      String contraseñau = rs.getString(7);
      String cargou = rs.getString(8);

      return new usuario(idu, rolu, nombreu, apellidou, rutu, correou, contraseñau, cargou);

  }

  public usuario logincolab(usuario a) throws SQLException {
    String sql = "SELECT * FROM USUARIO WHERE CORREO = '" + a.getCorreo() + "' AND CONTRASEÑA = '" + a.getContraseña() +
      "' AND ROL = 'colab'";
    PreparedStatement ps = this.db.obtenerConexion().prepareStatement(sql);
    ResultSet rs = ps.executeQuery();
    rs.next();
    int idu = rs.getInt(1);
    String rolu = rs.getString(2);
    String nombreu = rs.getString(3);
    String apellidou = rs.getString(4);
    String rutu = rs.getString(5);
    String correou = rs.getString(6);
    String contraseñau = rs.getString(7);
    String cargou = rs.getString(8);

    return new usuario(idu, rolu, nombreu, apellidou, rutu, correou, contraseñau, cargou);
  }

}
