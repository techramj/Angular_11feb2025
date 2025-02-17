
# Angular Setup
## install node js
    https://nodejs.org/en/download

To check the version
```
node -v
npm --v
npx --v
```

## install visual studio code
    https://code.visualstudio.com/download

```
Add the plugin
Angular Language Service
Angular Essential (version 18)
```

## install angular cli

    https://angular.dev/tools/cli/setup-local



note:
```
if using older version
unistall and then reinstall node js

to update the anuglar version
npm unistall -g @angular/cli
npm install -g @angular/cli@latest
```


# Angular Project
## 01 create first angular project
```
ng new <project_name>
```


```
? Which stylesheet format would you like to use? (Use arrow keys)
❯ CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org  

  select css. since it is selected as default, press enter
```


```
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? (y/N) N
```

## run the project
```
cd project_name
npm start
```



## keywords/commands
| keyword | Description              |
|---------|--------------------------|
|npm      | Node Package Manager|
|npx      | Node Package eXecuter |


## useful URL
1. git remote add origin https://github.com/techramj/Angular_11feb2025.git
2. git push -u origin main
3. 