package net.javaguides.taskmanagebackend.repository;

import net.javaguides.taskmanagebackend.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, String> {
}
