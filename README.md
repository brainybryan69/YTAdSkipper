# YouTube Ad Skipper - Safari Extension

Automatically skips YouTube ads the moment they become skippable, so you don't have to reach for your mouse.

## Installation

### Method 1: Safari Web Extension (Recommended)

1. Open Safari
2. Go to Safari → Preferences → Extensions
3. Click "+" to add a new extension
4. Navigate to this folder and select it
5. Enable the "YouTube Ad Skipper" extension

### Method 2: Developer Mode

1. Open Safari
2. Enable Developer menu: Safari → Preferences → Advanced → Show Develop menu
3. Go to Develop → Allow Unsigned Extensions
4. Go to Safari → Preferences → Extensions
5. Click "+" and select this folder
6. Enable the extension

## How It Works

The extension monitors YouTube pages for:
- Ad indicators and overlays
- Skip buttons that become available
- Automatically clicks skip buttons when they're enabled

## Files

- `manifest.json` - Extension configuration
- `content.js` - Main logic for detecting and skipping ads

## Privacy

This extension:
- Only runs on YouTube domains
- Does not collect any data
- Does not send information anywhere
- Only interacts with ad skip buttons

## Troubleshooting

If the extension isn't working:
1. Check that it's enabled in Safari Preferences → Extensions
2. Refresh YouTube pages
3. Check Safari's Developer Console for any error messages