package com.example.flzcjyxt.controller;


import com.example.flzcjyxt.entity.Result;
import com.example.flzcjyxt.entity.Scscxx;
import com.example.flzcjyxt.servicelmpl.ZjsfwServiceLmpl;
import com.example.flzcjyxt.utils.JwtUtil;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ZjsfwController {
    @Autowired
    private ZjsfwServiceLmpl zjsfwServiceLmpl;
    @Autowired
    private Result result;

    // 由首页进入中间商服务>菜场信息管理
    @RequestMapping(value="/zjsfw/ccxxgl", method = RequestMethod.POST)
    public Result intoZjsfwCcxx(@RequestHeader String token){
        try {
            // 解析令牌，得到用户类型
            Claims claims = JwtUtil.ParseJwt(token);
            String yhlx = claims.get("yhlx").toString();
            if (!("中间商".equals(yhlx))) {
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
    // 中间商服务>菜场信息管理>上传菜场信息
    @RequestMapping(value="/zjsfw/ccxxgl/sc", method = RequestMethod.POST)
    public Result ccxxglSc(@RequestParam("token") String token,
                           @RequestParam("ccgs") String ccgs,
                           @RequestParam("rngm") String rngm,
                           @RequestParam("ccdz") String ccdz,
                           @RequestParam("img1") MultipartFile img1,
                           @RequestParam("img2") MultipartFile img2,
                           @RequestParam("img3") MultipartFile img3){
        return zjsfwServiceLmpl.scOneCcxx(token,ccgs,rngm,ccdz,img1,img2,img3);
    }
    // 中间商服务>菜场信息管理>修改菜场信息
    @RequestMapping(value="/zjsfw/ccxxgl/xg", method = RequestMethod.POST)
    public Result ccxxglXg(@RequestParam("ccid") String ccid,
                           @RequestParam("ccgs") String ccgs,
                           @RequestParam("rngm") String rngm,
                           @RequestParam("ccdz") String ccdz,
                           @RequestParam("img1") Object img1,
                           @RequestParam("img2") Object img2,
                           @RequestParam("img3") Object img3){
        return zjsfwServiceLmpl.xgOneCcxx(ccid,ccgs,rngm,ccdz,img1,img2,img3);
    }
    // 中间商服务>菜场信息管理>删除菜场信息
    @RequestMapping(value="/zjsfw/ccxxgl/delete", method = RequestMethod.POST)
    public Result ccxxglDelete(@RequestBody String ccid){
        return zjsfwServiceLmpl.deleteOneCcxx(ccid);
    }
    // 中间商服务>菜场信息管理>维护菜场信息
    @RequestMapping(value="/zjsfw/ccxxgl/bg", method = RequestMethod.POST)
    public Result ccxxglBg(@RequestBody String token){
        return zjsfwServiceLmpl.allCcxx(token);
    }



    //由首页进入中间商服务>收菜信息管理
    @RequestMapping(value="/zjsfw/scxxgl", method = RequestMethod.POST)
    public Result intoZjsfwScxx(@RequestHeader String token){
        try {
            // 解析令牌，得到用户类型
            Claims claims = JwtUtil.ParseJwt(token);
            String yhlx = claims.get("yhlx").toString();
            if (!("中间商".equals(yhlx))) {
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
    // 中间商服务>收菜信息管理>上传收菜信息
    @RequestMapping(value="/zjsfw/scxxgl/sc", method = RequestMethod.POST)
    public Result scZjsfwScxx(@RequestHeader String token, @RequestBody Scscxx scscxx){
        return zjsfwServiceLmpl.scOneScxx(token,scscxx);
    }
    // 中间商服务>收菜信息管理>修改收菜信息
    @RequestMapping(value="/zjsfw/scxxgl/xg", method = RequestMethod.POST)
    public Result xgZjsfwScxx(@RequestBody Scscxx scscxx){
        return zjsfwServiceLmpl.xgOneScxx(scscxx);
    }
    // 中间商服务>收菜信息管理>删除收菜信息
    @RequestMapping(value="/zjsfw/scxxgl/delete", method = RequestMethod.POST)
    public Result xgZjsfwScxx(@RequestBody String scscid){
        return zjsfwServiceLmpl.deleteOneScxx(scscid);
    }
    // 中间商服务>收菜信息管理>查询收菜信息
    @RequestMapping(value="/zjsfw/scxxgl/cx", method = RequestMethod.POST)
    public Result cxZjsfwScxx(@RequestBody String scscnd){
        return zjsfwServiceLmpl.cxOneScxx(scscnd);
    }



    // 由首页进入中间商服务>查看菜农信息
    @RequestMapping(value="/zjsfw/ckcnxx", method = RequestMethod.POST)
    public Result intoZjsfwCkcnxx(@RequestHeader String token){
        try {
            // 解析令牌，得到用户类型
            Claims claims = JwtUtil.ParseJwt(token);
            String yhlx = claims.get("yhlx").toString();
            if (!("中间商".equals(yhlx))) {
                result.error("noPermission");
                return result;
            }
        } catch (Exception e) {
            result.error("noLogin");
            return result;
        }
        return zjsfwServiceLmpl.intoCkcnxx();
    }
    //中间商服务>查看菜农信息>查看种植信息
    @RequestMapping(value="/zjsfw/ckcnxx/zzxx", method = RequestMethod.POST)
    public Result ckcnxxZzxx(@RequestBody String yhid){
        return zjsfwServiceLmpl.ckZzxx(yhid);
    }
    //中间商服务>查看菜农信息>查询种植信息
    @RequestMapping(value="/zjsfw/ckcnxx/cxzzxx", method = RequestMethod.POST)
    public Result cxcnxxZzxx(@RequestBody String yhzsxm){
        return zjsfwServiceLmpl.cxZzxx(yhzsxm);
    }


    // 由首页进入中间商服务>查看加工厂信息
    @RequestMapping(value="/zjsfw/ckjgcxx", method = RequestMethod.POST)
    public Result intoZjsfwCkjgcxx(@RequestHeader String token){
        try {
            // 解析令牌，得到用户类型
            Claims claims = JwtUtil.ParseJwt(token);
            String yhlx = claims.get("yhlx").toString();
            if (!("中间商".equals(yhlx))) {
                result.error("noPermission");
                return result;
            }
        } catch (Exception e) {
            result.error("noLogin");
            return result;
        }
        return zjsfwServiceLmpl.intoCkjgcxx();
    }
    // 中间商服务>查看加工厂信息>加工厂信息详情
    @RequestMapping(value="/zjsfw/ckjgcxx/jgcxq", method = RequestMethod.POST)
    public Result CkjgcxxJgcxq(@RequestBody String yhid){
        return zjsfwServiceLmpl.getYhzsxm(yhid);
    }
    //中间商服务>查看加工厂信息>加工厂收菜信息
    @RequestMapping(value="/zjsfw/ckjgcxx/scxx", method = RequestMethod.POST)
    public Result CkjgcxxScxx(@RequestBody String yhid){
        return zjsfwServiceLmpl.getJgcscxx(yhid);
    }
    //中间商服务>查看加工厂信息>收菜信息详情
    @RequestMapping(value="/zjsfw/ckjgcxx/zmxmAndlxdh", method = RequestMethod.POST)
    public Result CkjgcxxZmxmAndlxdh(@RequestBody String yhid){
        return zjsfwServiceLmpl.getZmxmAndlxdh(yhid);
    }
    //中间商服务>查看加工厂信息>查询收菜信息
    @RequestMapping(value="/zjsfw/ckjgcxx/cxscxx", method = RequestMethod.POST)
    public Result CkjgcxxCxscxx(@RequestBody String scnd){
        return zjsfwServiceLmpl.getSCxx(scnd);
    }
}
