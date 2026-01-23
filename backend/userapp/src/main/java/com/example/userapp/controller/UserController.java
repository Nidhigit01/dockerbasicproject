package com.example.userapp.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.userapp.entity.User;
import com.example.userapp.repository.UserRepository;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {
    
    private final UserRepository repo;

    public UserController(UserRepository repo){
        this.repo = repo;
    }

    @PostMapping
    public User addUser(@RequestBody User user){
        return repo.save(user);
    }

    @GetMapping
    public List<User> getUser(){
        return repo.findAll();
    }
}
