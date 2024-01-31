package com.example.flzcjyxt.servicelmpl;

import com.example.flzcjyxt.entity.*;
import com.example.flzcjyxt.mapper.*;
import com.example.flzcjyxt.service.ZjsfwService;
import com.example.flzcjyxt.utils.JwtUtil;
import com.example.flzcjyxt.utils.ReFilename;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Service
public class ZjsfwServiceLmpl implements ZjsfwService{
    @Autowired
    private Ccxx ccxx;
    @Autowired
    private Scscxx scscxx;
    @Autowired
    private Table_ccxxMapper table_ccxxMapper;
    @Autowired
    private Table_scscxxMapper table_scscxxMapper;
    @Autowired
    private Table_yhMapper table_yhMapper;
    @Autowired
    private Table_zzxxMapper table_zzxxMapper;
    @Autowired
    private Table_jgcxxMapper table_jgcxxMapper;
    @Autowired
    private Table_yzcscxxMapper table_yzcscxxMapper;
    @Autowired
    private Result result;

    @Override
    public Result scOneCcxx(String token, String ccgs, String rngm, String ccdz, MultipartFile img1, MultipartFile img2, MultipartFile img3) {
        // 利用ccdz字段查重
        this.ccxx = table_ccxxMapper.getCcxxByCcdz(ccdz);
        // 已存在该菜场信息
        if(this.ccxx != null){
            result.error("hasInfo");
            return result;
        }
        // 解析令牌，拿到yhid
        Claims claims = JwtUtil.ParseJwt(token);
        String yhid = claims.get("yhid").toString();
        // 将部分信息写入数据库
        table_ccxxMapper.insertCcxxWithoutImg(yhid,ccgs,rngm,ccdz);
        String ccid = table_ccxxMapper.getCcidByCcdz(ccdz);

        // 重命名文件名
        String fileName1 = ReFilename.rename(img1,ccid,"1");
        String fileName2 = ReFilename.rename(img2,ccid,"2");
        String fileName3 = ReFilename.rename(img3,ccid,"3");

        // 将文件存在磁盘目录中
        String fwqPath = "/www/wwwroot/flzcjyxt/web/images/";
        String localhostPath = "D:\\java\\j2EE期末大作业\\web - 本机\\images\\";
        try{
            img1.transferTo(new File(localhostPath+fileName1));
            img2.transferTo(new File(localhostPath+fileName2));
            img3.transferTo(new File(localhostPath+fileName3));
        }catch (Exception e){
            result.error("saveException");
            return result;
        }
        // 设置图片路径
        String imgAddress1="../images/"+fileName1;
        String imgAddress2="../images/"+fileName2;
        String imgAddress3="../images/"+fileName3;
        // 将图片路径写入数据库
        table_ccxxMapper.updateCcxxImages(ccid,imgAddress1,imgAddress2,imgAddress3);
        Ccxx ccxx1 = table_ccxxMapper.getOneCcxxByCcid(ccid);
        List<Ccxx> ccxxList = new ArrayList<>();
        ccxxList.add(ccxx1);
        result.success(ccxxList);
        return result;
    }

    @Override
    public Result xgOneCcxx(String ccid ,String ccgs, String rngm, String ccdz, Object img1, Object img2, Object img3) {
        String fwqPath = "/www/wwwroot/flzcjyxt/web/images/";
        String localhostPath = "D:\\java\\web-本机\\images\\";  // 地址改为自己的
        // 利用ccid查到原信息
        this.ccxx = table_ccxxMapper.getOneCcxxByCcid(ccid);
        // 判断用户是否修改
        if (ccgs.equals(this.ccxx.getCcgs())&&rngm.equals(this.ccxx.getRngm())&&ccdz.equals(this.ccxx.getCcdz())){
            // 未修改图片
            if ("null".equals(img1)&&"null".equals(img2)&&"null".equals(img3)){
                result.error("hasInfo");
                return result;
            }else{
                // 图片1被修改
                if (!("null".equals(img1.toString()))){
                    MultipartFile img = (MultipartFile)img1;
                    String fileName=ReFilename.rename(img,ccid,"1");
                    // 将文件存在磁盘目录中
                    try{
                        img.transferTo(new File(localhostPath+fileName));
                    }catch (Exception e){
                        result.error("saveException");
                        return result;
                    }
                    String imgAddress ="../images/"+fileName;
                    table_ccxxMapper.updateCcxxImg1(ccid,imgAddress);
                }
                // 图片2被修改
                if (!("null".equals(img2.toString()))){
                    MultipartFile img = (MultipartFile)img2;
                    String fileName=ReFilename.rename(img,ccid,"1");
                    // 将文件存在磁盘目录中
                    try{
                        img.transferTo(new File(localhostPath+fileName));
                    }catch (Exception e){
                        result.error("saveException");
                        return result;
                    }
                    String imgAddress ="../images/"+fileName;
                    table_ccxxMapper.updateCcxxImg2(ccid,imgAddress);
                }
                // 图片3被修改
                if (!("null".equals(img3.toString()))){
                    MultipartFile img = (MultipartFile)img3;
                    String fileName=ReFilename.rename(img,ccid,"1");
                    // 将文件存在磁盘目录中
                    try{
                        img.transferTo(new File(localhostPath+fileName));
                    }catch (Exception e){
                        result.error("saveException");
                        return result;
                    }
                    String imgAddress ="../images/"+fileName;
                    table_ccxxMapper.updateCcxxImg3(ccid,imgAddress);
                }
                this.ccxx = table_ccxxMapper.getOneCcxxByCcid(ccid);
                result.success(this.ccxx);
                return result;
            }
        }
        // 图片1被修改
        if (!("null".equals(img1.toString()))){
            MultipartFile img = (MultipartFile)img1;
            String fileName=ReFilename.rename(img,ccid,"1");
            // 将文件存在磁盘目录中
            try{
                img.transferTo(new File(localhostPath+fileName));
            }catch (Exception e){
                result.error("saveException");
                return result;
            }
            String imgAddress ="../images/"+fileName;
            table_ccxxMapper.updateCcxxImg1(ccid,imgAddress);
        }
        // 图片2被修改
        if (!("null".equals(img2.toString()))){
            MultipartFile img = (MultipartFile)img2;
            String fileName=ReFilename.rename(img,ccid,"1");
            // 将文件存在磁盘目录中
            try{
                img.transferTo(new File(localhostPath+fileName));
            }catch (Exception e){
                result.error("saveException");
                return result;
            }
            String imgAddress ="../images/"+fileName;
            table_ccxxMapper.updateCcxxImg2(ccid,imgAddress);
        }
        // 图片3被修改
        if (!("null".equals(img3.toString()))){
            MultipartFile img = (MultipartFile)img3;
            String fileName=ReFilename.rename(img,ccid,"1");
            // 将文件存在磁盘目录中
            try{
                img.transferTo(new File(localhostPath+fileName));
            }catch (Exception e){
                result.error("saveException");
                return result;
            }
            String imgAddress ="../images/"+fileName;
            table_ccxxMapper.updateCcxxImg3(ccid,imgAddress);
        }
        // 更新其他信息
        table_ccxxMapper.updataCcxx(ccid,ccgs,rngm,ccdz);
        this.ccxx = table_ccxxMapper.getOneCcxxByCcid(ccid);
        result.success(this.ccxx);
        return result;
    }

    @Override
    public Result deleteOneCcxx(String ccid) {
        table_ccxxMapper.deleteOneCcxx(ccid);
        result.success(null);
        return result;
    }

    @Override
    public Result allCcxx(String token) {
        // 解析令牌，拿到yhid
        Claims claims = JwtUtil.ParseJwt(token);
        String yhid = claims.get("yhid").toString();
        List<Ccxx> ccxxList = table_ccxxMapper.getCcxxByYhid(yhid);
        result.success(ccxxList);
        return result;
    }

    @Override
    public Result scOneScxx(String token, Scscxx scscxx) {
        // 解析令牌，拿到yhid
        Claims claims = JwtUtil.ParseJwt(token);
        String yhid = claims.get("yhid").toString();
        // 利用收菜年度和收菜时间查重
        this.scscxx = table_scscxxMapper.getOneScxxByReal(scscxx.getScscnd(), scscxx.getScscsj());
        if(this.scscxx!=null){
            result.error("hasInfo");
            return result;
        }
        // 插入数据
        table_scscxxMapper.insertOneScxx(yhid, scscxx.getScscnd(), scscxx.getScscsj(), scscxx.getScscbj());
        this.scscxx = table_scscxxMapper.getOneScxxByReal(scscxx.getScscnd(), scscxx.getScscsj());
        List<Scscxx> scscxxList = new ArrayList<>();
        scscxxList.add(this.scscxx);
        result.success(scscxxList);
        return result;
    }

    @Override
    public Result xgOneScxx(Scscxx scscxx) {
        this.scscxx = table_scscxxMapper.getOneScxxByScscid(scscxx.getScscid());
        // 判断是否修改
        if (this.scscxx.getScscnd().equals(scscxx.getScscnd())&&this.scscxx.getScscsj().equals(scscxx.getScscsj())&&this.scscxx.getScscbj().equals(scscxx.getScscbj())){
            result.error("hasInfo");
            return result;
        }
        // 修改
        table_scscxxMapper.updateOneScxx(scscxx.getScscid(), scscxx.getScscnd(), scscxx.getScscsj(), scscxx.getScscbj());
        this.scscxx = table_scscxxMapper.getOneScxxByScscid(scscxx.getScscid());
        result.success(this.scscxx);
        return result;
    }

    @Override
    public Result deleteOneScxx(String scscid) {
        table_scscxxMapper.deleteOneScxx(scscid);
        result.success(null);
        return result;
    }

    @Override
    public Result cxOneScxx(String scscnd) {
        List<Scscxx> scscxxList = table_scscxxMapper.getAllScxxByScscnd(scscnd);
        result.success(scscxxList);
        return result;
    }

    @Override
    public Result intoCkcnxx() {
        List<User> cnxxList = table_yhMapper.getAllCnxx();
        result.success(cnxxList);
        return result;
    }

    @Override
    public Result ckZzxx(String yhid) {
        List<Zzxx> zzxxList = table_zzxxMapper.getZzxxByYhid(yhid);
        result.success(zzxxList);
        return result;
    }

    @Override
    public Result cxZzxx(String yhzsxm) {
        List<Zzxx> zzxxList = new ArrayList<>();
        List<String> yhidList = table_yhMapper.getYhidByYhzsxm(yhzsxm);
        yhidList.forEach(yhid->{
            List<Zzxx> zzxx = table_zzxxMapper.getZzxxByYhid(yhid);
            zzxxList.addAll(zzxx);
        });
        result.success(zzxxList);
        return result;
    }

    @Override
    public Result intoCkjgcxx() {
        List<Jgcxx> jgcxxList = table_jgcxxMapper.getAllJgcxx();
        result.success(jgcxxList);
        return result;
    }

    @Override
    public Result getYhzsxm(String yhid) {
        String yhzsxm = table_yhMapper.getYhzsxmByYhid(yhid);
        result.success(yhzsxm);
        return result;
    }

    @Override
    public Result getJgcscxx(String yhid) {
        List<Yzcscxx> yzcscxxList = table_yzcscxxMapper.getYzcscxxByYhid(yhid);
        result.success(yzcscxxList);
        return result;
    }

    @Override
    public Result getZmxmAndlxdh(String yhid) {
        String yhzsxm = table_yhMapper.getYhzsxmByYhid(yhid);
        String lxdh = table_yhMapper.getLxdhByYhid(yhid);
        List<String> yhzxsmAndlxdh=new ArrayList<>();
        yhzxsmAndlxdh.add(yhzsxm);
        yhzxsmAndlxdh.add(lxdh);
        result.success(yhzxsmAndlxdh);
        return result;
    }

    @Override
    public Result getSCxx(String scnd) {
        List<Yzcscxx> yzcscxxList = table_yzcscxxMapper.getYzcscxxByYzcscnd(scnd);
        yzcscxxList.forEach(yzcscxx -> {
            System.out.println(yzcscxx);
        });

        result.success(yzcscxxList);
        return result;
    }


}
