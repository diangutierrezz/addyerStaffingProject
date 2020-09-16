package com.proyecto.proyecto;

import Proyectof.dao.ProyectoHabilidadesDAO;
import Proyectof.dtos.ProyectoHabilidades;
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
}
