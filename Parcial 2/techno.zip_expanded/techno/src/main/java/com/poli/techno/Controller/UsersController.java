package com.poli.techno.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.poli.techno.Exception.ResourceNotFoundException;
import com.poli.techno.Model.Users;
import com.poli.techno.Repository.UsersRepository;

@CrossOrigin (origins = "http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping("/api")



public class UsersController {
	
	
	@Autowired
	UsersRepository UsersRepository;
	
	@GetMapping("/getAllUsers")
	public List<Users> getAllUsers() 
	{
	    return UsersRepository.findAll();
	}
	
	@GetMapping("/getByUser")
	public Optional<String> getAllUsers2(@RequestParam(value="Usuario") String CodigoUsuario) {
		//String CodigoUsuario="DiegoR31";
	    return UsersRepository.findByusuario(CodigoUsuario);
	           // .orElseThrow(() -> new ResourceNotFoundException("Users", "Usuario", CodigoUsuario));
	}
	
	@PostMapping("/createUser")
	public Users createDominio(@RequestBody Users Users) {
	    return UsersRepository.save(Users);
	}
	

}
