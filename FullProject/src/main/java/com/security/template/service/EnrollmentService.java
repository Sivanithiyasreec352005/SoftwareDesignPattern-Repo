package com.security.template.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.template.model.Course;
import com.security.template.model.Enrollment;
import com.security.template.model.User;
import com.security.template.repo.EnrollmentRepo;

import java.util.List;
import java.util.Optional;

@Service
public class EnrollmentService {

    @Autowired
    private EnrollmentRepo enrollmentRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private CourseService courseService;

    public List<Enrollment> getAllEnrollments() {
        return enrollmentRepository.findAll();
    }

    public Optional<Enrollment> getEnrollmentById(Long id) {
        return enrollmentRepository.findById(id);
    }

    public Enrollment createEnrollment(Enrollment enrollment, Long courseID, Long userID) {
        User user = userService.getUserById(userID);
        enrollment.setUser(user);
        // Course course = courseService.getCourseById(courseID);
        // enrollment.setCourse(course);
        return enrollmentRepository.save(enrollment);
    }

    public Enrollment updateEnrollment(Long id, Enrollment enrollment) {
        if (enrollmentRepository.existsById(id)) {
            enrollment.setId(id);
            return enrollmentRepository.save(enrollment);
        } else {
            return null;
        }
    }

    public boolean deleteEnrollment(Long id) {
        if (enrollmentRepository.existsById(id)) {
            enrollmentRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
