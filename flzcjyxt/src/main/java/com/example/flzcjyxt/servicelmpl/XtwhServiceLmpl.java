package com.example.flzcjyxt.servicelmpl;

import com.example.flzcjyxt.entity.*;
import com.example.flzcjyxt.mapper.*;
import com.example.flzcjyxt.service.XtwhService;
import com.example.flzcjyxt.utils.GetSystemInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class XtwhServiceLmpl implements XtwhService {
    @Autowired
    private User user;
    @Autowired
    private Result result;
    @Autowired
    private Table_yzcscxxMapper table_yzcscxxMapper;
    @Autowired
    private Table_jgcxxMapper table_jgcxxMapper;
    @Autowired
    private Table_yhMapper table_yhMapper;
    @Autowired
    private Table_zzxxMapper table_zzxxMapper;
    @Autowired
    private Table_scscxxMapper table_scscxxMapper;
    @Autowired
    private Table_ccxxMapper table_ccxxMapper;


    @Override
    public Result getData(String tableName) {
        if ("用户信息表".equals(tableName)){
            List<User> userList =  table_yhMapper.getAllInfo();
            result.success(userList);
            return result;
        }
        if ("种植信息表".equals(tableName)){
            List<Zzxx> zzxxList = table_zzxxMapper.getAllInfo();
            result.success(zzxxList);
            return result;
        }
        if ("菜场信息表".equals(tableName)){
            List<Ccxx> ccxxList = table_ccxxMapper.getAllInfo();
            result.success(ccxxList);
            return result;
        }
        if ("生菜收菜信息表".equals(tableName)){
            List<Scscxx> scscxxList = table_scscxxMapper.getAllInfo();
            result.success(scscxxList);
            return result;
        }
        if ("加工厂信息表".equals(tableName)){
            List<Jgcxx> jgcxxList = table_jgcxxMapper.getAllJgcxx();
            result.success(jgcxxList);
            return result;

        }if ("腌制菜收菜信息表".equals(tableName)){
            List<Yzcscxx> yzcscxxList = table_yzcscxxMapper.getAllInfo();
            result.success(yzcscxxList);
            return result;
        }
        return null;
    }

    @Override
    public Result getOneYhxx(String yhid) {
        user = table_yhMapper.getOneUserByYhid(yhid);
        if (user==null){
            result.error("noInfo");
            return result;
        }
        result.success(user);
        return result;
    }

    @Override
    public Result updateYhlx(User user) {
        // 删除其他表与该用户类型相关的
        table_ccxxMapper.deletByyhid(user.getYhid());
        table_jgcxxMapper.deletByyhid(user.getYhid());
        table_scscxxMapper.deletByyhid(user.getYhid());
        table_yzcscxxMapper.deletByyhid(user.getYhid());
        table_zzxxMapper.deletByyhid(user.getYhid());
        // 更改
        table_yhMapper.updateOneYhlx(user.getYhid(), user.getYhlx());
        this.user = table_yhMapper.getOneUserByYhid(user.getYhid());
        result.success(this.user);
        return result;
    }

    @Override
    public Result updateYhmm(User user) {
        table_yhMapper.updateOneYhmm(user.getYhmm(), user.getYhid());
        this.user = table_yhMapper.getOneUserByYhid(user.getYhid());
        result.success(this.user);
        return result;
    }

}
