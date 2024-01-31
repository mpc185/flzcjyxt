package com.example.flzcjyxt.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.flzcjyxt.entity.Result;
import com.example.flzcjyxt.entity.User;
import com.example.flzcjyxt.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @GetMapping("/user")
    public String getUser(){

        return "dasdasdasd";
    }
    @RequestMapping(value="/login", method = RequestMethod.POST)
    public Result Login(@RequestBody User user){
        return loginService.isLogin(user.getLxdh(), user.getYhmm());
    }
    @RequestMapping(value="/enroll", method = RequestMethod.POST)
    public Result Enroll(@RequestBody User user){
        return loginService.enroll(user);
    }
}
