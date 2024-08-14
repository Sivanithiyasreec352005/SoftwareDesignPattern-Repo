package com.security.template.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.template.model.Enrollment;

public interface EnrollmentRepo extends JpaRepository<Enrollment, Long> {

}
