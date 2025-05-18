package net.javaguides.taskmanagebackend.repository;

import net.javaguides.taskmanagebackend.model.TaskMedia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskMediaRepository extends JpaRepository<TaskMedia, Long> {
    List<TaskMedia> findByTaskId(String taskId);
}
