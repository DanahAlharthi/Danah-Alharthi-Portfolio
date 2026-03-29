##  Requirements & How to Download the Project (Step by Step) 

Before starting, make sure you have installed:

- Node.js → https://nodejs.org  
- Git → https://git-scm.com  

> Note: npm is included automatically with Node.js.



### Step 1: Open CMD / Terminal

Windows:
Press Windows + R → type cmd → press Enter

Mac / Linux:
Open Terminal



### Step 2: Check If Tools Are Installed

Type these commands and press Enter after each one:
```
node -v
npm -v
git --version
```
✅ If version numbers appear, everything is ready.


### Step 3: Clone (Download) the Project from GitHub

1. Open the project on GitHub
2. Click Code
3. Copy HTTPS link:

https://github.com/IEEE-KAU-Female-Branch/react-workshop-template.git

4. Go to Desktop in CMD type

Windows:

```
cd %USERPROFILE%\Desktop 
```

Mac / Linux:

```
cd ~/Desktop
```

5. Run the clone command:
   
```
git clone https://github.com/IEEE-KAU-Female-Branch/react-workshop.git
```

After this, a folder named react-workshop will be created.



### Step 4: Open Project Folder

```
cd react-workshop
```


### Step 5: Install Dependencies

```
npm install
```


### Step 6: Run the Project

If using Vite:

```
npm run dev
```

Open:
http://localhost:5173

If using Create React App:

```
npm start
```

Open:
http://localhost:3000