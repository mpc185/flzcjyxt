package com.example.flzcjyxt.controller;

import com.example.flzcjyxt.entity.Jgcxx;
import com.example.flzcjyxt.entity.Result;
import com.example.flzcjyxt.entity.Yzcscxx;
import com.example.flzcjyxt.servicelmpl.JgcfwServiceLmpl;
import com.example.flzcjyxt.utils.JwtUtil;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class JgcfwController {
    @Autowired
    private JgcfwServiceLmpl jgcfwServiceLmpl;
    @Autowired
    private Result result;

    // 由首页进入加工厂服务>加工厂信息管理
    @RequestMapping(value="/jgcfw/jgcxxgl", method = RequestMethod.POST)
    public Result intoJgcfwJgcxx(@RequestHeader String token){
        try {
            // 解析令牌，得到用户类型
            Claims claims = JwtUtil.ParseJwt(token);
            String yhlx = claims.get("yhlx").toString();
            if (!("加工厂商".equals(yhlx))) {
                result.error("noPermission");
                return result;
            }
        } catch (Exception e) {
            result.error("noLogin");
            return result;
        }
        result.success("拥有权限!");
        return result;
    }
    // 加工厂服务>加工厂信息管理>上传
    @RequestMapping(value="/jgcfw/jgcxxgl/sc", method = RequestMethod.POST)
    public Result JgcxxglSc(@RequestBody Jgcxx jgcxx){
        return jgcfwServiceLmpl.scJgcxx(jgcxx);
    }
    // 加工厂服务>加工厂信息管理>修改
    @RequestMapping(value="/jgcfw/jgcxxgl/xg", method = RequestMethod.POST)
    public Result JgcxxglXg(@RequestBody Jgcxx jgcxx){
        return jgcfwServiceLmpl.xgJgcxx(jgcxx);
    }
    // 加工厂服务>加工厂信息管理>删除
    @RequestMapping(value="/jgcfw/jgcxxgl/delete", method = RequestMethod.POST)
    public Result JgcxxglDelete(@RequestBody String jgcid){
        return jgcfwServiceLmpl.deleteJgcxx(jgcid);
    }
    // 加工厂服务>加工厂信息管理>维护
    @RequestMapping(value="/jgcfw/jgcxxgl/bg", method = RequestMethod.POST)
    public Result JgcxxglBg(@RequestBody String token){
        return jgcfwServiceLmpl.whJgcxx(token);
    }



    // 由首页进入加工厂服务>加工厂信息管理
    @RequestMapping(value="/jgcfw/scxxgl", method = RequestMethod.POST)
    public Result intoJgcfwScxx(@RequestHeader String token){
        try {
            // 解析令牌，得到用户类型
            Claims claims = JwtUtil.ParseJwt(token);
            String yhlx = claims.get("yhlx").toString();
            if (!("加工厂商".equals(yhlx))) {
                result.error("noPermission");
                return result;
            }
        } catch (Exception e) {
            result.error("noLogin");
            return result;
        }
        result.success("拥有权限!");
        return result;
    }
    // 加工厂服务>收菜信息管理>上传
    @RequestMapping(value="/jgcfw/scxxgl/sc", method = RequestMethod.POST)
    public Result scxxglSc(@RequestBody Yzcscxx yzcscxx){
        return jgcfwServiceLmpl.scScxx(yzcscxx);
    }
    // 加工厂服务>收菜信息管理>修改
    @RequestMapping(value="/jgcfw/scxxgl/xg", method = RequestMethod.POST)
    public Result scxxglXg(@RequestBody Yzcscxx yzcscxx){
        return jgcfwServiceLmpl.xgScxx(yzcscxx);
    }
    // 加工厂服务>收菜信息管理>删除
    @RequestMapping(value="/jgcfw/scxxgl/delete", method = RequestMethod.POST)
    public Result scxxglDelete(@RequestBody String yzcscid){
        return jgcfwServiceLmpl.deleteScxx(yzcscid);
    }
    // 加工厂服务>收菜信息管理>查询
    @RequestMapping(value="/jgcfw/scxxgl/cx", method = RequestMethod.POST)
    public Result scxxglCx(@RequestBody String scnd){
        return jgcfwServiceLmpl.cxScxx(scnd);
    }

}
