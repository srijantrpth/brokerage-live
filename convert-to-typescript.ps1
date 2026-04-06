# PropFinder - File Conversion Script
# This script renames all .jsx files to .tsx and .js files to .ts

Write-Host "🚀 Converting PropFinder to TypeScript..." -ForegroundColor Cyan

# Change to client directory
Set-Location -Path "client"

# Create required directories
Write-Host "📁 Creating required directories..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path "src\lib" -Force | Out-Null
New-Item -ItemType Directory -Path "src\components\ui" -Force | Out-Null
New-Item -ItemType Directory -Path "src\types" -Force | Out-Null

# Rename vite.config.js to vite.config.ts
Write-Host "🔧 Renaming vite.config.js to vite.config.ts..." -ForegroundColor Yellow
if (Test-Path "vite.config.js") {
    Rename-Item -Path "vite.config.js" -NewName "vite.config.ts"
}

# Rename .jsx files to .tsx in src directory
Write-Host "🔄 Converting .jsx files to .tsx..." -ForegroundColor Yellow
Get-ChildItem -Path "src" -Recurse -Filter "*.jsx" | ForEach-Object {
    $newName = $_.Name -replace '\.jsx$', '.tsx'
    Rename-Item -Path $_.FullName -NewName $newName
    Write-Host "  ✓ Converted: $($_.Name) → $newName" -ForegroundColor Green
}

# Rename specific .js files to .ts (excluding config files)
Write-Host "🔄 Converting .js files to .ts..." -ForegroundColor Yellow
$jsFiles = @("src\firebase.js")
foreach ($file in $jsFiles) {
    if (Test-Path $file) {
        $newName = $file -replace '\.js$', '.ts'
        Rename-Item -Path $file -NewName $newName
        Write-Host "  ✓ Converted: $file → $newName" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "✅ File conversion complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📦 Next steps:" -ForegroundColor Cyan
Write-Host "  1. Run: npm install" -ForegroundColor White
Write-Host "  2. Update imports in all .tsx files (remove .jsx extensions)" -ForegroundColor White
Write-Host "  3. Add TypeScript types to components" -ForegroundColor White
Write-Host ""
