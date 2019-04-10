package com.poli.techno.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.poli.techno.Exception.ResourceNotFoundException;
import com.poli.techno.Model.Publicacion;
import com.poli.techno.Model.Users;
import com.poli.techno.Repository.PublicacionRepository;

@CrossOrigin (origins = "http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping("/api")

public class PublicacionController {
	
	@Autowired
	PublicacionRepository PublicacionRepository;

	@GetMapping("/getAllPublicaciones")
	public List<Publicacion> getAllPublicaciones() 
	{
	    return PublicacionRepository.findAll();
	}
	
	@GetMapping("/getPublicacionByArtista")
	public Optional<Publicacion> getByArtista2(@RequestParam(value="IdArtista") long IdArtista) {
		//String CodigoUsuario="DiegoR31";
	    return PublicacionRepository.findById(IdArtista);//.orElseThrow(() -> new ResourceNotFoundException("Publicacion", "Publicacion", IdArtista));
	}
	
	@PostMapping("/createPublicacion")
	public Publicacion createDominio(@RequestBody Publicacion Publicacion) {
	    return PublicacionRepository.save(Publicacion);
	}
}
