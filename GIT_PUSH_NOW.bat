@echo off
chcp 65001
echo ====================================
echo Git Push to GitHub
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
git commit -m "feat: Add modern design with Sparkles and Evervault Card effects"
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
echo Next steps for Vercel deployment:
echo 1. Go to https://vercel.com
echo 2. Login with GitHub
echo 3. Click "Add New Project"
echo 4. Select "TZnewPasha" repository
echo 5. Click "Deploy"
echo.
pause
