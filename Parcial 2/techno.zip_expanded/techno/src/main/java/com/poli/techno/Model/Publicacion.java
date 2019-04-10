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
@Table(name = "Publicaciones")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
        allowGetters = true)
public class Publicacion implements Serializable {

	//private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "idArtista")
   // @GeneratedValue(strategy = GenerationType.AUTO)
	public long idArtista;
	
	@Column(name = "publicacion")
	public String publicacion ;

	public void setIdArtista(long idArtista) {
		this.idArtista = idArtista;
	}

	public void setComentarios(String comentarios) {
		this.publicacion = publicacion;
	}

}
