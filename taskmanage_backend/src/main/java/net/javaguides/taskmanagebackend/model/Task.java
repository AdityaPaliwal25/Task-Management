package net.javaguides.taskmanagebackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "tasks")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Task {
    @Id
    private String id;

    private String title;
    private String assignee;
    private String priority;
    private String status;
    private String startDate;
    private String dueDate;
    private boolean recurring;
}
