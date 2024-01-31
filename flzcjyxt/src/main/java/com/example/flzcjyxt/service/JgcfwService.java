package com.example.flzcjyxt.service;

import com.example.flzcjyxt.entity.Jgcxx;
import com.example.flzcjyxt.entity.Result;
import com.example.flzcjyxt.entity.Yzcscxx;

public interface JgcfwService {
    Result scJgcxx(Jgcxx jgcxx);
    Result xgJgcxx(Jgcxx jgcxx);
    Result deleteJgcxx(String jgcid);
    Result whJgcxx(String token);
    Result scScxx(Yzcscxx yzcscxx);
    Result xgScxx(Yzcscxx yzcscxx);
    Result deleteScxx(String scid);
    Result cxScxx(String scnd);
}
