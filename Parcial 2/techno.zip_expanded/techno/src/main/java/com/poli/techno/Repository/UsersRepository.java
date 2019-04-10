package com.poli.techno.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.poli.techno.Model.Users;



@Repository
public interface UsersRepository extends JpaRepository<Users, Long>{

	Optional<String> findByusuario(String codigoUsuario);
	
 //   @Query("SELECT t.contraseña FROM users t where t.usuario= :Usuario")
   // public Optional<String> findByUser(@Param("Usuario") String Usuario);

   // @Query("SELECT t.title FROM Todo t where t.id = :id") 
    //String findTitleById(@Param("id") Long id);
}
