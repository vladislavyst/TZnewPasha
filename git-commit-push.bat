@echo off
chcp 65001
echo ====================================
echo Git Commit and Push
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
git commit -m "feat: Update questions for agricultural equipment theme

- Replace all 76 questions with agricultural equipment specific questions
- Add questions about company info, contacts, regions
- Add questions about brands (CLAAS, John Deere, CNH, JCB, Manitou, Bourgault)
- Add questions about reference site kompleksagro.ru
- Add questions about forms, integrations (CRM, 1C, Telegram)
- Add questions about catalog structure, prices, delivery, payment
- Add questions about design preferences and branding
- Add questions about technical requirements and SEO
- Add questions about budget, timeline, and legal aspects
- All questions adapted for agricultural equipment dealers and service centers"
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
pause
