package com.usecase.elearn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.usecase.elearn.model.User;
import com.usecase.elearn.repo.UserRepo;


@Service
public class UserService {

    @Autowired
    private UserRepo ur;

    public User save(User user) {
        return ur.save(user);
    }

}
