# File Synchronization

This project is deployed to both GitHub Pages and Vercel, which require different file structures:

- **GitHub Pages**: Serves from root directory (`index.html`, `images/`)
- **Vercel**: Serves from `public/` directory (`public/index.html`, `public/images/`)

## Keeping Files in Sync

### Option 1: Use the Batch Script (Recommended)
```bash
.\sync-files.bat
```

### Option 2: Use the PowerShell Script
```powershell
.\sync-files.ps1
```

### Option 3: Manual Sync
```bash
# Copy root files to public/
copy index.html public\index.html
xcopy images public\images /e /i /h /y
```

## Workflow

1. **Make changes** to files in the root directory
2. **Run sync script** to update `public/` directory
3. **Commit and push** - both platforms will update automatically

## Deployment URLs

- **GitHub Pages**: https://kietanhbui.github.io/Portfolio/
- **Vercel**: https://portfolio-alpha-ashen-28.vercel.app/

Both should display identical content after syncing.
