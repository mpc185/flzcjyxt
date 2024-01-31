package com.example.flzcjyxt.service;

import com.example.flzcjyxt.entity.Result;
import com.example.flzcjyxt.entity.User;

public interface YhxxglService {

    // 首页进入用户信息管理
    Result selfInfo(String lxdh);

    Result updateYhxx(User user);

    Result updateYhmm(User user);
    Result zxZh(String yhid);

}
