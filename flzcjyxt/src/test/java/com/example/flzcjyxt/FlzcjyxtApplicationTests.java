package com.example.flzcjyxt;

import com.example.flzcjyxt.entity.User;
import com.example.flzcjyxt.mapper.Table_yhMapper;
import com.example.flzcjyxt.utils.GetSystemInfo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.GlobalMemory;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OperatingSystem;
import oshi.util.FormatUtil;

@SpringBootTest
class FlzcjyxtApplicationTests {
    @Autowired
    private Table_yhMapper table_yhMapper;
    @Autowired
    private User user;
    @Test
    void contextLoads() {
        GetSystemInfo.getJvmInfo();
    }

}
