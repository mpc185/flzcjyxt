package com.example.flzcjyxt.service;

import com.example.flzcjyxt.entity.Result;
import com.example.flzcjyxt.entity.Zzxx;

public interface CnfwService {
    Result scOneZzxx(String token, Zzxx zzxx);
    Result xgOneZzxx(Zzxx zzxx);
    Result deleteOneZzxx(String zzid);
    Result cxManyZzxx(String zznd);
    Result ckZZxx();
    Result intoCkzjsxx();
    Result getAllCcxx(String yhid);
    Result getAllScxx(String yhid);
    Result getZsxmAndLxdh(String yhid);
    Result CxAllCcxx(String yhzsxm);
    Result CxAllScxx(String scscnd);

}
