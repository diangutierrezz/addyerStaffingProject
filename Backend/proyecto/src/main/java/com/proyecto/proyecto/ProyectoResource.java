package com.proyecto.proyecto;


import Proyectof.dao.ProyectoDAO;
import Proyectof.dao.UsuarioDAO;
import Proyectof.dtos.Habilidades;
import Proyectof.dtos.Proyecto;
import Proyectof.dtos.usuario;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ProyectoResource {
  private ProyectoDAO dao = new ProyectoDAO();

  @RequestMapping(method = RequestMethod.GET, value = "/api/proyectos")
  public List<Proyecto> getProyectos() {
    List<Proyecto> proyectos = new ArrayList<>();

    try {
      proyectos = this.dao.mostrarProyectos();
    } catch (SQLException e) {
      System.out.println(e.toString());
    }

    return proyectos;
  }

  @RequestMapping(method = RequestMethod.GET, value = "/proyectos/colab/{id}")
  public List<Proyecto> getProyectosColab (@PathVariable("id") int id) throws SQLException {
    List<Proyecto> proyectos = new ProyectoDAO().obtenerProyectoColab(id);
    return proyectos;
  }

  @RequestMapping(method = RequestMethod.DELETE, value = "/proyecto/{id}")
  public void borrarProyecto(@PathVariable("id") long id) throws SQLException {
    new ProyectoDAO().borrarProyecto(id);
  }

  @RequestMapping(method = RequestMethod.PUT, value = "/proyecto/modificiar/{id}")
  public void editarProyecto(@PathVariable("id") long id,
                            @RequestBody Proyecto p) throws SQLException {
    new ProyectoDAO().modificarProyecto(id, p);
  }

  @RequestMapping(method = RequestMethod.POST, value = "/proyecto/agregar/")
  public void postProyecto(@RequestBody Proyecto p) {
    try {
      this.dao.agregarProyecto(p);
    } catch (SQLException e) {
      System.out.println(e.toString());

      throw new ResponseStatusException(
        HttpStatus.INTERNAL_SERVER_ERROR, "Se ha producido un error al crear proyecto"
      );
    }
  }
}
