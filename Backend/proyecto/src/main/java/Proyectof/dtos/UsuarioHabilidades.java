package Proyectof.dtos;

public class  UsuarioHabilidades {

  private long id;
  private long id_usuario;
  private long id_habilidades;

  public UsuarioHabilidades(long id, long id_usuario, long id_habilidades) {
    this.id = id;
    this.id_usuario = id_usuario;
    this.id_habilidades = id_habilidades;
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

  public long getId_habilidades() {
    return id_habilidades;
  }

  public void setId_habilidades(long id_habilidades) {
    this.id_habilidades = id_habilidades;
  }

  @Override
  public String toString() {
    return "UsuarioHabilidades{" +
      "id=" + id +
      ", id_usuario=" + id_usuario +
      ", id_habilidades=" + id_habilidades +
      '}';
  }
}
