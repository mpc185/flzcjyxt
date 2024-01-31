package com.example.flzcjyxt.mapper;

import com.example.flzcjyxt.entity.Yzcscxx;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface Table_yzcscxxMapper {
    @Select("select * from table_yzcscxx")
    List<Yzcscxx> getAllInfo();
    // 利用yzcscnd、yzcscsj查找
    @Select("select * from table_yzcscxx where yzcscnd=#{yzcscnd} and yzcscsj=#{yzcscsj}")
    Yzcscxx getOneYzcscxxByReal(String yzcscnd,String yzcscsj);
    // 利用yzcscid查找
    @Select("select * from table_yzcscxx where yzcscid=#{scid}")
    Yzcscxx getOneYzcscxxByscid(String scid);
    // 利用yzcscnd查找
    @Select("select * from table_yzcscxx where yzcscnd=#{scnd}")
    List<Yzcscxx> getYzcscxxByScnd(String scnd);
    // 利用yhid查找
    @Select("select * from table_yzcscxx where yhid=#{yhid}")
    List<Yzcscxx> getYzcscxxByYhid(String yhid);
    // 利用yzcscnd查找
    @Select("select * from table_yzcscxx where yzcscnd=#{scnd}")
    List<Yzcscxx> getYzcscxxByYzcscnd(String scnd);
    // 新增一条记录
    @Insert("insert into table_yzcscxx(yhid, yzcscnd, yzcscsj, yzcscbj) values (#{yhid},#{scnd},#{scsj},#{scbj})")
    void insertOneYzcscxx(String yhid,String scnd,String scsj,String scbj);
    // 修改
    @Update("update table_yzcscxx set yzcscnd=#{scnd},yzcscsj=#{scsj},yzcscbj=#{scbj} where yzcscid=#{scid}")
    void updateOneYzcscxx(String scid,String scnd,String scsj,String scbj);
    //删除
    @Delete("delete from table_yzcscxx where yzcscid=#{scid}")
    void deleteOneYzcscxx(String scid);
    @Delete("delete from table_yzcscxx where yhid=#{yhid}")
    void deletByyhid(String yhid);

}
