package com.gpp.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * Created by visagan on 6/9/15.
 */
@SpringBootApplication
//@EnableAsync
//@EnableApiBase
@EnableAutoConfiguration
@ComponentScan

public class Application {
    /**
     * Entry point to app.
     * @param args
     * @throws Exception
     */
    public static void main(String[] args) throws Exception {
        SpringApplication.run(Application.class, args);
    }
}
