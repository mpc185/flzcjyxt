package com.example.flzcjyxt.mapper;

import com.example.flzcjyxt.entity.Scscxx;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface Table_scscxxMapper {
    @Select("select * from table_scscxx")
    List<Scscxx> getAllInfo();
    // 通过yhid查询全部收菜信息
    @Select("select * from table_scscxx where yhid=#{yhid}")
    List<Scscxx> getAllScxxByYhid(String yhid);
    // 通过scscid查询收菜信息
    @Select("select * from table_scscxx where scscid=#{scscid}")
    Scscxx getOneScxxByScscid(String scscid);

    // 通过scscnd查询全部收菜信息
    @Select("select * from table_scscxx where scscnd=#{scscnd}")
    List<Scscxx> getAllScxxByScscnd(String scscnd);
    // 通过收菜时间和收菜年度查收菜信息
    @Select("select * from table_scscxx where scscnd=#{scscnd} and scscsj=#{scscsj}")
    Scscxx getOneScxxByReal(String scscnd,String scscsj);

    // 插入一条收菜信息
    @Insert("insert into table_scscxx(yhid, scscnd, scscsj, scscbj) values (#{yhid},#{scscnd},#{scscsj},#{scscbj})")
    void insertOneScxx(String yhid,String scscnd,String scscsj,String scscbj);
    // 更新一条收菜信息
    @Update("update table_scscxx set scscnd=#{scscnd},scscsj=#{scscsj},scscbj=#{scscbj} where scscid=#{scscid}")
    void updateOneScxx(String scscid,String scscnd,String scscsj,String scscbj);
    // 删除一条收菜信息
    @Delete("delete from table_scscxx where scscid=#{scscid}")
    void deleteOneScxx(String scscid);
    @Delete("delete from table_scscxx where yhid=#{yhid}")
    void deletByyhid(String yhid);

}
