package com.gpp.api.resource.elasticSearch.response;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by z001j5b on 12/18/15.
 */
public class ScrollElasticSearchDTO {

    @JsonProperty("_scroll_id")
    private String scrollId;

    public String getScrollId(){
        return this.scrollId;
    }

    public void setScrollId(String scrollId){
        this.scrollId = scrollId;
    }
}
