package com.usecase.elearn.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.usecase.elearn.model.Assignment;
import com.usecase.elearn.model.Course;
import com.usecase.elearn.model.LearningMaterial;
import com.usecase.elearn.repo.AssignmentRepository;
import com.usecase.elearn.repo.CourseRepository;
import com.usecase.elearn.repo.LearningMaterialRepository;


@Service
public class InstructorService {

    @Autowired
    private CourseRepository cr;

    @Autowired
    private LearningMaterialRepository lr;

    @Autowired
    private AssignmentRepository ar;

    public Course savecourse(Course course) {
        return cr.save(course);
    }
    
    public String deletecourse(int id) {
        Course exists = cr.findById(id).orElse(null);
        if (exists != null) {
            cr.deleteById(id);
            return "course deleted successfully";
        }
        return "course not found";
    }

    public List<Course> allcourses() {
        return cr.findAll();
    }

    public LearningMaterial upload(LearningMaterial material) {
        return lr.save(material);
    }

    public Assignment addassign(Assignment assignment) {
        return ar.save(assignment);
    }

    public List<LearningMaterial> getall() {
        return lr.findAll();
    }

    public List<Assignment> getallassignment() {
        return ar.findAll();
    }

    public Optional<Course> getcourse(int id) {
        return cr.findById(id);
    }

    public Optional<LearningMaterial> getmaterialbyid(int id) {
        return lr.findById(id);
    }

    public Optional<Assignment> getbyid(int id) {
        return ar.findById(id);
    }

}
