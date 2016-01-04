package com.gpp.api.resource.elasticSearch;



import java.io.UnsupportedEncodingException;

/**
 * Created by z001j5b on 12/17/15.
 */
public interface ElasticSearchQueryInterface {

    Object get(String query) throws  UnsupportedEncodingException;
    Object getScroll(String scrollId) throws  UnsupportedEncodingException;
}
