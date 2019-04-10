package com.poli.techno.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.poli.techno.Model.Artista;
import com.poli.techno.Model.Users;

@Repository
public interface ArtistaRepository extends JpaRepository<Artista, Long>{

}
