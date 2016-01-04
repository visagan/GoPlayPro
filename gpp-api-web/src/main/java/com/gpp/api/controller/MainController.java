package com.gpp.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * Created by visagan on 1/1/16.
 */

@Controller
@RestController
@RequestMapping("/")
public class MainController {
    @RequestMapping("/gpp")
    public String index() {
        return "index.html";
    }

    @RequestMapping(value = "/user", method = RequestMethod.GET, produces = {"application/json"})
    @ResponseBody
    public Principal user(Principal user) {
        return user;
    }

}
