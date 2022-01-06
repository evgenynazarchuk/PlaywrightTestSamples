npm i -D @playwright/test

npx playwright install

npx playwright test --update-snapshots

npx playwright test --reporter=html

npx playwright show-report




mkdir .github/workflows

cat > .github/workflows/tests.yaml