@echo off
echo ========================================
echo Deploy to GitHub and Vercel
echo ========================================
echo.

echo Step 1: Checking Git status...
git status
echo.

echo Step 2: Adding all files...
git add .
echo.

echo Step 3: Committing changes...
git commit -m "Deploy: Interactive TZ questionnaire app"
echo.

echo Step 4: Pushing to GitHub...
echo Please make sure you have:
echo 1. Created a GitHub repository
echo 2. Added remote: git remote add origin YOUR_REPO_URL
echo.
git push origin main
echo.

echo ========================================
echo Next steps:
echo 1. Go to https://vercel.com
echo 2. Import your GitHub repository
echo 3. Deploy!
echo ========================================
pause
