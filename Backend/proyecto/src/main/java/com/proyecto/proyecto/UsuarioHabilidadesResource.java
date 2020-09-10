package com.proyecto.proyecto;

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

  @RequestMapping(method = RequestMethod.GET, value = "/usuariohabilidades/")
  public List<UsuarioHabilidades> getUsuarioHabilidades() {
    List<UsuarioHabilidades> usuarioHabilidades = new ArrayList<>();

    try {
      usuarioHabilidades = this.dao.mostrarUsuarioHabilidades();
    } catch (SQLException e) {
      System.out.println(e.toString());
    }

    return usuarioHabilidades;
  }

  @RequestMapping(method = RequestMethod.POST, value = "/usuariohabilidades/agregar/")
  public void setUsuarioHabilidades(@RequestBody UsuarioHabilidades uh) {
    try {
      this.dao.agregarUsuarioHabilidades(uh);
    } catch (SQLException e) {
      System.out.println(e.toString());

      throw new ResponseStatusException(
        HttpStatus.INTERNAL_SERVER_ERROR, "Se ha producido un error al agregar");
    }
  }
}
