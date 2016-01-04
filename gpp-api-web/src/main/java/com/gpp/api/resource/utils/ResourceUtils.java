package com.gpp.api.resource.utils;

import java.util.Map;

/**
 * Created by visagan on 11/4/15.
 */
public class ResourceUtils {

    public static String convertMapToCmdString(Map<String, String> cmdMap, String apiKey) {
        StringBuilder sb = new StringBuilder("?key=" + apiKey);
        for (Map.Entry entry : cmdMap.entrySet()) {
            sb.append("&")
            .append(entry.getKey())
            .append("=")
            .append(entry.getValue());
        }
        return sb.toString();
    }
}
