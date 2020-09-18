package com.proyecto.proyecto;

import Proyectof.dao.ProyectoHabilidadesDAO;
import Proyectof.dao.UsuarioProyectoDAO;
import Proyectof.dtos.ProyectoHabilidades;
import Proyectof.dtos.UsuarioProyecto;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.sql.SQLException;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ProyectoHabilidadesResource {
  private ProyectoHabilidadesDAO dao = new ProyectoHabilidadesDAO();

  @RequestMapping(method = RequestMethod.POST, value = "/proyectohabilidades/agregar/{uh}/{h}")
  public void setProyectoHabilidades(@RequestBody ProyectoHabilidades uh, @PathVariable("h") String h) {
    try {
      this.dao.agregarProyectoHabilidades(uh, h);
    } catch (SQLException e) {
      System.out.println(e.toString());

      throw new ResponseStatusException(
        HttpStatus.INTERNAL_SERVER_ERROR, "Se ha producido un error al agregar");
    }
  }

  @RequestMapping(method = RequestMethod.DELETE, value = "/HabilidadProyecto/{p}")
  public void borrarUsuario(@RequestBody ProyectoHabilidades p )throws SQLException {
    new ProyectoHabilidadesDAO().borrarHabilidadProyecto(p);
  }
}
