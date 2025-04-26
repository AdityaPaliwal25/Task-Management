package net.javaguides.taskmanagebackend.controller;

import net.javaguides.taskmanagebackend.model.TaskMedia;
import net.javaguides.taskmanagebackend.repository.TaskMediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.net.MalformedURLException;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/media")
@CrossOrigin(origins = "*")
public class TaskMediaController {

    private static final String UPLOAD_DIR = System.getProperty("user.dir") + File.separator + "uploads" + File.separator;

    @Autowired
    private TaskMediaRepository taskMediaRepository;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadMedia(
            @RequestParam("file") MultipartFile file,
            @RequestParam("taskId") String taskId) {

        String fileName = StringUtils.cleanPath(UUID.randomUUID() + "_" + file.getOriginalFilename());
        File uploadDir = new File(UPLOAD_DIR);

        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }

        try {
            File destFile = new File(UPLOAD_DIR + fileName);
            file.transferTo(destFile);

            TaskMedia media = TaskMedia.builder()
                    .taskId(taskId)  // ✅ Changed from Long to String
                    .fileName(fileName)
                    .fileType(file.getContentType())
                    .filePath(destFile.getAbsolutePath())
                    .build();

            taskMediaRepository.save(media);

            return ResponseEntity.ok("File uploaded successfully!");

        } catch (IOException e) {
            return ResponseEntity.status(500).body("File upload failed: " + e.getMessage());
        }
    }

    @GetMapping("/task/{taskId}")
    public ResponseEntity<List<TaskMedia>> getMediaByTaskId(@PathVariable String taskId) {  //  FIXED: Long → String
        return ResponseEntity.ok(taskMediaRepository.findByTaskId(taskId));  //  Make sure repository uses String
    }

    @GetMapping("/files/{fileName}")
    public ResponseEntity<Resource> getFile(@PathVariable String fileName) throws MalformedURLException {
        Path filePath = Paths.get("uploads").resolve(fileName).normalize();
        Resource resource = new UrlResource(filePath.toUri());

        if (resource.exists()) {
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + fileName + "\"")
                    .body(resource);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
