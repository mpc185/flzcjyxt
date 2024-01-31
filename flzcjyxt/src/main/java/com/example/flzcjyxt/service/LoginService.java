package com.example.flzcjyxt.service;

import com.example.flzcjyxt.entity.Result;
import com.example.flzcjyxt.entity.User;
import com.example.flzcjyxt.mapper.Table_yhMapper;
import org.springframework.beans.factory.annotation.Autowired;

public interface LoginService {

    // 判断用户是否能登录成功
    Result isLogin(String LXDH,String YHMM);
    // 注册
    Result enroll(User user);
}
