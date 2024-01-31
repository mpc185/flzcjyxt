package com.example.flzcjyxt.entity;

import com.alibaba.excel.annotation.ExcelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class Ccxx {
    @ExcelProperty(value = "菜场编号")
    private String ccid;
    @ExcelProperty(value = "用户账号")
    private String yhid;
    @ExcelProperty(value = "菜场地址")
    private String ccdz;
    @ExcelProperty(value = "菜池个数")
    private String ccgs;
    @ExcelProperty(value = "容纳规模")
    private String rngm;
    @ExcelProperty(value = "图片1")
    private String img1;
    @ExcelProperty(value = "图片2")
    private String img2;
    @ExcelProperty(value = "图片3")
    private String img3;
}
