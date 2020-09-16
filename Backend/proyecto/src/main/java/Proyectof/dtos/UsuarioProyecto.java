package Proyectof.dtos;

import Proyectof.ConnectionManager;

public class UsuarioProyecto {
  private long id;
  private long id_usuario;
  private long id_proyecto;

  public UsuarioProyecto(long id, long id_usuario, long id_proyecto) {
    this.id = id;
    this.id_usuario = id_usuario;
    this.id_proyecto = id_proyecto;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public long getId_usuario() {
    return id_usuario;
  }

  public void setId_usuario(long id_usuario) {
    this.id_usuario = id_usuario;
  }

  public long getId_proyecto() {
    return id_proyecto;
  }

  public void setId_proyecto(long id_proyecto) {
    this.id_proyecto = id_proyecto;
  }
}

