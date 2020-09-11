package Proyectof.dtos;

public class usuario {

    private long id;
    private String rol;
    private String nombre;
    private String apellido;
    private String rut;
    private String correo;
    private String contraseña;
    private String cargo;
    private String habilidad;

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getRol() {
    return rol;
  }

  public void setRol(String rol) {
    this.rol = rol;
  }

  public String getNombre() {
    return nombre;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public String getApellido() {
    return apellido;
  }

  public void setApellido(String apellido) {
    this.apellido = apellido;
  }

  public String getRut() {
    return rut;
  }

  public void setRut(String rut) {
    this.rut = rut;
  }

  public String getCorreo() {
    return correo;
  }

  public void setCorreo(String correo) {
    this.correo = correo;
  }

  public String getContraseña() {
    return contraseña;
  }

  public void setContraseña(String contraseña) {
    this.contraseña = contraseña;
  }

  public String getCargo() {
    return cargo;
  }

  public void setCargo(String cargo) {
    this.cargo = cargo;
  }

  public String getHabilidad() {
    return habilidad;
  }

  public void setHabilidad(String habilidad) {
    this.habilidad = habilidad;
  }

  @Override
  public String toString() {
    return "usuario{" +
      "id=" + id +
      ", rol='" + rol + '\'' +
      ", nombre='" + nombre + '\'' +
      ", apellido='" + apellido + '\'' +
      ", rut='" + rut + '\'' +
      ", correo='" + correo + '\'' +
      ", contraseña='" + contraseña + '\'' +
      ", cargo='" + cargo + '\'' +
      ", habilidad='" + habilidad + '\'' +
      '}';
  }

  public usuario(long id, String rol, String nombre, String apellido, String rut, String correo, String contraseña, String cargo, String habilidad) {
    this.id = id;
    this.rol = rol;
    this.nombre = nombre;
    this.apellido = apellido;
    this.rut = rut;
    this.correo = correo;
    this.contraseña = contraseña;
    this.cargo = cargo;
    this.habilidad = habilidad;


  }
}
