@echo off
echo Syncing files between root and public/ directory...

REM Sync index.html from root to public
if exist "index.html" (
    copy "index.html" "public\index.html" /Y >nul
    echo ✓ Synced index.html to public/
) else (
    echo ⚠ index.html not found in root
)

REM Sync images directory
if exist "images" (
    if exist "public\images" rmdir "public\images" /s /q
    xcopy "images" "public\images" /e /i /h /y >nul
    echo ✓ Synced images/ to public/images/
) else (
    echo ⚠ images/ directory not found in root
)

REM Sync other static files
for %%f in (vercel.json package.json README.md tailwind.config.js postcss.config.js components.json) do (
    if exist "%%f" (
        copy "%%f" "public\%%f" /Y >nul
        echo ✓ Synced %%f to public/
    )
)

echo.
echo Sync complete! Both GitHub Pages and Vercel should have the same content.
echo GitHub Pages: https://kietanhbui.github.io/Portfolio/
echo Vercel: https://portfolio-alpha-ashen-28.vercel.app/
pause
