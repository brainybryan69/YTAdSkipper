(function() {
    'use strict';

    const SKIP_BUTTON_SELECTORS = [
        '.ytp-ad-skip-button',
        '.ytp-skip-ad-button',
        '.ytp-ad-skip-button-modern',
        '[class*="skip"][class*="button"]',
        'button[class*="skip"]'
    ];

    const AD_OVERLAY_SELECTORS = [
        '.ytp-ad-overlay-container',
        '.ytp-ad-text-overlay',
        '.ytp-ad-player-overlay'
    ];

    function findSkipButton() {
        for (const selector of SKIP_BUTTON_SELECTORS) {
            const button = document.querySelector(selector);
            if (button && button.offsetParent !== null) {
                return button;
            }
        }
        return null;
    }

    function isAdPlaying() {
        const adIndicators = [
            '.ytp-ad-text',
            '.ytp-ad-preview-text',
            '[class*="ad-showing"]',
            '.video-ads'
        ];
        
        return adIndicators.some(selector => {
            const element = document.querySelector(selector);
            return element && element.offsetParent !== null;
        });
    }

    function skipAd() {
        const skipButton = findSkipButton();
        if (skipButton) {
            console.log('YouTube Ad Skipper: Clicking skip button');
            skipButton.click();
            return true;
        }
        return false;
    }

    function checkForSkippableAd() {
        if (!isAdPlaying()) {
            return;
        }

        const skipButton = findSkipButton();
        if (skipButton) {
            const buttonText = skipButton.textContent || skipButton.innerText || '';
            
            if (buttonText.toLowerCase().includes('skip') && 
                !skipButton.disabled && 
                skipButton.offsetParent !== null) {
                
                setTimeout(() => {
                    if (skipAd()) {
                        console.log('YouTube Ad Skipper: Successfully skipped ad');
                    }
                }, 100);
            }
        }
    }

    function initializeSkipper() {
        const observer = new MutationObserver((mutations) => {
            let shouldCheck = false;
            
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' || mutation.type === 'attributes') {
                    shouldCheck = true;
                }
            });
            
            if (shouldCheck) {
                checkForSkippableAd();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'style', 'disabled']
        });

        setInterval(checkForSkippableAd, 500);
        
        console.log('YouTube Ad Skipper: Initialized');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeSkipper);
    } else {
        initializeSkipper();
    }
})();