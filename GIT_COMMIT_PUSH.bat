@echo off
chcp 65001
echo ====================================
echo Git Commit and Push to GitHub
echo ====================================
echo.

echo [1/4] Checking git status...
git status
echo.

echo [2/4] Adding all files...
git add .
echo Done!
echo.

echo [3/4] Creating commit...
git commit -m "fix: Move DOCX generation to server-side API route

- Create /api/generate-docx route for server-side DOCX generation
- Fix DOCX download issue on Vercel deployment
- Remove client-side docx imports from TZGenerator component
- Use fetch API to generate DOCX on server instead of browser
- This fixes the issue where DOCX files couldn't be downloaded after deployment"
echo Done!
echo.

echo [4/4] Pushing to GitHub...
git push origin main
echo.

echo ====================================
echo SUCCESS! Code pushed to GitHub!
echo ====================================
echo.
echo Repository: https://github.com/vladislavyst/TZnewPasha
echo.
echo Vercel will automatically redeploy after this push!
echo.
pause
