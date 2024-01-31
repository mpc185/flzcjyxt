package com.example.flzcjyxt.entity;

import com.alibaba.excel.annotation.ExcelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
@Builder
public class User{
    @ExcelProperty(value = "账号")
    private String yhid;
    @ExcelProperty(value = "真实姓名")
    private String yhzsxm;
    @ExcelProperty(value = "用户密码")
    private String yhmm;
    @ExcelProperty(value = "联系电话")
    private String lxdh;
    @ExcelProperty(value = "用户类型")
    private String yhlx;
    @ExcelProperty(value = "用户地址")
    private String yhdz;


}
