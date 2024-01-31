package com.example.flzcjyxt.mapper;

import com.example.flzcjyxt.entity.Jgcxx;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface Table_jgcxxMapper {
    // 查询全部加工厂信息
    @Select("select * from table_jgzxx")
    List<Jgcxx> getAllJgcxx();
    // 利用jgcmc和jgcdz两个字段查询加工厂信息
    @Select("select * from table_jgzxx where jgcmc=#{jgcmc} and jgcdz=#{jgcdz}")
    Jgcxx getOneJgcxxByReal(String jgcmc,String jgcdz);
    // 利用jgcid查询加工厂信息
    @Select("select * from table_jgzxx where jgcid=#{jgcid}")
    Jgcxx getOneJgcxxByJgcid(String jgcid);
    // 利用yhid查询加工厂信息
    @Select("select * from table_jgzxx where yhid=#{yhid}")
    List<Jgcxx> getJgcxxByYhid(String yhid);

    // 新增一条数据
    @Insert("insert into table_jgzxx(yhid, jgcmc, jgcjj, jgcdz) values (#{yhid},#{jgcmc},#{jgcjj},#{jgcdz})")
    void insertOneJgcxx(String jgcmc,String yhid,String jgcdz,String jgcjj);
    // 修改一条信息
    @Update("update  table_jgzxx set jgcmc=#{jgcmc},jgcjj=#{jgcjj},jgcdz=#{jgcdz} where jgcid=#{jgcid}")
     void updateOneJgcxx(String jgcid, String jgcmc,String jgcjj,String jgcdz);
    // 删除一条加工厂信息
    @Delete("delete from table_jgzxx where jgcid=#{jgcid}")
     void deleteOneJgcxx(String jgcid);
    @Delete("delete from table_jgzxx where yhid=#{yhid}")
    void deletByyhid(String yhid);
}
