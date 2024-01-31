package com.example.flzcjyxt.controller;

import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.ExcelWriter;
import com.alibaba.excel.write.metadata.WriteSheet;
import com.example.flzcjyxt.entity.*;
import com.example.flzcjyxt.mapper.*;
import com.example.flzcjyxt.servicelmpl.XtwhServiceLmpl;
import com.example.flzcjyxt.utils.GetSystemInfo;
import com.example.flzcjyxt.utils.JwtUtil;
import io.jsonwebtoken.Claims;
import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class XtwhController {
    @Autowired
    private XtwhServiceLmpl xtwhServiceLmpl;
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
    @Autowired
    private Result result;

    // 由首页进入系统维护>查看系统运行状态
    @RequestMapping(value="/xtwh/yxzt", method = RequestMethod.POST)
    public Result intoXtwhYxzt(@RequestHeader String token){
        try {
            // 解析令牌，得到用户类型
            Claims claims = JwtUtil.ParseJwt(token);
            String yhlx = claims.get("yhlx").toString();
            if (!("系统管理员".equals(yhlx))) {
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
    // 由首页进入系统维护>查看系统运行状态>CPU
    @RequestMapping(value="/xtwh/yxzt/cpu", method = RequestMethod.POST)
    public Result yxztCpu(){
        List<String> cpuList = GetSystemInfo.getCPUInfo();
        result.success(cpuList);
        return result;
    }
    // 系统维护>查看系统运行状态>nc
    @RequestMapping(value="/xtwh/yxzt/nc", method = RequestMethod.POST)
    public Result yxztNc(){
        List<String> cpuList = GetSystemInfo.getMemoryInfo();
        result.success(cpuList);
        return result;
    }
    // 系统维护>查看系统运行状态>jvm
    @RequestMapping(value="/xtwh/yxzt/jvm", method = RequestMethod.POST)
    public Result yxztJvm(){
        List<String> cpuList = GetSystemInfo.getJvmInfo();
        result.success(cpuList);
        return result;
    }

    // 由首页进入系统维护>数据备份>查询
    @RequestMapping(value="/xtwh/sjksj", method = RequestMethod.POST)
    public Result intoSjksj(@RequestHeader String token){
        try {
            // 解析令牌，得到用户类型
            Claims claims = JwtUtil.ParseJwt(token);
            String yhlx = claims.get("yhlx").toString();
            if (!("系统管理员".equals(yhlx))) {
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
    // 查询全部数据
    @RequestMapping(value="/xtwh/sjksj/cx", method = RequestMethod.POST)
    public Result sjksjCx(@RequestBody String tableName){
        return xtwhServiceLmpl.getData(tableName);
    }
    // 下载数据
    @GetMapping("/xtwh/sjksj/yhxx")
    public void sjksjXz(HttpServletResponse response){
        response.addHeader("Content-Disposition", "attachment;filename=" + "用户信息.xlsx");
        response.setContentType("application/vnd.ms-excel;charset=gb2312");
        try {
            ServletOutputStream outputStream = response.getOutputStream();
            EasyExcel.write(outputStream, User.class)
                    .sheet("用户信息")
                    .doWrite(() -> table_yhMapper.getAllInfo());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    @GetMapping("/xtwh/sjksj/zzxx")
    public void xzZzxx(HttpServletResponse response){
        response.addHeader("Content-Disposition", "attachment;filename=" + "zzxx.xlsx");
        response.setContentType("application/vnd.ms-excel;charset=gb2312");
        try {
            ServletOutputStream outputStream = response.getOutputStream();
            EasyExcel.write(outputStream, Zzxx.class)
                    .sheet("种植信息")
                    .doWrite(() -> table_zzxxMapper.getAllInfo());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @GetMapping("/xtwh/sjksj/ccxx")
    public void xzCcxx(HttpServletResponse response){
        response.addHeader("Content-Disposition", "attachment;filename=" + "ccxx.xlsx");
        response.setContentType("application/vnd.ms-excel;charset=gb2312");
        try {
            ServletOutputStream outputStream = response.getOutputStream();
            EasyExcel.write(outputStream, Ccxx.class)
                    .sheet("菜场信息")
                    .doWrite(() -> table_ccxxMapper.getAllInfo());

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @GetMapping("/xtwh/sjksj/scscxx")
    public void xzScscxx(HttpServletResponse response){
        response.addHeader("Content-Disposition", "attachment;filename=" + "scscxx.xlsx");
        response.setContentType("application/vnd.ms-excel;charset=gb2312");
        try {
            ServletOutputStream outputStream = response.getOutputStream();
            EasyExcel.write(outputStream, Scscxx.class)
                    .sheet("生菜收菜信息")
                    .doWrite(() -> table_scscxxMapper.getAllInfo());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @GetMapping("/xtwh/sjksj/jgcxx")
    public void xzJgcxx(HttpServletResponse response){
        response.addHeader("Content-Disposition", "attachment;filename=" + "jgcxx.xlsx");
        response.setContentType("application/vnd.ms-excel;charset=gb2312");
        try {
            ServletOutputStream outputStream = response.getOutputStream();
            EasyExcel.write(outputStream, Jgcxx.class)
                    .sheet("加工厂信息")
                    .doWrite(() -> table_jgcxxMapper.getAllJgcxx());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @GetMapping("/xtwh/sjksj/yzcscxx")
    public void xzYzcscxx(HttpServletResponse response){
        response.addHeader("Content-Disposition", "attachment;filename=" + "yzcscxx.xlsx");
        response.setContentType("application/vnd.ms-excel;charset=gb2312");
        try {
            ServletOutputStream outputStream = response.getOutputStream();
            EasyExcel.write(outputStream, Yzcscxx.class)
                    .sheet("腌制菜收菜信息")
                    .doWrite(() -> table_yzcscxxMapper.getAllInfo());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }



    // 由首页进入系统维护>管理用户信息
    @RequestMapping(value="/xtwh/glyhxx", method = RequestMethod.POST)
    public Result intoXtwhGlyhxx(@RequestHeader String token){
        try {
            // 解析令牌，得到用户类型
            Claims claims = JwtUtil.ParseJwt(token);
            String yhlx = claims.get("yhlx").toString();
            if (!("系统管理员".equals(yhlx))) {
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
    // 查询用户
    @RequestMapping(value="/xtwh/glyhxx/lxbgcx", method = RequestMethod.POST)
    public Result glyhxxLxbgcx(@RequestBody String yhid){
        System.out.println(yhid);
        return xtwhServiceLmpl.getOneYhxx(yhid);
    }
    @RequestMapping(value="/xtwh/glyhxx/lxbg", method = RequestMethod.POST)
    public Result glyhxxLxbg(@RequestBody User user){
        return xtwhServiceLmpl.updateYhlx(user);
    }
    // 查询用户重置密码
    @RequestMapping(value="/xtwh/glyhxx/czmmcx", method = RequestMethod.POST)
    public Result glyhxxCzmmcx(@RequestBody String yhid){
        return xtwhServiceLmpl.getOneYhxx(yhid);
    }
    @RequestMapping(value="/xtwh/glyhxx/czmm", method = RequestMethod.POST)
    public Result glyhxxCzmm(@RequestBody User user){
        return xtwhServiceLmpl.updateYhmm(user);
    }




}
