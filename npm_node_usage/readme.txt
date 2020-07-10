= on windows using powershell as admin

== update npm
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
npm install -g npm-windows-upgrade
npm-windows-upgrade

== update typescript
npm install typescript -g

$ tsc --version
Version 3.9.6

$ node --version
v8.11.3

== how to install modules locally ... will download modules in the current folder
npm install readline
npm install files

== how to install modules globally ... will download modules in the appdata/roaming/npm
npm install readline -g
npm install files -g

