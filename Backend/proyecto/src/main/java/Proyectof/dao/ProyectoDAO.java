package Proyectof.dao;

import Proyectof.ConnectionManager;
import Proyectof.dtos.Proyecto;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class ProyectoDAO {
    private ConnectionManager db = new ConnectionManager();

  public List<Proyecto> mostrarProyectos () throws SQLException {
    List<Proyecto> proyectos = new ArrayList<>();

    Statement stmt = this.db.obtenerConexion().createStatement();
    ResultSet rs = stmt.executeQuery("select * from proyectos");

    while (rs.next()) {
      Proyecto p = new Proyecto(
        rs.getInt("id"),
        rs.getString("nombreproyecto"),
        rs.getString("descripcion"),
        rs.getString("fechainicio"),
        rs.getString("fechafinal"),
        rs.getString("habilidades")
      );
      proyectos.add(p);
    }
    this.db.cerrarConexion();

    return proyectos;
  }
  public List<Proyecto> obtenerProyectoPorColab(int id) throws SQLException {
    List<Proyecto> proyectosColab = new ArrayList<>();

    Statement stmt = this.db.obtenerConexion().createStatement();
    ResultSet rs = stmt.executeQuery("");

    while (rs.next()) {
      Proyecto p = new Proyecto(
        rs.getInt("id"),
        rs.getString("nombreproyecto"),
        rs.getString("descripcion"),
        rs.getString("fechainicio"),
        rs.getString("fechafinal"),
        rs.getString("habilidades")
      );
      proyectosColab.add(p);
    }
    this.db.cerrarConexion();

    return proyectosColab;
  }

}
