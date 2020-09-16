package Proyectof.dao;

import Proyectof.ConnectionManager;
import Proyectof.dtos.Proyecto;

import java.sql.PreparedStatement;
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
    ResultSet rs = stmt.executeQuery("select * from proyecto");

    while (rs.next()) {
      Proyecto p = new Proyecto(
        rs.getInt("id"),
        rs.getString("nombreproyecto"),
        rs.getString("descripcion"),
        rs.getString("fechainicio"),
        rs.getString("fechafinal")
      );
      proyectos.add(p);
    }
    this.db.cerrarConexion();

    return proyectos;
  }
  public List<Proyecto> obtenerProyectoColab(int id) throws SQLException {
    List<Proyecto> proyectosColab = new ArrayList<>();

    Statement stmt = this.db.obtenerConexion().createStatement();
    ResultSet rs = stmt.executeQuery("");

    while (rs.next()) {
      Proyecto p = new Proyecto(
        rs.getInt("id"),
        rs.getString("nombreproyecto"),
        rs.getString("descripcion"),
        rs.getString("fechainicio"),
        rs.getString("fechafinal")
      );
      proyectosColab.add(p);
    }
    this.db.cerrarConexion();

    return proyectosColab;
  }
  public void borrarProyecto(long id) throws SQLException {
    String sql = "delete from proyecto where id = ? ";
    PreparedStatement ps = this.db.obtenerConexion().prepareStatement(sql);
    ps.setLong(1, id);
    ps.executeUpdate();

  }

  public void modificarProyecto(long id, Proyecto p) throws SQLException {
    String sql = "update proyecto set  nombreproyecto=?, descripcion = ?, fechainicio = ?, " +
      "fechafinal = ?  where id = ? ";
    PreparedStatement ps = this.db.obtenerConexion().prepareStatement(sql);
    ps.setString(1,p.getNombreproyecto());
    ps.setString(2, p.getDescripcion());
    ps.setString(3, p.getFechainicio());
    ps.setString(4, p.getFechafinal());
    ps.setLong(5,id);
    ps.executeUpdate();
  }

  public void agregarProyecto(Proyecto p) throws SQLException {

    String query = "insert into proyecto (nombreproyecto, descripcion, fechainicio, fechafinal) " +
      "values (?, ?, ?, ?)";
    PreparedStatement pstmt = this.db.obtenerConexion().prepareStatement(query);
    pstmt.setString(1, p.getNombreproyecto());
    pstmt.setString(2, p.getDescripcion());
    pstmt.setString(3, p.getFechainicio());
    pstmt.setString(4, p.getFechafinal());
    pstmt.executeUpdate();
  }

}
