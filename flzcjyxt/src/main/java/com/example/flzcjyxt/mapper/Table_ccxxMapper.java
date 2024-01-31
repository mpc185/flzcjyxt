package com.example.flzcjyxt.mapper;

import com.example.flzcjyxt.entity.Ccxx;
import lombok.Data;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface Table_ccxxMapper {
    @Select("select * from table_ccxx")
    List<Ccxx> getAllInfo();
    // 通过yhid查询菜场信息
    @Select("select * from  table_ccxx where yhid=#{yhid}")
    List<Ccxx> getCcxxByYhid(String yhid);
    // 通过ccdz查询菜场信息
    @Select("select * from  table_ccxx where ccdz=#{ccdz}")
    Ccxx getCcxxByCcdz(String ccdz);
    // 通过ccdz查询ccid
    @Select("select ccid from  table_ccxx where ccdz=#{ccdz}")
    String getCcidByCcdz(String ccdz);
    // 通过ccid查询菜场信息
    @Select("select  * from table_ccxx where ccid=#{ccid}")
    Ccxx getOneCcxxByCcid(String ccid);
    // 新增一条没有图片的菜场信息
    @Insert("insert into table_ccxx(yhid, ccdz, ccgs, rngm) values (#{yhid},#{ccdz},#{ccgs},#{rngm})")
    void insertCcxxWithoutImg(String yhid,String ccgs,String rngm,String ccdz);
    // 修改菜场信息图片信息
    @Update("update table_ccxx set img1=#{img1},img2=#{img2},img3=#{img3} where ccid=#{ccid}")
    void updateCcxxImages(String ccid,String img1,String img2,String img3);
    // 修改图片1
    @Update("update table_ccxx set img1=#{img1} where ccid=#{ccid}")
    void updateCcxxImg1(String ccid,String img1);
    // 修改图片2
    @Update("update table_ccxx set img2=#{img2} where ccid=#{ccid}")
    void updateCcxxImg2(String ccid,String img2);
    // 修改图片3
    @Update("update table_ccxx set img3=#{img3} where ccid=#{ccid}")
    void updateCcxxImg3(String ccid,String img3);
    // 修改菜场信息
    @Update("update table_ccxx set ccgs=#{ccgs},rngm=#{rngm},ccdz=#{ccdz} where ccid=#{ccid}")
    void updataCcxx(String ccid,String ccgs,String rngm,String ccdz);
    // 删除菜场信息
    @Delete("delete from table_ccxx where ccid=#{ccid}")
    void deleteOneCcxx(String ccid);
    @Delete("delete from table_ccxx where yhid=#{yhid}")
    void deletByyhid(String yhid);

}
