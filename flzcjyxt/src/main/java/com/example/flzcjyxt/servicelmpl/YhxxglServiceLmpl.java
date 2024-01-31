package com.example.flzcjyxt.servicelmpl;

import com.example.flzcjyxt.entity.Result;
import com.example.flzcjyxt.entity.User;
import com.example.flzcjyxt.mapper.Table_yhMapper;
import com.example.flzcjyxt.service.YhxxglService;
import com.example.flzcjyxt.utils.JwtUtil;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class YhxxglServiceLmpl implements YhxxglService {
    @Autowired
    private Table_yhMapper table_yhMapper;
    @Autowired
    private User user;
    @Autowired
    private Result result;

    @Override
    public Result selfInfo(String token) {
        // 解析令牌，得到yhid
        Claims claims = JwtUtil.ParseJwt(token);
        String yhid = claims.get("yhid").toString();
        // 利用yhid查到数据
        user = table_yhMapper.getOneUserByYhid(yhid);
        result.success(user);
        // 返回数据
        return result;
    }

    @Override
    public Result updateYhxx(User user) {
        // 利用yhid到数据库查询该用户信息
        this.user = table_yhMapper.getOneUserByYhid(user.getYhid());
        // 电话未改
        if (this.user.getLxdh().equals(user.getLxdh())){
            // 姓名未修改
            if (this.user.getYhzsxm().equals(user.getYhzsxm())) {
                // 地址未改
                if (this.user.getYhdz()==null && user.getYhdz().length()==0){
                    result.error("noUpdate");
                    return result;
                }else if(user.getYhdz().equals(this.user.getYhdz())){
                    result.error("noUpdate");
                    return result;
                }
            }
            // 更新数据库
            table_yhMapper.updateOneUser(user.getYhzsxm(),user.getLxdh(),user.getYhdz(),user.getYhid());
            this.user = table_yhMapper.getOneUserByYhid(user.getYhid());
            result.success(this.user);
            return result;
        }else {
            this.user=table_yhMapper.getOneUserByLXDH(user.getLxdh());
            // 电话号码被修改，修改后的值在数据库中已经存在
            if(this.user != null){
                result.error("hasInfo");
                return result;
            }
        }
        // 正常情况
        table_yhMapper.updateOneUser(user.getYhzsxm(),user.getLxdh(),user.getYhdz(),user.getYhid());
        this.user = table_yhMapper.getOneUserByYhid(user.getYhid());
        result.success(this.user);
        return result;
    }

    @Override
    public Result updateYhmm(User user) {
        table_yhMapper.updateOneYhmm(user.getYhmm(),user.getYhid());
        this.user = table_yhMapper.getOneUserByYhid(user.getYhid());
        result.success(this.user);
        return result;
    }
    @Override
    public Result zxZh(String yhid) {
        table_yhMapper.deleteOneYhxx(yhid);
        result.success(null);
        return result;
    }
}
