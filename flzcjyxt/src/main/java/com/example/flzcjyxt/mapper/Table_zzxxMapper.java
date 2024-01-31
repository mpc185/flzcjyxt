package com.example.flzcjyxt.mapper;

import com.example.flzcjyxt.entity.User;
import com.example.flzcjyxt.entity.Zzxx;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface Table_zzxxMapper {
    @Select("select * from table_zzxx")
    List<Zzxx> getAllInfo();

    // 通过zznd、zzdz、zzsj三个字段查询
    @Select("select * from table_zzxx where zznd=#{zznd} and zzdz=#{zzdz} and zzsj=#{zzsj}")
    Zzxx getOneZzxxByReal(String zznd,String zzdz,String zzsj);
    // 通过zzid查询
    @Select("select * from table_zzxx where zzid=#{zzid}")
    Zzxx getOneZzxxByZzid(String zzid);
    // 通过zznd查询
    @Select("select * from table_zzxx where zznd=#{zznd}")
    List<Zzxx> getManyZzxxByZznd(String zznd);
    // 查询全部种植信息
    @Select("select * from table_zzxx")
    List<Zzxx> getAllZzxxByZznd();
    // 更新一条种植信息
    @Update("update table_zzxx set zznd=#{zznd},zzdz=#{zzdz},zzgm=#{zzgm},zzsj=#{zzsj},scsj=#{scsj} where zzid=#{zzid}")
    void updateOneZzxx(String zzid, String zznd,String zzdz,String zzgm,String zzsj,String scsj);
    // 插入一条种植信息
    @Insert("insert into table_zzxx(yhid, zznd, zzdz, zzgm, zzsj, scsj) values (#{yhid},#{zznd},#{zzdz},#{zzgm},#{zzsj},#{scsj})")
    void insertOneZzxx(String yhid,String zznd,String zzdz,String zzgm,String zzsj,String scsj);
    // 删除一条种植信息
    @Delete("delete from table_zzxx where zzid=#{zzid}")
    void deleteOnezzxx(String zzid);
    // 通过yhid查询种植信息
    @Select("select * from table_zzxx where yhid=#{yhid}")
    List<Zzxx> getZzxxByYhid(String yhid);

    @Delete("delete from table_zzxx where yhid=#{yhid}")
    void deletByyhid(String yhid);

}
