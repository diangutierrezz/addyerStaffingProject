package Proyectof.dtos;

public class Proyecto {

    private long id;
    private String nombreproyecto;
    private String descripcion;
    private String fechainicio;
    private String fechafinal;
    private String habilidades;

    public Proyecto(long id, String nombreproyecto, String descripcion, String fechainicio, String fechafinal, String habilidades) {
        this.id = id;
        this.nombreproyecto = nombreproyecto;
        this.descripcion = descripcion;
        this.fechainicio = fechainicio;
        this.fechafinal = fechafinal;
        this.habilidades = habilidades;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombreproyecto() {
        return nombreproyecto;
    }

    public void setNombreproyecto(String nombreproyecto) {
        this.nombreproyecto = nombreproyecto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFechainicio() {
        return fechainicio;
    }

    public void setFechainicio(String fechainicio) {
        this.fechainicio = fechainicio;
    }

    public String getFechafinal() {
        return fechafinal;
    }

    public void setFechafinal(String fechafinal) {
        this.fechafinal = fechafinal;
    }

    public String getHabilidades() {
        return habilidades;
    }

    public void setHabilidades(String habilidades) {
        this.habilidades = habilidades;
    }

    @Override
    public String toString() {
        return "Proyecto{" +
                "id=" + id +
                ", nombreproyecto='" + nombreproyecto + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", fechainicio='" + fechainicio + '\'' +
                ", fechafinal='" + fechafinal + '\'' +
                ", habilidades='" + habilidades + '\'' +
                '}';
    }
}