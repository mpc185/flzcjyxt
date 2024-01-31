package com.example.flzcjyxt.controller;



import com.example.flzcjyxt.entity.Result;
import com.example.flzcjyxt.entity.User;
import com.example.flzcjyxt.servicelmpl.YhxxglServiceLmpl;
import com.example.flzcjyxt.utils.JwtUtil;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class YhxxglController {
    @Autowired
    private YhxxglServiceLmpl yhxxglServiceLmpl;
    @Autowired
    Result result;

    // 由首页进入用户信息管理的请求
    @RequestMapping(value="/yhxxgl", method = RequestMethod.POST)
    public Result Yhxxgl(@RequestBody String token){
        try {
            // 解析令牌，得到用户类型
            Claims claims = JwtUtil.ParseJwt(token);
            String yhlx = claims.get("yhlx").toString();
        } catch (Exception e) {
            result.error("noLogin");
            return result;
        }
        return yhxxglServiceLmpl.selfInfo(token);
    }

    // 修改用户信息
    @RequestMapping(value="/yhxxgl/xg", method = RequestMethod.POST)
    public Result Yhxxgl_xg(@RequestBody User user){
        return yhxxglServiceLmpl.updateYhxx(user);
    }

    // 修改密码
    @RequestMapping(value="/yhxxgl/xgmm", method = RequestMethod.POST)
    public Result Yhxxgl_xgmm(@RequestBody User user){
        return yhxxglServiceLmpl.updateYhmm(user);
    }
    // 注销用户
    @RequestMapping(value="/yhxxgl/zx", method = RequestMethod.POST)
    public Result Yhxxgl_zx(@RequestBody String yhid){

        return yhxxglServiceLmpl.zxZh(yhid);
    }
}
