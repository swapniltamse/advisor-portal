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

        List<Map<String, String>> policies = Arrays.asList(
            Map.of("id", "1", "policyId", "POL789", "customerName", "Alice Brown", "status", "Active"),
            Map.of("id", "3", "policyId", "POL89", "customerName", "Malince Brown", "status", "Active"),
            Map.of("id", "4", "policyId", "PO389", "customerName", "Alice Ford", "status", "Active"),
            Map.of("id", "5", "policyId", "POL743", "customerName", "Ambylice Bro", "status", "Active"),
            Map.of("id", "6", "policyId", "POL782", "customerName", "Tarlice Black", "status", "Active"),
            Map.of("id", "7", "policyId", "POL722", "customerName", "test user", "status", "Active"),
            Map.of("id", "2", "policyId", "POL045", "customerName", "Bob Johnson", "status", "Active")
        );
        return ResponseEntity.ok(policies);
    }
}
