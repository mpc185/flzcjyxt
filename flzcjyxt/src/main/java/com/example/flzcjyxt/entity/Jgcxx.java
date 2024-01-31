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
public class Jgcxx {
    @ExcelProperty(value = "加工厂编号")
    private String jgcid;
    @ExcelProperty(value = "用户账号")
    private String yhid;
    @ExcelProperty(value = "加工厂名称")
    private String jgcmc;
    @ExcelProperty(value = "加工厂地址")
    private String jgcdz;
    @ExcelProperty(value = "加工厂简介")
    private String jgcjj;
}
