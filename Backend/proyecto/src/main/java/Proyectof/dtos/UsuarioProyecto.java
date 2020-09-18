package Proyectof.dtos;

import Proyectof.ConnectionManager;

public class UsuarioProyecto {
  private int id;
  private int id_usuario;
  private int id_proyecto;

  public UsuarioProyecto(int id, int id_usuario, int id_proyecto) {
    this.id = id;
    this.id_usuario = id_usuario;
    this.id_proyecto = id_proyecto;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public int getId_usuario() {
    return id_usuario;
  }

  public void setId_usuario(int id_usuario) {
    this.id_usuario = id_usuario;
  }

  public int getId_proyecto() {
    return id_proyecto;
  }

  public void setId_proyecto(int id_proyecto) {
    this.id_proyecto = id_proyecto;
  }
}

