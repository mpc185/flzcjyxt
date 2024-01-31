package com.example.flzcjyxt.utils;


import org.apache.ibatis.reflection.Jdk;
import oshi.SystemInfo;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.hardware.NetworkIF;
import oshi.software.os.OperatingSystem;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class GetSystemInfo {

    public static List<String> getCPUInfo(){
        List<String> cpuInfo = new ArrayList<>();
        // 创建SystemInfo对象
        SystemInfo systemInfo = new SystemInfo();
        OperatingSystem os = systemInfo.getOperatingSystem();
        HardwareAbstractionLayer hardware = systemInfo.getHardware();
        // 获取操作系统
        cpuInfo.add(os.toString());
        // 获取服务器运行时间
        long uptime = os.getSystemUptime();
        long hours = TimeUnit.SECONDS.toHours(uptime);
        long minutes = TimeUnit.SECONDS.toMinutes(uptime) % 60;
        long seconds = uptime % 60;
        String time = hours+"时"+minutes+"分"+seconds+"秒";
        cpuInfo.add(time);

        // 获取IP地址
        List<NetworkIF> networkIFs = hardware.getNetworkIFs();
        for (NetworkIF networkIF : networkIFs) {
            String[] ipAddresses = networkIF.getIPv4addr();
            for (String ipAddress : ipAddresses) {
                cpuInfo.add(ipAddress);
            }
        }
        // 获取核心数
        int processorCount = hardware.getProcessor().getPhysicalProcessorCount();
        cpuInfo.add(""+processorCount);
        // 获取CPU使用率
        double cpuUsage = hardware.getProcessor().getSystemCpuLoad(1000);
        cpuUsage*=100;
        cpuInfo.add(""+cpuUsage+"%");
        //获取CPU基准速度
        double baseFrequency = hardware.getProcessor().getProcessorIdentifier().getVendorFreq();
        cpuInfo.add(baseFrequency+"GHz");

        return cpuInfo;
    }
    public static List<String> getMemoryInfo(){
        List<String> memoryInfo = new ArrayList<>();
        SystemInfo systemInfo = new SystemInfo();
        OperatingSystem os = systemInfo.getOperatingSystem();
        HardwareAbstractionLayer hardware = systemInfo.getHardware();

        // 获取总内存
        long totalMemory = hardware.getMemory().getTotal();
        long totalMemoryInGB = totalMemory / (1024 * 1024); // 转换为MB
        memoryInfo.add(totalMemoryInGB+"MB");
        // 获取剩余内存
        long AvailableMemory = hardware.getMemory().getAvailable();
        long AvailableMemoryInGB = AvailableMemory / (1024 * 1024);
        memoryInfo.add(AvailableMemoryInGB+"MB");
        // 已使用内存
        long useMemory = totalMemory-AvailableMemory;
        long AuseMemoryInGB = useMemory / (1024 * 1024);
        memoryInfo.add(AuseMemoryInGB+"MB");
        // 内存使用率
        double rate = (useMemory*1.0/totalMemory)*100;
        memoryInfo.add(rate+"%");

        return memoryInfo;
    }
    public static List<String> getJvmInfo(){
        List<String> jvmInfo = new ArrayList<>();
        Properties props = System.getProperties();
        Runtime runtime = Runtime.getRuntime();
        // JVM总内存
        long jvmMemory = runtime.totalMemory();
        jvmMemory /= (1024*1024);
        jvmInfo.add(jvmMemory+"MB");
        // JVM最大可申请空间
        long maxMemory = runtime.maxMemory();
        maxMemory /= (1024*1024);
        jvmInfo.add(maxMemory+"");
        // JVM空闲空间
        long freeMemory = runtime.freeMemory();
        freeMemory /= (1024*1024);
        jvmInfo.add(freeMemory+"");
        // JVM使用率
        double rate = ((jvmMemory-freeMemory)*1.0/jvmMemory)*100;
        jvmInfo.add(rate+"%");
        //jdk版本
        String version = props.getProperty("java.version");
        jvmInfo.add(version);
        //jdk路径
        String path = props.getProperty("java.home");
        jvmInfo.add(path);

        return jvmInfo;
    }



}
