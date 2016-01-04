package com.gpp.api.controller;

import com.gpp.api.dto.TeamDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

/**
 * Created by z001j5b on 1/2/16.
 */
@RestController
public class TeamController {

    @RequestMapping(value ="/team/{id}", method = RequestMethod.GET, produces = "Application/Json")
    @ResponseBody
    public Map<Object, Object> getTeamInformation(@PathVariable int id){
        return null;

    }

    @RequestMapping(value ="/team", method = RequestMethod.POST, produces = "Application/Json")
    @ResponseBody
    public Map<Object, Object> createUserProfile(@RequestBody @Valid TeamDto team){
        return null;

    }

    @RequestMapping(value ="/team", method = RequestMethod.PUT, produces = "Application/Json")
    @ResponseBody
    public Map<Object, Object> updateUserProfile(@RequestBody @Valid TeamDto team){
        return null;

    }

    @RequestMapping(value =" /team/{id}", method = RequestMethod.DELETE, produces = "Application/Json")
    @ResponseBody
    public Map<Object, Object> deleteUserProfile(@PathVariable int id){
        return null;

    }
}
