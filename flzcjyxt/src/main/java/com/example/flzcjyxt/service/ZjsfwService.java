package com.example.flzcjyxt.service;

import com.example.flzcjyxt.entity.Result;
import com.example.flzcjyxt.entity.Scscxx;
import com.example.flzcjyxt.entity.Zzxx;
import org.springframework.web.multipart.MultipartFile;

public interface ZjsfwService {
    Result scOneCcxx(String token, String ccgs, String rngm, String ccdz, MultipartFile img1, MultipartFile img2, MultipartFile img3);
//    Result xgOneCcxx(String ccid ,String ccgs, String rngm, String ccdz, MultipartFile img1, MultipartFile img2, MultipartFile img3);

    Result xgOneCcxx(String ccid, String ccgs, String rngm, String ccdz, Object img1, Object img2, Object img3);

    Result deleteOneCcxx(String ccid);
    Result allCcxx(String token);
    Result scOneScxx(String token, Scscxx scscxx);
    Result xgOneScxx(Scscxx scscxx);
    Result deleteOneScxx(String scscid);
    Result cxOneScxx(String scscnd);
    Result intoCkcnxx();
    Result ckZzxx(String yhid);
    Result cxZzxx(String yhzsxm);
    Result intoCkjgcxx();
    Result getYhzsxm(String yhid);
    Result getJgcscxx(String yhid);
    Result getZmxmAndlxdh(String yhid);
    Result getSCxx(String scnd);
}
