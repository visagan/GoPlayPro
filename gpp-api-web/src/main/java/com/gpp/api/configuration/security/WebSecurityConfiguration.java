package com.gpp.api.configuration.security;

import com.gpp.api.dao.UserLoginDao;
import com.gpp.api.dto.UserLoginDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.GlobalAuthenticationConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Created by visagan on 1/1/16.
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()

                .antMatchers("/css/**",
                        "/app/login/**",
                        "/app/gpp.js",
                        "/index.html",
                        "/",
                        "/app/core/**",
                        "/app/layout/**",
                        "/app/elasticSearch/**",
                        "/app/metadata/**",
                        "/bower_components/**"
                ).permitAll()

                .anyRequest().fullyAuthenticated()
                .and()
                .httpBasic();


//                .anyRequest().authenticated()
//                .and()
//                .formLogin();
    }

    @Configuration
    protected static class AuthenticationConfiguration extends
            GlobalAuthenticationConfigurerAdapter {

        @Override
        public void init(AuthenticationManagerBuilder auth) throws Exception {
            auth.inMemoryAuthentication().withUser("user").password("password").roles("USER");


//            auth
//                    .ldapAuthentication()
//                    .userDnPatterns("uid={0},ou=Employees,ou=People")
//                    .groupSearchBase("ou=People")
//                    .contextSource().ldif("classpath:test.ldif");
        }
    }

    /*
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Autowired
    UserLoginDao userLogin;

    @Bean
    protected UserDetailsService userDetailsService() {
        return new UserDetailsService() {

            @Override
            public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

                UserLoginDto user = userLogin.findByUsername(username);
                if(user != null) {
                    return new User(user.getUsername(),
                            user.getPassword(),
                            true,
                            true,
                            true,
                            true,
                            AuthorityUtils.createAuthorityList("USER")
                    );

                } else {
                    throw new UsernameNotFoundException("could not find the user '"
                            + username + "'");
                }
            }

        };
    }
    */

}
