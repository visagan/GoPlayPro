package com.gpp.api.resource.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpRequest;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;

import java.io.IOException;

/**
 * Created by visagan on 11/4/15.
 */
public class HeaderRequestInterceptor implements ClientHttpRequestInterceptor {
    @Value("{api.key:not_configured}")
    private String apiKey;

    @Override
    public ClientHttpResponse intercept(HttpRequest request, byte[] body, ClientHttpRequestExecution execution) throws IOException {
        HttpHeaders headers = request.getHeaders();
        headers.add("Accept", "application/json");
        headers.add("Content-Type","application/json");
        headers.add("X-Api-Id", apiKey);
        return execution.execute(request, body);
    }
}
