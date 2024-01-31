package com.example.flzcjyxt.entity;

import com.alibaba.excel.annotation.ExcelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class Zzxx {
    @ExcelProperty(value = "种植编号")
    private String zzid;
    @ExcelProperty(value = "用户账号" )
    private String yhid;
    @ExcelProperty(value = "种植年度")
    private String zznd;
    @ExcelProperty(value = "种植地址")
    private String zzdz;
    @ExcelProperty(value = "种植规模")
    private String zzgm;
    @ExcelProperty(value = "种植数据")
    private String zzsj;
    @ExcelProperty(value = "收菜时间")
    private String scsj;
}
