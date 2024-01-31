package com.example.flzcjyxt.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class JwtUtil {

    //生成JWT令牌
    public static String GenJwt(String yhid,String yhlx){
        Map<String,Object> claims = new HashMap<>();
        claims.put("yhid",yhid);
        claims.put("yhlx",yhlx);

        String jwt = Jwts.builder()
                .signWith(SignatureAlgorithm.HS256,"moupengcheng500102200309088139lovashenyanxiverymunch")
                .setClaims(claims)
                .setExpiration(new Date(System.currentTimeMillis()+3600*10000))
                .compact();
        return jwt;
    }

    //解析JWT令牌
    public static Claims ParseJwt(String token){
        Claims c = Jwts.parser()
                .setSigningKey("moupengcheng500102200309088139lovashenyanxiverymunch")
                .parseClaimsJws(token)
                .getBody();
        return c;
    }
}

