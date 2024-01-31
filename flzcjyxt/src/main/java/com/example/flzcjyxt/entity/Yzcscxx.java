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
public class Yzcscxx {
    @ExcelProperty(value = "收菜编号")
    private String yzcscid;
    @ExcelProperty(value = "用户编号")
    private String yhid;
    @ExcelProperty(value = "收菜年度")
    private String yzcscnd;
    @ExcelProperty(value = "收菜时间")
    private String yzcscsj;
    @ExcelProperty(value = "收菜报价")
    private String yzcscbj;
}
