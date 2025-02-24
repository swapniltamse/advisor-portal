package controller;

import com.amazonaws.services.kendra.AWSkendra;
import com.amazonaws.services.kendra.AWSkendraClientBuilder;
import com.amazonaws.services.kendra.model.QueryRequest;
import com.amazonaws.services.kendra.model.QueryResult;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SearchController {

    private final AWSkendra kendraClient = AWSkendraClientBuilder.standard().build();

    private final String indexId = "01b95b57-feaa-430e-b1cb-a9bd3c1c91e8";

    @GetMapping("/search")
    public ResponseEntity<?> search(@RequestParam("q") String query) {
        try {
            QueryRequest queryRequest = new QueryRequest()
                    .withIndexId(indexId)
                    .withQueryText(query);

            QueryResult queryResult = kendraClient.query(queryRequest);

            // Return the result items from Kendra
            return ResponseEntity.ok(queryResult.getResultItems());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error performing search: " + e.getMessage());
        }
    }
}
