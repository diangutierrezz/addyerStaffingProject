package Proyectof.dtos;

public class UsuarioHabilidades {

  private int id;
  private int id_usuario;
  private int id_habilidad;

  public UsuarioHabilidades(int id, int id_usuario, int id_habilidad) {
    this.id = id;
    this.id_usuario = id_usuario;
    this.id_habilidad = id_habilidad;
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

  public int getId_habilidad() {
    return id_habilidad;
  }

  public void setId_habilidad(int id_habilidad) {
    this.id_habilidad = id_habilidad;
  }

  @Override
  public String toString() {
    return "UsuarioHabilidades{" +
      "id=" + id +
      ", id_usuario=" + id_usuario +
      ", id_habilidad=" + id_habilidad +
      '}';
  }
}
