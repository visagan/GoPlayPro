package com.gpp.api.controller;

import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.lang.reflect.Method;

/**
 * Created by visagan on 1/3/16.
 */
@RestController
public class TournamentController {

    @RequestMapping(value="/tournament/{id}", method= RequestMethod.GET, produces = "Application/Json" )
    @ResponseBody
    public Object getTournamentInformation(@Valid @PathVariable int id){

        return null;
    }


}


