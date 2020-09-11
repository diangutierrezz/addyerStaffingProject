package Proyectof.dtos;

public class UsuarioHabilidades {

  private long id;
  private long id_usuario;
  private String habilidad;

  public UsuarioHabilidades(long id, long id_usuario, String habilidad) {
    this.id = id;
    this.id_usuario = id_usuario;
    this.habilidad = habilidad;
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

  public String getHabilidad() {
    return habilidad;
  }

  public void setHabilidad(String habilidad) {
    this.habilidad = habilidad;
  }

  @Override
  public String toString() {
    return "UsuarioHabilidades{" +
      "id=" + id +
      ", id_usuario=" + id_usuario +
      ", habilidad=" + habilidad +
      '}';
  }
}
