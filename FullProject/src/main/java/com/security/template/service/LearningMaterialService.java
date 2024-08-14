package com.security.template.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.template.model.Course;
import com.security.template.model.LearningMaterial;
import com.security.template.repo.LearningMaterialRepo;

import java.util.List;
import java.util.Optional;

@Service
public class LearningMaterialService {

    @Autowired
    private LearningMaterialRepo learningMaterialRepository;

    @Autowired
    private CourseService courseService;

    public List<LearningMaterial> getAllLearningMaterials() {
        return learningMaterialRepository.findAll();
    }

    public Optional<LearningMaterial> getLearningMaterialById(Long id) {
        return learningMaterialRepository.findById(id);
    }

    public LearningMaterial createLearningMaterial(LearningMaterial learning, Long courseID) {
        // Course obj = courseService.getCourseById(courseID);
        // learning.setCourse(obj);
        return learningMaterialRepository.save(learning);
    }

    public Optional<LearningMaterial> updateLearningMaterial(Long id, LearningMaterial learningMaterial) {
        if (learningMaterialRepository.existsById(id)) {
            learningMaterial.setId(id);
            return Optional.of(learningMaterialRepository.save(learningMaterial));
        } else {
            return Optional.empty();
        }
    }

    public boolean deleteLearningMaterial(Long id) {
        if (learningMaterialRepository.existsById(id)) {
            learningMaterialRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
