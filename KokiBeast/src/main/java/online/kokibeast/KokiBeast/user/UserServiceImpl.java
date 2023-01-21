package online.kokibeast.KokiBeast.user;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserServiceImpl implements UserService{

    final private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUser(Long userId) {
        return userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
    }

    @Override
    public User updateUser(Long userId, User user) {
        User updatedUser = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);

        if(Objects.nonNull(user.getFirstname()) && !"".equalsIgnoreCase(user.getFirstname())){
            updatedUser.setFirstname(user.getFirstname());
        }

        if(Objects.nonNull(user.getLastname()) && !"".equalsIgnoreCase(user.getLastname())){
            updatedUser.setLastname(user.getLastname());
        }

        if(Objects.nonNull(user.getEmail()) && !"".equalsIgnoreCase(user.getEmail())){
            updatedUser.setEmail(user.getEmail());
        }

        if(Objects.nonNull(user.getUsername()) && !"".equalsIgnoreCase(user.getUsername())){
            updatedUser.setUsername(user.getUsername());
        }

        if(Objects.nonNull(user.getPassword()) && !"".equalsIgnoreCase(user.getPassword())){
            updatedUser.setPassword(user.getPassword());
        }

        return userRepository.save(updatedUser);

    }

    @Override
    public void deleteUser(Long userId) {
        User existUser = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        userRepository.delete(existUser);

    }
}
