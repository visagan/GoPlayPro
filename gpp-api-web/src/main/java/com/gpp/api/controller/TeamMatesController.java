package com.gpp.api.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Created by z001j5b on 1/2/16.
 */
@RestController
public class TeamMatesController {

    @RequestMapping(value ="/teammates", method = RequestMethod.GET, produces = "Application/Json")
    @ResponseBody
    public Map<Object, Object> getUserInfromation(){
        return null;

    }

    @RequestMapping(value ="/teammates", method = RequestMethod.POST, produces = "Application/Json")
    @ResponseBody
    public Map<Object, Object> createUserProfile(){
        return null;

    }

    @RequestMapping(value ="/teammates", method = RequestMethod.PUT, produces = "Application/Json")
    @ResponseBody
    public Map<Object, Object> updateUserProfile(){
        return null;

    }

    @RequestMapping(value =" /teammates", method = RequestMethod.DELETE, produces = "Application/Json")
    @ResponseBody
    public Map<Object, Object> deleteUserProfile(){
        return null;

    }
}
