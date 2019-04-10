package com.poli.techno.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.poli.techno.Model.Publicacion;

@Repository
public interface PublicacionRepository extends JpaRepository<Publicacion, Long>{

}
