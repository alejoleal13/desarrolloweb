package com.poli.techno.Model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Users")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
        allowGetters = true)
public class Users implements Serializable {
	
private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "IdUser")
    @GeneratedValue(strategy = GenerationType.AUTO)
	public long IdUser;
	
	@Column(name = "Nombre")
	public String Nombre ;
	
	@Column(name = "Apellido")
	public String Apellido;
	
	
	@Column(name = "usuario")
	public String usuario;

	@Column(name = "Contrasena")
	public String Contrasena;

	public void setIdTweet(long idTweet) {
		this.IdUser = IdUser;
	}

	public void setNombre(String nombre) {
		this.Nombre = nombre;
	}

	public void setApellido(String apellido) {
		this.Apellido = apellido;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public void setContraseña(String Contrasena) {
		this.Contrasena = Contrasena;
	}


}
