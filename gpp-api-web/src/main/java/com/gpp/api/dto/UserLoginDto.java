package com.gpp.api.dto;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

/**
 * Created by z001j5b on 1/2/16.
 */
@Entity
@Table(name = "user_login")
public class UserLoginDto {

    @Id
    @NotNull
    private String username;

    @NotNull
    private String password;


    UserLoginDto() {

    }

    public UserLoginDto(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getPassword() {
        return this.password;
    }


    public void setPassword(String value) {
        this.password = value;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUserName(String username) {
        this.username = username;
    }

}
