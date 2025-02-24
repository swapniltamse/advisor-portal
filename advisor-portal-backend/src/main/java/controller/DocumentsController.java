package controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
public class DocumentsController {

    @GetMapping("/documents")
    public ResponseEntity<?> getDocuments() {
        // Dummy data for demonstration
        List<Map<String, String>> documents = Arrays.asList(
            Map.of("id", "1", "name", "bar pdf", "category", "Bar", "url", "s3://my-insurance-docs-demo/marketing/bar.pdf"),
            Map.of("id", "2", "name", "Bene form", "category", "Bene", "url", "s3://my-insurance-docs-demo/marketing/life-change-of-beneficiary.pdf")
        );
        return ResponseEntity.ok(documents);
    }
}
