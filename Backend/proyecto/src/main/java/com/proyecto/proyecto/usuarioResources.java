package com.proyecto.proyecto;

import Proyectof.dao.UsuarioDAO;
import Proyectof.dtos.usuario;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class usuarioResources {

    private UsuarioDAO dao = new UsuarioDAO();

   @RequestMapping(method = RequestMethod.GET, value = "/usuario/")
    public List<usuario> getNoticia() {
      List<usuario> colab = new ArrayList<>();

      try {
        colab = this.dao.listarUsuarios();
      } catch (SQLException e) {
        System.out.println(e.toString());
      }

      return colab;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/usuario/agregar/")
    public void setNoticia(@RequestBody usuario n) {
      try {
        this.dao.agregarUsuario(n);
      } catch (SQLException e) {
        System.out.println(e.toString());

        throw new ResponseStatusException(
          HttpStatus.INTERNAL_SERVER_ERROR, "Se ha producido un error al insertar la usuario"
        );
      }
    }
  @RequestMapping(method = RequestMethod.POST, value = "loginAdmin")
  public usuario loginAdmin(@RequestBody usuario u) throws SQLException {
    return new UsuarioDAO().loginAdmin(u);
  }

  @RequestMapping(method = RequestMethod.POST, value = "logincolab")
  public usuario loginUsuario(@RequestBody usuario a) throws SQLException {
    return new UsuarioDAO().logincolab(a);
  }
  @RequestMapping(method = RequestMethod.DELETE, value = "/usuario/{id}")
  public void borrarUsuario(@PathVariable("id") long id) throws SQLException {
    new UsuarioDAO().borrarUsuario(id);
  }
  @RequestMapping(method = RequestMethod.PUT, value = "/usuario/modificar/{id}")
  public void editarUsuario(@PathVariable("id") long id,
                            @RequestBody usuario p) throws SQLException {
    new UsuarioDAO().modificarUsuario(id,p);
  }
  @RequestMapping(method = RequestMethod.GET, value = "/enviarClave/{correo}")
  public void enviarClave(@PathVariable("correo") String correo
                                 ) throws SQLException {
   new UsuarioDAO().enviarClave(correo);

  }

  }

