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
@Table(name = "Artista")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
        allowGetters = true)
public class Artista implements Serializable{
	
private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "idArtista")
    @GeneratedValue(strategy = GenerationType.AUTO)
	public long idArtista;
	
	@Column(name = "nombre")
	public String nombre ;
	
	@Column(name = "descripcion")
	public String descripcion;
	
	
	@Column(name = "Categoria")
	public String Categoria;

	@Column(name = "Imagen")
	public String Imagen;

	public void setIdUser(long idUser) {
		this.idArtista= idArtista;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public void setCategoria(String categoria) {
		Categoria = categoria;
	}

	public void setImagen(String imagen) {
		Imagen = imagen;
	}

}
