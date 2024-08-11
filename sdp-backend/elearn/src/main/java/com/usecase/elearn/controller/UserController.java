package com.usecase.elearn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.usecase.elearn.model.User;
import com.usecase.elearn.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService us;

    @PostMapping("/adduser")
    public User adduser(@RequestBody User user) {
        return us.save(user);
    }

}
