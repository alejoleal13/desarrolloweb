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
import com.poli.techno.Model.Artista;
import com.poli.techno.Repository.*;

@CrossOrigin (origins = "http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping("/api")


public class ArtistaController {


	@Autowired
	ArtistaRepository ArtistaRepository;
	
	@GetMapping("/getAllArtistas")
	public List<Artista> getAllUsers() 
	{
	    return ArtistaRepository.findAll();
	}
	
	@GetMapping("/getByArtista")
	public Artista getByArtista2(@RequestParam(value="Artista") Long CodigoArtista) {
		//String CodigoUsuario="DiegoR31";
	    return ArtistaRepository.findById(CodigoArtista).orElseThrow(() -> new ResourceNotFoundException("Artista", "Artista", CodigoArtista));
	}
	
	@PostMapping("/createArtista")
	public Artista createArtista(@RequestBody Artista Artista) {
	    return ArtistaRepository.save(Artista);
	}
	

}
