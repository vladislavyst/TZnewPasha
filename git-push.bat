@echo off
chcp 65001 >nul
echo ====================================
echo Git Push Script
echo ====================================
echo.

echo Checking git status...
git status

echo.
echo Adding all files...
git add .

echo.
echo Committing changes...
git commit -m "feat: Add modern design with Sparkles and Evervault Card effects

- Add Sparkles particle effect to homepage
- Add Evervault Card interactive effect to features card
- Improve overall design with gradients and animations
- Add Inter font from Google Fonts
- Full mobile responsive design
- Fix CSS compilation errors"

echo.
echo Pushing to GitHub...
git push

echo.
echo ====================================
echo Done!
echo ====================================
pause
