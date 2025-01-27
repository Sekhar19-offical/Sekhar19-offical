document.getElementById('generate-btn').addEventListener('click', async () => {
    const keywords = document.getElementById('keywords').value;
    const contentType = document.getElementById('content-type').value;
    const outputDiv = document.getElementById('generated-content');
  
    if (!keywords) {
      outputDiv.textContent = 'Please enter some keywords.';
      return;
    }
  
    outputDiv.textContent = 'Generating content...';
  
    try {
      // Replace 'http://127.0.0.1:5000/generate' with your backend API URL.
      const response = await fetch('http://127.0.0.1:5000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ keywords, content_type: contentType }),
      });
  
      if (response.ok) {
        const data = await response.json();
        outputDiv.textContent = data.generated_content;
      } else {
        outputDiv.textContent = 'Error generating content. Please try again.';
      }
    } catch (error) {
      outputDiv.textContent = 'Failed to connect to the server.';
      console.error(error);
    }
  });
  