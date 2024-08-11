package com.usecase.elearn.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.usecase.elearn.model.Course;


public interface CourseRepository extends JpaRepository<Course, Integer> {

}
