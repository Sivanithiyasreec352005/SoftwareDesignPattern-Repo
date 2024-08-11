package com.usecase.elearn.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.usecase.elearn.model.LearningMaterial;


public interface LearningMaterialRepository extends JpaRepository<LearningMaterial, Integer> {

}
