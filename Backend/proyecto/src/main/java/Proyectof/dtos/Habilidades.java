package Proyectof.dtos;

public class Habilidades {

    private long id;
    private String habilidad;

    public Habilidades(long id, String habilidad) {
        this.id = id;
        this.habilidad = habilidad;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getHabilidad() {
        return habilidad;
    }

    public void setHabilidad(String habilidad) {
        this.habilidad = habilidad;
    }

    @Override
    public String toString() {
        return "Habilidades{" +
                "id=" + id +
                ", habilidad='" + habilidad + '\'' +
                '}';
    }
}
