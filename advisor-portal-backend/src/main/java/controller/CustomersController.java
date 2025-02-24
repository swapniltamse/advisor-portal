package controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
public class CustomersController {

    @GetMapping("/customers")
    public ResponseEntity<?> getCustomers() {
        // Dummy customer data
        List<Map<String, String>> customers = Arrays.asList(
            Map.of("id", "1", "name", "John Doe", "status", "Interested", "nextAction", "Follow-up call tomorrow"),
            Map.of("id", "2", "name", "Jane Smith", "status", "Pending", "nextAction", "Email details")
        );
        return ResponseEntity.ok(customers);
    }
}
