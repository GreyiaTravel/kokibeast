package online.kokibeast.KokiBeast.user;

import java.util.List;

public interface UserService {
    User addUser(User user);

    List<User> getUsers();

    User getUser(Long userId);

    User updateUser(Long userId, User user);

    void deleteUser(Long userId);
}
