package com.proyecto.proyecto;

import Proyectof.dao.UsuarioDAO;
import Proyectof.dao.UsuarioHabilidadesDAO;
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
public class UsuarioHabilidadesResource {
  private UsuarioHabilidadesDAO dao = new UsuarioHabilidadesDAO();

  @RequestMapping(method = RequestMethod.GET, value = "/usuariohabilidades/{id}")
  public List<UsuarioHabilidades> getUsuarioHabilidades(@PathVariable("id") long id) {
    List<UsuarioHabilidades> usuarioHabilidades = new ArrayList<>();

    try {
      usuarioHabilidades = this.dao.mostrarUsuarioHabilidades(id);
    } catch (SQLException e) {
      System.out.println(e.toString());
    }

    return usuarioHabilidades;
  }


  @RequestMapping(method = RequestMethod.POST, value = "/usuariohabilidades/agregar/{uh}/{h}")
  public void setUsuarioHabilidades(@RequestBody UsuarioHabilidades uh,@PathVariable("h") String h) {
    try {
      this.dao.agregarUsuarioHabilidades(uh, h);
    } catch (SQLException e) {
      System.out.println(e.toString());

      throw new ResponseStatusException(
        HttpStatus.INTERNAL_SERVER_ERROR, "Se ha producido un error al agregar");
    }
  }

  @RequestMapping(method = RequestMethod.POST, value = "/usuariohabilidades/crear/{rut}/{h}")
  public void CREATEUsuarioHabilidades(@PathVariable("rut") String rut,@PathVariable("h") String h) {
    try {
      this.dao.CrearUsuarioHabilidades(rut, h);
    } catch (SQLException e) {
      System.out.println(e.toString());

      throw new ResponseStatusException(
        HttpStatus.INTERNAL_SERVER_ERROR, "Se ha producido un error al agregar");
    }
  }


}
