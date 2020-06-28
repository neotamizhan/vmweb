REM clean the directory
cd dist
del *.* /s /q
rd /s /q . 2>nul
cd ..

REM build
ng build --prod --base-href "https://neotamizhan.github.io/vmweb/" --outputPath=dist

REM deploy
ngh