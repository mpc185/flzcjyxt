package com.example.flzcjyxt.controller;

import com.example.flzcjyxt.entity.Result;
import com.example.flzcjyxt.entity.Zzxx;
import com.example.flzcjyxt.servicelmpl.CnfwServiceLmpl;
import com.example.flzcjyxt.utils.JwtUtil;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class CnfwController {
    @Autowired
    private CnfwServiceLmpl cnfwServiceLmpl;
    @Autowired
    private Result result;

    // 由首页进入菜农服务>种植信息管理
    @RequestMapping(value="/cnfw/zzxxgl", method = RequestMethod.POST)
    public Result intoCnfwZzxx(@RequestHeader String token){
        try {
            // 解析令牌，得到用户类型
            Claims claims = JwtUtil.ParseJwt(token);
            String yhlx = claims.get("yhlx").toString();
            if (!("菜农".equals(yhlx))) {
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
    // 上传种植信息
    @RequestMapping(value="/cnfw/zzxxgl/sc", method = RequestMethod.POST)
    public Result insertCnfwZzxx(@RequestHeader("token") String token, @RequestBody Zzxx zzxx){
        return cnfwServiceLmpl.scOneZzxx(token,zzxx);
    }
    // 修改种植信息
    @RequestMapping(value="/cnfw/zzxxgl/xg", method = RequestMethod.POST)
    public Result updateCnfwZzxx(@RequestBody Zzxx zzxx){
        return cnfwServiceLmpl.xgOneZzxx(zzxx);
    }
    // 删除种植信息
    @RequestMapping(value="/cnfw/zzxxgl/delete", method = RequestMethod.POST)
    public Result deleteCnfwZzxx(@RequestBody String zzid){
        System.out.println(zzid);
        return cnfwServiceLmpl.deleteOneZzxx(zzid);
    }
    // 查询种植信息按年度
    @RequestMapping(value="/cnfw/zzxxgl/cx", method = RequestMethod.POST)
    public Result cxCnfwZzxx(@RequestBody String zznd){
        return cnfwServiceLmpl.cxManyZzxx(zznd);
    }
    //查询全部种植信息
    @RequestMapping(value="/cnfw/zzxxgl/ck", method = RequestMethod.POST)
    public Result cxAllZzxx(){
        return cnfwServiceLmpl.ckZZxx();
    }


    // 由首页进入菜农服务>查看中间商信息，返回全部中间商用户信息
    @RequestMapping(value="/cnfw/ckzjs", method = RequestMethod.POST)
    public Result intoCnfwCkzjs(@RequestHeader String token){
        try {
            // 解析令牌，得到用户类型
            Claims claims = JwtUtil.ParseJwt(token);
            String yhlx = claims.get("yhlx").toString();
            if (!("菜农".equals(yhlx))) {
                result.error("noPermission");
                return result;
            }
        } catch (Exception e) {
            result.error("noLogin");
            return result;
        }
        return cnfwServiceLmpl.intoCkzjsxx();
    }
    // 菜场信息
    @RequestMapping(value="/cnfw/ckzjs/ccxx", method = RequestMethod.POST)
    public Result ckzjsCcxx(@RequestBody String yhid){
        return cnfwServiceLmpl.getAllCcxx(yhid);
    }
    // 收菜信息
    @RequestMapping(value="/cnfw/ckzjs/scxx", method = RequestMethod.POST)
    public Result ckzjsScxx(@RequestBody String yhid){
        return cnfwServiceLmpl.getAllScxx(yhid);
    }
    // 收菜信息请求用户信息
    @RequestMapping(value="/cnfw/ckzjs/zmxmAndlxdh", method = RequestMethod.POST)
    public Result zmxmAndlxdh(@RequestBody String yhid){
        return cnfwServiceLmpl.getZsxmAndLxdh(yhid);
    }
    // 查询菜场信息
    @RequestMapping(value="/cnfw/ckzjs/cxccxx", method = RequestMethod.POST)
    public Result ckzjsCxCcxx(@RequestBody String yhzsxm){
        return cnfwServiceLmpl.CxAllCcxx(yhzsxm);
    }
    // 查询收菜信息
    @RequestMapping(value="/cnfw/ckzjs/cxscxx", method = RequestMethod.POST)
    public Result ckzjsCxScxx(@RequestBody String scscnd){
        return cnfwServiceLmpl.CxAllScxx(scscnd);
    }
}
