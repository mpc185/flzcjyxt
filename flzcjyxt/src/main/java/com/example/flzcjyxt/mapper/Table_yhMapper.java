package com.example.flzcjyxt.mapper;

import com.example.flzcjyxt.entity.User;
import org.apache.ibatis.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Mapper
public interface Table_yhMapper {
    // 查询全部用户信息
    @Select("select * from table_yh")
    List<User> getAllInfo();

    // 根据lxdh，查询一条用户信息
    @Select("select * from table_yh where lxdh=#{LXDH}")
    User getOneUserByLXDH(String LXDH);

    // 根据yhid，查询一条用户信息
    @Select("select * from table_yh where yhid=#{yhid}")
    User getOneUserByYhid(String yhid);

    // 新增一条用户信息
    @Insert("INSERT INTO table_yh (yhzsxm, yhmm, lxdh, yhlx) VALUES (#{yhzsxm}, #{yhmm}, #{lxdh}, #{yhlx})")
    void insertOneUser(String yhzsxm,String yhmm,String lxdh,String yhlx);

    // 更新一条用户姓名、电话、地址
    @Update("update table_yh set yhzsxm=#{yhzsxm},lxdh=#{lxdh},yhdz=#{yhdz} where yhid=#{yhid}")
    void updateOneUser(String yhzsxm,String lxdh,String yhdz,String yhid);
    // 更新一条用户密码
    @Update("update table_yh set yhmm=#{yhmm} where yhid=#{yhid}")
    void updateOneYhmm(String yhmm,String yhid);
    // 更新用户类型
    @Update("update table_yh set yhlx=#{yhlx} where yhid=#{yhid}")
    void updateOneYhlx(String yhid,String yhlx);

    // 查询所有中间商用户信息
    @Select("select * from table_yh where yhlx='中间商'")
    List<User> getAllZjsxx();
    // 查询用户真实姓名
    @Select("select yhzsxm from table_yh where yhid=#{yhid}")
    String  getYhzsxmByYhid(String yhid);
    // 查询用户联系电话
    @Select("select lxdh from table_yh where yhid=#{yhid}")
    String  getLxdhByYhid(String yhid);
    // 通过用户真实姓名查询yhid
    @Select("select yhid from table_yh where yhzsxm=#{yhzsxm}")
    List<String> getYhidByYhzsxm(String yhzsxm);

    // 查询所有菜农的信息
    @Select("select * from table_yh where yhlx='菜农'")
    List<User> getAllCnxx();

    // 删除一条用户信息
    @Delete("delete from table_yh where yhid=#{yhid}")
    void deleteOneYhxx(String yhid);

}
