package com.usecase.elearn.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.usecase.elearn.model.Assignment;
import com.usecase.elearn.model.Course;
import com.usecase.elearn.model.LearningMaterial;
import com.usecase.elearn.service.InstructorService;



@RestController
@RequestMapping("/instructor")
public class InstructorController {

    @Autowired
    private InstructorService is;

    @PostMapping("/addcourse")
    public Course addcourse(@RequestBody Course course) {
        return is.savecourse(course);
    }

    @DeleteMapping("/deletecourse/{id}")
    public String deleteCourse(@PathVariable int id) {
        return is.deletecourse(id);
    }

    @GetMapping("/getallcourses")
    public List<Course> getallcourses() {
        return is.allcourses();
    }
    

    @GetMapping("/getcoursebyid/{id}")
    public Optional<Course> getcourse(@PathVariable int id) {
        return is.getcourse(id);
    }

    @PostMapping("/addmaterial")
    public LearningMaterial addMaterial(@RequestBody LearningMaterial material) {
        return is.upload(material);
    }

    @GetMapping("/getallmaterial")
    public List<LearningMaterial> getall() {
        return is.getall();
    }

    @GetMapping("/getmaterialbyid/{id}")
    public Optional<LearningMaterial> getbyid(@PathVariable int id) {
        return is.getmaterialbyid(id);
    }

    @PostMapping("/addassignment")
    public Assignment addassign(@RequestBody Assignment assignment) {
        return is.addassign(assignment);
    }

    @GetMapping("/getallassignments")
    public List<Assignment> getallassignments() {
        return is.getallassignment();
    }

    @GetMapping("/getassignmentbyid/{id}")
    public Optional<Assignment> get(@PathVariable int id) {
        return is.getbyid(id);
    }

}
