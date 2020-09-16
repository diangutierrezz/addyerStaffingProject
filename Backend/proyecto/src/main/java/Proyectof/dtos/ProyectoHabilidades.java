package Proyectof.dtos;

public class ProyectoHabilidades {
  private long id;
  private long id_proyecto;
  private long id_habilidades;

  public ProyectoHabilidades(long id, long id_proyecto, long id_habilidades) {
    this.id = id;
    this.id_proyecto = id_proyecto;
    this.id_habilidades = id_habilidades;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public long getId_proyecto() {
    return id_proyecto;
  }

  public void setId_proyecto(long id_proyecto) {
    this.id_proyecto = id_proyecto;
  }

  public long getId_habilidades() {
    return id_habilidades;
  }

  public void setId_habilidades(long id_habilidades) {
    this.id_habilidades = id_habilidades;
  }
}
