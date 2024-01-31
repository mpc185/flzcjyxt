package com.example.flzcjyxt.utils;

import org.springframework.web.multipart.MultipartFile;

public class ReFilename {
    public static String rename(MultipartFile img,String id,String num){
        //拿到原来文件
        String OriginFileName = img.getOriginalFilename();
        //利用id构造新文件名
        assert OriginFileName != null;
        int index = OriginFileName.lastIndexOf(".");
        String exmName = OriginFileName.substring(index);
        return id+num+exmName;
    }

}
