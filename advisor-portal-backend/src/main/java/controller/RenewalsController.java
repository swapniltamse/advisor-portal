package controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
public class RenewalsController {

    @GetMapping("/renewals")
    public ResponseEntity<?> getRenewals() {
        // Dummy data for policies nearing renewal
        List<Map<String, String>> renewals = Arrays.asList(
            Map.of("id", "1", "customerName", "John Doe", "policyId", "POL123", "endDate", "2025-03-31", "phone", "555-1234"),
            Map.of("id", "2", "customerName", "Jane Smith", "policyId", "POL456", "endDate", "2025-04-15", "phone", "555-5678")
        );
        return ResponseEntity.ok(renewals);
    }
}
