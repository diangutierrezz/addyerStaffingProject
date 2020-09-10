package com.proyecto.proyecto;

import Proyectof.dao.HabilidadesDAO;

import Proyectof.dao.UsuarioDAO;
import Proyectof.dtos.Habilidades;
import Proyectof.dtos.UsuarioHabilidades;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class HabilidadesResource {
  private HabilidadesDAO dao = new HabilidadesDAO();

  @RequestMapping(method = RequestMethod.GET, value = "/api/habilidades")
  public List<Habilidades> getHabilidades() {
    List<Habilidades> Habilidades = new ArrayList<>();

    try {
      Habilidades = this.dao.mostrarHabilidades();
    } catch (SQLException e) {
      System.out.println(e.toString());
    }

    return Habilidades;
  }

  @RequestMapping(method = RequestMethod.POST, value = "/api/agregar/")
  public void setHabilidad(@RequestBody Habilidades h) {
    try {
      this.dao.agregarHabilidades(h);
    } catch (SQLException e) {
      System.out.println(e.toString());

      throw new ResponseStatusException(
        HttpStatus.INTERNAL_SERVER_ERROR, "Se ha producido un error al agregar");
    }
  }

  @RequestMapping(method = RequestMethod.DELETE, value = "/habilidad/{id}")
  public void borrarHabilidad(@PathVariable("id") long id) throws SQLException {
    new HabilidadesDAO().borrarHabilidad(id);
  }
}
