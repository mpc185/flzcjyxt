package com.example.flzcjyxt.servicelmpl;

import com.example.flzcjyxt.entity.Result;
import com.example.flzcjyxt.entity.User;
import com.example.flzcjyxt.mapper.Table_yhMapper;
import com.example.flzcjyxt.service.LoginService;
import com.example.flzcjyxt.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceLmpl implements LoginService {
    @Autowired
    private Table_yhMapper table_yhMapper;
    @Autowired
    private User user;
    @Autowired
    private Result result;

    @Override
    public Result isLogin(String LXDH, String YHMM) {
        // 到数据库查询数据
        user = table_yhMapper.getOneUserByLXDH(LXDH);
        // 用户不存在
        if (user == null){
            result.error("noInfo");
            return result;
        }
        // 判断密码是否正确
        if(user.getYhmm().equals(YHMM)){
            // 正确，生成JWT令牌
            String tokem = JwtUtil.GenJwt(this.user.getYhid(),this.user.getYhlx());
            result.success(tokem);
            return result;
        }
        // 错误
        this.result.error("pswError");
        return result;
    }

    @Override
    public Result enroll(User user) {
        // 到数据库查询数据
        this.user = table_yhMapper.getOneUserByLXDH(user.getLxdh());
        // 已存在用户
        if(this.user != null){
            result.error("hasInfo");
            return result;
        }
        // 新增用户信息
        table_yhMapper.insertOneUser(user.getYhzsxm(), user.getYhmm(), user.getLxdh(), user.getYhlx());
        result.success("注册成功！");
        return result;
    }
}
