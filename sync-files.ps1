# PowerShell script to sync root files with public/ directory
# This ensures both GitHub Pages and Vercel have the same content

Write-Host "Syncing files between root and public/ directory..." -ForegroundColor Green

# Sync index.html from root to public
if (Test-Path "index.html") {
    Copy-Item "index.html" "public/index.html" -Force
    Write-Host "✓ Synced index.html to public/" -ForegroundColor Green
} else {
    Write-Host "⚠ index.html not found in root" -ForegroundColor Yellow
}

# Sync images directory
if (Test-Path "images") {
    if (Test-Path "public/images") {
        Remove-Item "public/images" -Recurse -Force
    }
    Copy-Item "images" "public/images" -Recurse -Force
    Write-Host "✓ Synced images/ to public/images/" -ForegroundColor Green
} else {
    Write-Host "⚠ images/ directory not found in root" -ForegroundColor Yellow
}

# Sync any other static files that might be added
$staticFiles = @("vercel.json", "package.json", "README.md", "tailwind.config.js", "postcss.config.js", "components.json")
foreach ($file in $staticFiles) {
    if (Test-Path $file) {
        Copy-Item $file "public/$file" -Force
        Write-Host "✓ Synced $file to public/" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "Sync complete! Both GitHub Pages and Vercel should have the same content." -ForegroundColor Cyan
Write-Host "GitHub Pages: https://kietanhbui.github.io/Portfolio/" -ForegroundColor Blue
Write-Host "Vercel: https://portfolio-alpha-ashen-28.vercel.app/" -ForegroundColor Blue