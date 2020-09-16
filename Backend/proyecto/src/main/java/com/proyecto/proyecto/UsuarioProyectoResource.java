package com.proyecto.proyecto;


import Proyectof.dao.UsuarioProyectoDAO;
import Proyectof.dtos.UsuarioHabilidades;
import Proyectof.dtos.UsuarioProyecto;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.sql.SQLException;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UsuarioProyectoResource {
  private UsuarioProyectoDAO dao = new UsuarioProyectoDAO();


  @RequestMapping(method = RequestMethod.POST, value = "/usuarioproyecto/agregar/{uh}/{h}")
  public void setUsuarioProyectos(@RequestBody UsuarioProyecto uh, @PathVariable("h") long h) {
    try {
      this.dao.agregarColabProyecto(uh,h);
    } catch (SQLException e) {
      System.out.println(e.toString());

      throw new ResponseStatusException(
        HttpStatus.INTERNAL_SERVER_ERROR, "Se ha producido un error al agregar");
    }
  }


}
