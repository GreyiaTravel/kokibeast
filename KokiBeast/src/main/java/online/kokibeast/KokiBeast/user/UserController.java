package online.kokibeast.KokiBeast.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/users")

public class UserController {

    @Autowired
    final private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping()
    public User addUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @GetMapping()
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable("id") Long userId){
            return userService.getUser(userId);
        }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable("id") Long userId, @RequestBody User user){
        return userService.updateUser(userId, user);
    };

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id") Long userId){
        userService.deleteUser(userId);
        return "Deleted user with Id: "+userId;
    }

    }



