package Proyectof.dao;

import Proyectof.ConnectionManager;
import Proyectof.dtos.Habilidades;

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
    ResultSet rs = stmt.executeQuery("");

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
}
