package net.javaguides.taskmanagebackend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "task_media")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TaskMedia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String taskId;
    // Link this media to a task
    private String fileName;
    private String fileType;
    private String filePath;
}
