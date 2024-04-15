import { useState, useEffect } from 'react';

// Custom hook for retrying data saving in the frontend
function useRetrySaveToDatabase(dataToSave, maxRetries = 3, retryDelay = 1000) {
    const [error, setError] = useState(null);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        let retries = 0;

        async function saveDataToDatabase() {
            setIsSaving(true);
            setError(null);

            for (let attempt = 0; attempt < maxRetries; attempt++) {
                try {
                    // Code to save data to the database
                    // Example: await saveToDatabase(dataToSave);
                    // Replace saveToDatabase() with your actual database saving code

                    // Simulating database save
                    console.log("Attempting to save data to the database...");
                    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate database save delay

                    // If save is successful, break out of the loop
                    break;
                } catch (error) {
                    console.error(`Attempt ${attempt + 1} to save to database failed: ${error.message}`);
                    if (attempt < maxRetries - 1) {
                        console.log("Retrying...");
                        await new Promise(resolve => setTimeout(resolve, retryDelay * Math.pow(2, attempt)));
                    } else {
                        // If all retry attempts fail, set error state
                        setError("Failed to save data to the database after multiple attempts");
                    }
                }
            }

            setIsSaving(false);
        }

        if (dataToSave) {
            saveDataToDatabase();
        }

    }, [dataToSave, maxRetries, retryDelay]);

    return { isSaving, error };
}

// Example usage of the custom hook
function MyComponent() {
    const [formData, setFormData] = useState({});
    const { isSaving, error } = useRetrySaveToDatabase(formData);

    const handleSubmit = () => {
        // Assuming formData contains the data to be saved
        // Example: setFormData({ name: 'John', age: 30 });
        // Replace this with your actual form data

        // Once form data is set, useRetrySaveToDatabase hook will trigger
    };

    return (
        <div>
            {/* Your form */}
            <form onSubmit={handleSubmit}>
                {/* Form fields */}
                {/* Submit button */}

                {/* Display error if saving fails */}
                {error && <div>Error: {error}</div>}
                {/* Display saving indicator */}
                {isSaving && <div>Saving...</div>}
            </form>
        </div>
    );
}
