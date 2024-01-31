package com.example.flzcjyxt.service;

import com.example.flzcjyxt.entity.Result;
import com.example.flzcjyxt.entity.User;

import java.util.List;

public interface XtwhService {

    Result getData(String tableName);
    Result getOneYhxx(String yhid);
    Result updateYhlx(User user);

    Result updateYhmm(User user);
}
