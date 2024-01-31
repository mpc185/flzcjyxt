package com.example.flzcjyxt.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class Result {
    private int code;
    private String msg;
    private Object data;

    public void success(Object data){
        this.code = 1;
        this.msg = "success";
        this.data = data;
    }
    public void error(String msg){
        this.code=0;
        this.msg=msg;
        this.data=null;
    }

}
