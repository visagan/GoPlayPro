package com.gpp.api.controller;

import com.gpp.api.resource.elasticSearch.ElasticSearchQueryInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import org.springframework.stereotype.Controller;

/**
 * Created by z001j5b on 1/1/16.
 */

@RestController
@Controller
public class GoPlayProController {



    public static final org.apache.log4j.Logger log = org.apache.log4j.Logger.getLogger(GoPlayProController.class);



    @RequestMapping("/mca/elasticSearch/itemDetail")
    @ResponseBody
    Object getResults(String query){
        HashMap<String, Object> results = new HashMap<>();
        results.put("value", "ElasticSearch");
        results.put("query", query);
        Object result = null;
        try {
            result = elasticSearchQuery.get(query);
        } catch (Exception e) {
            e.printStackTrace();
        }
        results.put("result", result);
        return result;
    }

    @RequestMapping("/mca/elasticSearch/scroll")
    @ResponseBody
    Object getNextPage(String scrollId){
        Object result = null;
        try {

            result = elasticSearchQuery.getScroll(scrollId);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    @Autowired
    ElasticSearchQueryInterface elasticSearchQuery;

    /*
    @RequestMapping(value="/itemDetail")
    @ResponseBody
    public String getElasticSearchResults(String query) throws RestException, UnsupportedEncodingException {

        return elasticSearchQuery.get("id:1");
    }
    */
}
