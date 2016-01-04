package com.gpp.api.dao;

import com.gpp.api.dto.UserLoginDto;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

/**
 * Created by z001j5b on 1/2/16.
 */
@Transactional
 public interface UserLoginDao extends CrudRepository<UserLoginDto, String> {

    public UserLoginDto findByUsername(String username);



}
