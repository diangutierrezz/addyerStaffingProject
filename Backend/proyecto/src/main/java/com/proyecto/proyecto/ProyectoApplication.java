package com.proyecto.proyecto;

import Proyectof.dao.UsuarioDAO;
import Proyectof.dtos.usuario;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:4200")
@EnableSwagger2
public class ProyectoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProyectoApplication.class, args);
	}


}
