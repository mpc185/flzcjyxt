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
public class Scscxx {
    @ExcelProperty(value = "收菜编号")
    private String scscid;
    @ExcelProperty(value = "用户账号")
    private String yhid;
    @ExcelProperty(value = "收菜年度")
    private String scscnd;
    @ExcelProperty(value = "收菜时间")
    private String scscsj;
    @ExcelProperty(value = "收菜报价")
    private String scscbj;
}
