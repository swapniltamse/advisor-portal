package controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
public class InforceController {

    @GetMapping("/inforce")
    public ResponseEntity<?> getInforcePolicies() {
        // Dummy data for active policies
        List<Map<String, String>> policies = Arrays.asList(
            Map.of("id", "1", "policyId", "POL789", "customerName", "Alice Brown", "status", "Active"),
            Map.of("id", "2", "policyId", "POL012", "customerName", "Bob Johnson", "status", "Active")
        );
        return ResponseEntity.ok(policies);
    }
}
