package com.security.template.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.security.template.model.LearningMaterial;
import com.security.template.service.LearningMaterialService;

import java.util.List;

@RestController
@RequestMapping("/learning")
public class LearningMaterialController {

    @Autowired
    private LearningMaterialService learningMaterialService;

    @GetMapping
    public List<LearningMaterial> getAllLearningMaterials() {
        return learningMaterialService.getAllLearningMaterials();
    }

    @GetMapping("/{id}")
    public ResponseEntity<LearningMaterial> getLearningMaterialById(@PathVariable Long id) {
        return learningMaterialService.getLearningMaterialById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/{courseID}")
    public LearningMaterial createLearningMaterial(@RequestBody LearningMaterial learningMaterial,
            @PathVariable Long courseID) {
        return learningMaterialService.createLearningMaterial(learningMaterial, courseID);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LearningMaterial> updateLearningMaterial(@PathVariable Long id,
            @RequestBody LearningMaterial learningMaterial) {
        return learningMaterialService.updateLearningMaterial(id, learningMaterial)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLearningMaterial(@PathVariable Long id) {
        if (learningMaterialService.deleteLearningMaterial(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
