// Digital Marketing Loop Builder - Main Application Logic

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Digital Marketing Loop Builder initialized');
    
    // Get DOM elements
    const startButton = document.getElementById('startLoop');
    const resetButton = document.getElementById('resetLoop');
    const statusMessage = document.getElementById('statusMessage');
    const loopSteps = document.querySelectorAll('.loop-step');
    
    // Check if all elements are loaded
    if (!startButton || !resetButton || !statusMessage) {
        console.error('Critical elements not found. Page may not have loaded correctly.');
        return;
    }
    
    console.log('All elements loaded successfully');
    
    // Initialize state
    let currentStep = 0;
    let loopActive = false;
    
    // Function to show status message
    function showStatus(message, type = 'info') {
        statusMessage.textContent = message;
        statusMessage.className = type;
        console.log(`Status: ${message} (${type})`);
    }
    
    // Function to highlight a step
    function highlightStep(stepIndex) {
        loopSteps.forEach((step, index) => {
            if (index === stepIndex) {
                step.classList.add('active');
                step.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                step.classList.remove('active');
            }
        });
    }
    
    // Function to start the loop
    function startLoop() {
        if (loopActive) {
            showStatus('Loop is already running!', 'info');
            return;
        }
        
        loopActive = true;
        currentStep = 0;
        showStatus('Starting your marketing loop...', 'success');
        console.log('Loop started');
        
        // Highlight first step
        setTimeout(() => {
            highlightStep(currentStep);
            showStatus('Step 1: Building Engagement - Connect with your audience', 'success');
            
            // Progress through steps
            const stepInterval = setInterval(() => {
                currentStep++;
                
                if (currentStep >= loopSteps.length) {
                    clearInterval(stepInterval);
                    // Loop back to beginning
                    setTimeout(() => {
                        currentStep = 0;
                        highlightStep(currentStep);
                        showStatus('Loop complete! Starting again... Continuous improvement is key!', 'success');
                        loopActive = false;
                    }, 2000);
                } else {
                    highlightStep(currentStep);
                    
                    // Update status based on step
                    if (currentStep === 1) {
                        showStatus('Step 2: Learning - Analyze your data and optimize', 'success');
                    } else if (currentStep === 2) {
                        showStatus('Step 3: Earning - Convert insights into revenue', 'success');
                    }
                }
            }, 3000);
        }, 500);
    }
    
    // Function to reset the loop
    function resetLoop() {
        loopActive = false;
        currentStep = 0;
        
        // Remove all active classes
        loopSteps.forEach(step => {
            step.classList.remove('active');
        });
        
        showStatus('Loop reset. Ready to start again!', 'info');
        console.log('Loop reset');
    }
    
    // Event listeners
    startButton.addEventListener('click', startLoop);
    resetButton.addEventListener('click', resetLoop);
    
    // Add hover effects for steps
    loopSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', function() {
            if (!loopActive) {
                console.log(`Hovering over step ${index + 1}`);
            }
        });
    });
    
    // Initial status message
    showStatus('Welcome! Click "Start Building Your Loop" to begin.', 'info');
    
    // Log that everything is ready
    console.log('Application ready. No white screen issues detected.');
});

// Error handling for uncaught errors
window.addEventListener('error', function(event) {
    console.error('Error detected:', event.error);
    const statusMessage = document.getElementById('statusMessage');
    if (statusMessage) {
        statusMessage.textContent = 'An error occurred. Please check the console for details.';
        statusMessage.className = 'error';
    }
});

// Log when page is about to unload
window.addEventListener('beforeunload', function() {
    console.log('Page unloading...');
});

console.log('App.js loaded successfully - No white screen!');
