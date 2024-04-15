const axios = require('axios');

// Middleware function to retry saving data to the database
async function retrySaveToDatabase(req, res, next) {
    const maxRetries = 3;
    const retryDelay = 1000; // 1 second

    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            // Code to save data to the database
            // Example: await saveToDatabase(req.body);
            // Replace saveToDatabase() with your actual database saving code

            // Simulating database save
            console.log("Attempting to save data to the database...");
            await new Promise(resolve => setTimeout(resolve, 500)); // Simulate database save delay
            
            // If save is successful, proceed to next middleware or route handler
            return next();
        } catch (error) {
            console.error(`Attempt ${attempt + 1} to save to database failed: ${error.message}`);
            if (attempt < maxRetries - 1) {
                console.log("Retrying...");
                await new Promise(resolve => setTimeout(resolve, retryDelay * Math.pow(2, attempt)));
            } else {
                // If all retry attempts fail, send error response to client
                return res.status(500).json({ error: "Failed to save data to the database after multiple attempts" });
            }
        }
    }
}

// Example usage of middleware in an Express route handler
app.post('/save-data', retrySaveToDatabase, (req, res) => {
    res.status(200).json({ message: "Data saved successfully" });
});
