package Proyectof.dao;

import Proyectof.ConnectionManager;
import Proyectof.dtos.usuario;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.Session;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

public class UsuarioDAO {
  private ConnectionManager db = new ConnectionManager();

  public List<usuario> listarUsuarios() throws SQLException {
    List<usuario> COLABORADORES = new ArrayList<usuario>();

    Statement stmt = this.db.obtenerConexion().createStatement();
    ResultSet rs = stmt.executeQuery("select ID, ROL, NOMBRE, APELLIDO, RUT, " +
      " CORREO, CONTRASEÑA, CARGO, HABILIDAD from USUARIO");

    while (rs.next()) {
      usuario n = new usuario(
        rs.getInt("ID"),
        rs.getString("ROL"),
        rs.getString("NOMBRE"),
        rs.getString("APELLIDO"),
        rs.getString("RUT"),
        rs.getString("CORREO"),
        rs.getString("CONTRASEÑA"),
        rs.getString("CARGO"),
        rs.getString("HABILIDAD")
      );
      COLABORADORES.add(n);
    }
    this.db.cerrarConexion();
    return COLABORADORES;
  }


  public usuario loginAdmin(usuario u) throws SQLException {
    String sql = "SELECT * FROM USUARIO WHERE CORREO = '" + u.getCorreo() + "' AND CONTRASEÑA = '" + u.getContraseña() +
      "' AND ROL = 'Administrador'";
    PreparedStatement ps = this.db.obtenerConexion().prepareStatement(sql);
    ResultSet rs = ps.executeQuery();
    rs.next();
      int idu = rs.getInt(1);
      String rolu = rs.getString(2);
      String nombreu = rs.getString(3);
      String apellidou = rs.getString(4);
      String rutu = rs.getString(5);
      String correou = rs.getString(6);
      String contraseñau = rs.getString(7);
      String cargou = rs.getString(8);
    String habilidadu = rs.getString(9);

      return new usuario(idu, rolu, nombreu, apellidou, rutu, correou, contraseñau, cargou, habilidadu);

  }

  public usuario logincolab(usuario a) throws SQLException {
    String sql = "SELECT * FROM USUARIO WHERE CORREO = '" + a.getCorreo() + "' AND CONTRASEÑA = '" + a.getContraseña() +
      "' AND ROL = 'Colaborador'";
    PreparedStatement ps = this.db.obtenerConexion().prepareStatement(sql);
    ResultSet rs = ps.executeQuery();
    rs.next();
    int idu = rs.getInt(1);
    String rolu = rs.getString(2);
    String nombreu = rs.getString(3);
    String apellidou = rs.getString(4);
    String rutu = rs.getString(5);
    String correou = rs.getString(6);
    String contraseñau = rs.getString(7);
    String cargou = rs.getString(8);
    String habilidadu = rs.getString(9);

    return new usuario(idu, rolu, nombreu, apellidou, rutu, correou, contraseñau, cargou, habilidadu);
  }

  public void agregarUsuario(usuario u) throws SQLException {

    String query = "insert into usuario (rol, nombre, apellido, rut, correo, contraseña, cargo, habilidad) " +
      "values (?, ?, ?, ?, ?, ?, ?, ?)";
    PreparedStatement pstmt = this.db.obtenerConexion().prepareStatement(query);
    pstmt.setString(1, u.getRol());
    pstmt.setString(2, u.getNombre());
    pstmt.setString(3, u.getApellido());
    pstmt.setString(4, u.getRut());
    pstmt.setString(5, u.getCorreo());
    pstmt.setString(6, u.getContraseña());
    pstmt.setString(7, u.getCargo());
    pstmt.setString(8, u.getHabilidad());
    pstmt.executeUpdate(); 

    if(pstmt.executeUpdate() == 1){
      String qry = "insert into Habilidades values ((select habilidad from " +
        " usuario where id = (SELECT MAX(ID) FROM usuario)))";

      PreparedStatement ps = this.db.obtenerConexion().prepareStatement(qry);
      ps.setString(1,u.getHabilidad());

      ps.executeUpdate();
    }

    this.db.cerrarConexion();

    String remitente = "addyer.staffing.project@gmail.com";
    String clave = "paraelproyecto321";
    String destino = u.getCorreo();

    Properties props = new Properties();
    props.put("mail.smtp.host", "smtp.gmail.com");
    props.put("mail.smtp.port", "587");
    props.put("mail.smtp.auth", "true");
    props.put("mail.smtp.starttls.enable", "true");
    props.put("mail.smtp.user", remitente);
    props.put("mail.smtp.clave", clave);

    Session session = Session.getDefaultInstance(props);
    MimeMessage mensaje = new MimeMessage(session);

    try {
      mensaje.addRecipient(Message.RecipientType.TO, new InternetAddress(destino));
      mensaje.setSubject("Acceso al Sistema Staffing de Forge");
      //mensaje.setText("Estimado "+u.getNombre()+ "<br><br><br> Su contraseña para acceder al sistema es: "+u.getContraseña(), "utf-8", "html");
      BodyPart parteTexto = new MimeBodyPart();
      parteTexto.setContent("¡Hola "+u.getNombre()+"! <br><br><br> Su contraseña para acceder al sistema es: "+"<b>"+u.getContraseña()+"</b>", "text/html");


      MimeMultipart todasLasPartes = new MimeMultipart();
      todasLasPartes.addBodyPart(parteTexto);

      mensaje.setContent(todasLasPartes);

      Transport transport = session.getTransport("smtp");
      transport.connect("smtp.gmail.com", remitente, clave);
      transport.sendMessage(mensaje, mensaje.getAllRecipients());
      transport.close();
    }catch (Exception e){
      e.printStackTrace();
    }


  }

  public void borrarUsuario(long id) throws SQLException {
    String sql = "delete from usuario where id = ? ";
    PreparedStatement ps = this.db.obtenerConexion().prepareStatement(sql);
    ps.setLong(1, id);
    ps.executeUpdate();

  }
}
