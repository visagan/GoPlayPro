package com.gpp.api.resource.configuration;

import com.gpp.api.resource.utils.HeaderRequestInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;

/**
 * Created by visagan on 1/1/16.
 */
@Configuration
public class RestTemplateConfiguration {

    @Bean
    public RestTemplate restTemplate() {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.setInterceptors(Collections.singletonList((ClientHttpRequestInterceptor) new HeaderRequestInterceptor()));
        return restTemplate;
    }
}
