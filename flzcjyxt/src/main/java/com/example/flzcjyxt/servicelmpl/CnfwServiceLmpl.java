package com.example.flzcjyxt.servicelmpl;

import com.example.flzcjyxt.entity.*;
import com.example.flzcjyxt.mapper.Table_ccxxMapper;
import com.example.flzcjyxt.mapper.Table_scscxxMapper;
import com.example.flzcjyxt.mapper.Table_yhMapper;
import com.example.flzcjyxt.mapper.Table_zzxxMapper;
import com.example.flzcjyxt.service.CnfwService;
import com.example.flzcjyxt.utils.JwtUtil;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CnfwServiceLmpl implements CnfwService {
    @Autowired
    private  Zzxx zzxx;
    @Autowired
    private Table_ccxxMapper table_ccxxMapper;
    @Autowired
    private Table_zzxxMapper table_zzxxMapper;
    @Autowired
    private Table_yhMapper table_yhMapper;
    @Autowired
    private Table_scscxxMapper table_scscxxMapper;
    @Autowired
    private Result result;
    @Override
    public Result scOneZzxx(String token, Zzxx zzxx) {
        // 利用zznd、zzdz、zzsj三个字段查重
        this.zzxx = table_zzxxMapper.getOneZzxxByReal(zzxx.getZznd(), zzxx.getZzdz(), zzxx.getZzsj());
        // 已存在该种植信息
        if(this.zzxx != null){
            result.error("hasInfo");
            return result;
        }
        // 解析令牌，得到yhid
        Claims claims = JwtUtil.ParseJwt(token);
        String yhid = claims.get("yhid").toString();
        // 将数据写入数据库
        table_zzxxMapper.insertOneZzxx(yhid, zzxx.getZznd(), zzxx.getZzdz(),zzxx.getZzgm(), zzxx.getZzsj(), zzxx.getScsj());
        this.zzxx = table_zzxxMapper.getOneZzxxByReal(zzxx.getZznd(), zzxx.getZzdz(), zzxx.getZzsj());
        List<Zzxx> zzxxList = new ArrayList<>();
        zzxxList.add(this.zzxx);
        result.success(zzxxList);
        return result;
    }

    @Override
    public Result xgOneZzxx(Zzxx zzxx) {
        this.zzxx = table_zzxxMapper.getOneZzxxByZzid(zzxx.getZzid());
        // 判断是否修改
        if(this.zzxx.getZzid().equals(zzxx.getZzid())&&
                this.zzxx.getZznd().equals(zzxx.getZznd())&&
                this.zzxx.getZzsj().equals(zzxx.getZzsj())&&
                this.zzxx.getScsj().equals(zzxx.getScsj())&&
                this.zzxx.getZzgm().equals(zzxx.getZzgm())&&
                this.zzxx.getZzdz().equals(zzxx.getZzdz())
        ) {
            result.error("hasInfo");
            return result;
        }
        // 修改
        table_zzxxMapper.updateOneZzxx(zzxx.getZzid(), zzxx.getZznd(), zzxx.getZzdz(), zzxx.getZzgm(), zzxx.getZzsj(), zzxx.getScsj());
        this.zzxx = table_zzxxMapper.getOneZzxxByZzid(zzxx.getZzid());
        result.success(this.zzxx);
        return result;
    }

    @Override
    public Result deleteOneZzxx(String zzid) {
        table_zzxxMapper.deleteOnezzxx(zzid);
        result.success(null);
        return result;
    }

    @Override
    public Result cxManyZzxx(String zznd) {
        List<Zzxx> ZzxxList = table_zzxxMapper.getManyZzxxByZznd(zznd);
        result.success(ZzxxList);
        return result;
    }

    @Override
    public Result ckZZxx() {
        List<Zzxx> ZzxxList = table_zzxxMapper.getAllZzxxByZznd();
        result.success(ZzxxList);
        return result;
    }

    @Override
    public Result intoCkzjsxx() {
        List<User> userList = table_yhMapper.getAllZjsxx();
        result.success(userList);
        return result;
    }

    @Override
    public Result getAllCcxx(String yhid) {
        List<Ccxx> ccxxList = table_ccxxMapper.getCcxxByYhid(yhid);
        result.success(ccxxList);
        return result;
    }

    @Override
    public Result getAllScxx(String yhid) {
        List<Scscxx> scscxxList=table_scscxxMapper.getAllScxxByYhid(yhid);
        result.success(scscxxList);
        return result;
    }

    @Override
    public Result getZsxmAndLxdh(String yhid) {
        String yhzsxm = table_yhMapper.getYhzsxmByYhid(yhid);
        String lxdh = table_yhMapper.getLxdhByYhid(yhid);
        List<String> yhzxsmAndlxdh=new ArrayList<>();
        yhzxsmAndlxdh.add(yhzsxm);
        yhzxsmAndlxdh.add(lxdh);
        result.success(yhzxsmAndlxdh);
        return result;
    }

    @Override
    public Result CxAllCcxx(String yhzsxm) {
        List<Ccxx> ccxxList = new ArrayList<>();
        List<String> yhidList = table_yhMapper.getYhidByYhzsxm(yhzsxm);
        yhidList.forEach(yhid->{
            List<Ccxx> ccxx= table_ccxxMapper.getCcxxByYhid(yhid);
            ccxxList.addAll(ccxx);
        });
        result.success(ccxxList);
        return result;
    }

    @Override
    public Result CxAllScxx(String scscnd) {
        List<Scscxx> scscxxList = table_scscxxMapper.getAllScxxByScscnd(scscnd);
        result.success(scscxxList);
        return result;
    }


}
