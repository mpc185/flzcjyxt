package com.example.flzcjyxt.servicelmpl;

import com.example.flzcjyxt.entity.Jgcxx;
import com.example.flzcjyxt.entity.Result;
import com.example.flzcjyxt.entity.Yzcscxx;
import com.example.flzcjyxt.mapper.Table_jgcxxMapper;
import com.example.flzcjyxt.mapper.Table_yzcscxxMapper;
import com.example.flzcjyxt.service.JgcfwService;
import com.example.flzcjyxt.utils.JwtUtil;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JgcfwServiceLmpl implements JgcfwService {
    @Autowired
    private Table_jgcxxMapper table_jgcxxMapper;
    @Autowired
    private Table_yzcscxxMapper table_yzcscxxMapper;
    @Autowired
    private Jgcxx jgcxx;
    @Autowired
    private Yzcscxx yzcscxx;
    @Autowired
    private Result result;
    @Override
    public Result scJgcxx(Jgcxx jgcxx) {
        // 查重
        this.jgcxx = table_jgcxxMapper.getOneJgcxxByReal(jgcxx.getJgcmc(),jgcxx.getJgcdz());
        if (this.jgcxx!=null){
            result.error("hasInfo");
            return result;
        }
        // 解析令牌，得到yhid
        Claims claims = JwtUtil.ParseJwt(jgcxx.getYhid());
        String yhid = claims.get("yhid").toString();
        // 新增数据
        table_jgcxxMapper.insertOneJgcxx(jgcxx.getJgcmc(), yhid, jgcxx.getJgcdz(), jgcxx.getJgcjj());
        this.jgcxx = table_jgcxxMapper.getOneJgcxxByReal(jgcxx.getJgcmc(),jgcxx.getJgcdz());
        List<Jgcxx> jgcxxList = new ArrayList<>();
        jgcxxList.add(this.jgcxx);
        result.success(jgcxxList);
        return result;
    }

    @Override
    public Result xgJgcxx(Jgcxx jgcxx) {
        // 检查用户是否修改
        this.jgcxx = table_jgcxxMapper.getOneJgcxxByJgcid(jgcxx.getJgcid());
        if (jgcxx.getJgcmc().equals(this.jgcxx.getJgcmc()) && jgcxx.getJgcdz().equals(this.jgcxx.getJgcdz()) && jgcxx.getJgcjj().equals(this.jgcxx.getJgcjj())) {
            result.error("hasInfo");
            return result;
        }
        // 修改
        table_jgcxxMapper.updateOneJgcxx(jgcxx.getJgcid(), jgcxx.getJgcmc(), jgcxx.getJgcjj(), jgcxx.getJgcdz());
        this.jgcxx = table_jgcxxMapper.getOneJgcxxByJgcid(jgcxx.getJgcid());
        result.success(this.jgcxx);
        return result;
    }

    @Override
    public Result deleteJgcxx(String jgcid) {
        table_jgcxxMapper.deleteOneJgcxx(jgcid);
        result.success(null);
        return result;
    }

    @Override
    public Result whJgcxx(String token) {
        // 解析令牌，得到yhid
        Claims claims = JwtUtil.ParseJwt(token);
        String yhid = claims.get("yhid").toString();
        // 查询
        List<Jgcxx> jgcxxList = table_jgcxxMapper.getJgcxxByYhid(yhid);
        result.success(jgcxxList);
        return result;
    }

    @Override
    public Result scScxx(Yzcscxx yzcscxx) {
        // 利用yzcscnd、yzcscsj查重
        this.yzcscxx = table_yzcscxxMapper.getOneYzcscxxByReal(yzcscxx.getYzcscnd(), yzcscxx.getYzcscsj());
        if (this.yzcscxx!=null){
            result.error("hasInfo");
            return result;
        }
        // 解析令牌，得到yhid
        Claims claims = JwtUtil.ParseJwt(yzcscxx.getYhid());
        String yhid = claims.get("yhid").toString();
        // 新增
        table_yzcscxxMapper.insertOneYzcscxx(yhid,yzcscxx.getYzcscnd(), yzcscxx.getYzcscsj(), yzcscxx.getYzcscbj());
        this.yzcscxx = table_yzcscxxMapper.getOneYzcscxxByReal(yzcscxx.getYzcscnd(), yzcscxx.getYzcscsj());
        List<Yzcscxx> yzcscxxList = new ArrayList<>();
        yzcscxxList.add(this.yzcscxx);
        result.success(yzcscxxList);
        return result;
    }

    @Override
    public Result xgScxx(Yzcscxx yzcscxx) {
         // 查重
        this.yzcscxx = table_yzcscxxMapper.getOneYzcscxxByscid(yzcscxx.getYzcscid());
        if (yzcscxx.getYzcscnd().equals(this.yzcscxx.getYzcscnd())&&yzcscxx.getYzcscsj().equals(this.yzcscxx.getYzcscsj())&&yzcscxx.getYzcscbj().equals(this.yzcscxx.getYzcscbj())){
            result.error("hasInfo");
            return result;
        }
        table_yzcscxxMapper.updateOneYzcscxx(yzcscxx.getYzcscid(), yzcscxx.getYzcscnd(), yzcscxx.getYzcscsj(), yzcscxx.getYzcscbj());
        this.yzcscxx = table_yzcscxxMapper.getOneYzcscxxByscid(yzcscxx.getYzcscid());
        result.success(this.yzcscxx);
        return result;
    }

    @Override
    public Result deleteScxx(String scid) {
        table_yzcscxxMapper.deleteOneYzcscxx(scid);
        result.success(null);
        return result;
    }

    @Override
    public Result cxScxx(String scnd) {
        List<Yzcscxx> yzcscxxList = table_yzcscxxMapper.getYzcscxxByScnd(scnd);
        result.success(yzcscxxList);
        return result;
    }
}
