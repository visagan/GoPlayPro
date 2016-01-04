package com.gpp.api.resource.elasticSearch;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.gpp.api.resource.elasticSearch.response.ScrollElasticSearchDTO;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.UnsupportedEncodingException;
import java.util.Arrays;

/**
 * Created by z001j5b on 12/17/15.
 */
@Service
public class ElasticSearchQueryImpl implements  ElasticSearchQueryInterface {

    Logger log = Logger.getLogger(ElasticSearchQueryImpl.class);

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    ObjectMapper objectMapper;


    @Override
    public Object get(String searchQuery) throws UnsupportedEncodingException {

//        String fullUrl = "http://10.63.216.76:9200/item_eligibilities/item_eligibility/_search?pretty&size=10000&filter_path=hits.hits._source&_source=department_id,department_class_id,item_id,tcin";
//        fullUrl += "&q=" + searchQuery;

        String scanUrl ="http://10.63.216.76:9200/test/rp_fact/_search?pretty&search_type=scan&scroll=10m&filter_path=_scroll_id";
        scanUrl += "&q="+searchQuery;

        String scrollUrl = "http://10.63.216.76:9200/_search/scroll?pretty&scroll=1m&filter_path=hits.hits._source,_scroll_id&_source=departmentId,classId,temId,tcin";

       // log.debug(fullUrl);
        ResponseEntity<?> response = null;

        try {
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
            HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
            response = restTemplate.exchange(scanUrl, HttpMethod.GET, entity, Object.class);
            ScrollElasticSearchDTO initialPage = objectMapper.convertValue(response.getBody(),
                    new TypeReference<ScrollElasticSearchDTO>() {
                    });
             entity = new HttpEntity<String>(initialPage.getScrollId());
            response = restTemplate.exchange(scrollUrl, HttpMethod.POST, new HttpEntity<>(initialPage.getScrollId(), headers) , Object.class);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return response.getBody();
    }

    @Override
    public Object getScroll(String scrollId) throws UnsupportedEncodingException {
        String scrollUrl = "http://10.63.216.76:9200/_search/scroll?pretty&scroll=1m&filter_path=hits.hits._source,_scroll_id&_source=departmentId,classId,itemId,tcin";

        ResponseEntity<?> response = null;

        try {
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
            HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
            response = restTemplate.exchange(scrollUrl, HttpMethod.POST, new HttpEntity<>(scrollId, headers) , Object.class);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return response.getBody();
    }


}
