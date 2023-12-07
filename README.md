---
Order: 1
Area: Project root
TOCTitle: Markdown
PageTitle: README.md
Date: 2023-10-23
MetaDescription: Instructions for setting up the project
---
# OmgItsKuei.com, home to Kuei-Feng Tung (Chris)

<table border="0">
 <tr>
    <td width="150"><img src="readme_imgs/linkedin_headshot.png?raw=false" /></td>
    <td>Kuei-Feng Tung (Chris) is a software engineer based in Taipei, Taiwan, with a passion for building and making things of all kinds. Known for his coolheaded results-oriented leadership among teammates, perseverance under stressful situations, and dauntless attitude when facing big problems, Kuei-Feng is enthusiastic, dependable, and always striving to self-improve. </td>
 </tr>
</table>

This repository is his homepage showcasing his portfolio. He primarily uses Spring to develop enterprise websites, but for this project, he will be using Node.Js to showcase his adaptability in using less familiar tech-stacks.

- [OmgItsKuei.com, home to Kuei-Feng Tung (Chris)](#omgitskueicom-home-to-kuei-feng-tung-chris)
  - [Tools setup](#tools-setup)
    - [NVM (and NPM)](#nvm-and-npm)
      - [Installation](#installation)
      - [Usage](#usage)
        - [Common operations](#common-operations)
        - [Version verification](#version-verification)
        - [FAQ: Alias command for Mac/Linux](#faq-alias-command-for-maclinux)
      - [Sources](#sources)
    - [VSCode](#vscode)
      - [Installation](#installation-1)
      - [Usage](#usage-1)
        - [Extensions](#extensions)
    - [Git](#git)
      - [Installation](#installation-2)
      - [Usage](#usage-2)
    - [Github](#github)
      - [Download](#download)
  - [Project development cycle](#project-development-cycle)
    - [Packages installation](#packages-installation)
    - [Running the project](#running-the-project)
    - [Pushing code to Production](#pushing-code-to-production)


## Tools setup

### NVM (and NPM)

Node Version Manager (NVM) is a tool for managing Node versions on your device. Instead of using npm to install and uninstall Node versions for your different projects, you can use nvm to swap between node versions for each project.

> NOTE: Instances of Node.js that are Not managed by nvm may conflict with NVM's versions. Before proceeding, it is recommended that you uninstall any previously installed NPM or Node.js.

<details>
<summary>

#### Installation

</summary>

In the [nvm-windows repository Readme](https://github.com/coreybutler/nvm-windows/releases) for Windows, click on the nvm-setup.exe asset to download the installation tool for nvm, or the nvm-noinstall.zip to extract the tool skipping installation then running the ``install.cmd`` as Administrator.

> Note: If you specify a custom location to install nvm, a ``settings.txt`` is created for you at the install path. You can (probably) create a ``settings.txt`` file yourself and put it in the nvm install location with the following fields if you need to move the nvm install location later.

```Powershell
root: C:\Users\someUser\Documents\Coding\Tools\nvm 
path: C:\Program Files\nodejs 
arch: 64 
proxy: none
```

> The ``root`` field is the directory where nvm should store different versions of node.js - you can specify this value during ``install.cmd``. I currently organize it so that npm versions are all installed at the same directory as nvm itself. If I ever move the nvm directory, I need to also update this value.  
The ``path`` field's value always points to ``C:\Program Files\nodejs`` because that's where other programs will go to look for nodejs. If you go to ``C:\Program Files\nodejs``, you'll notice that this ```\nodejs``` folder is actually a shortcut with a ``Target path`` that points back to nvm's ``root``.

</details>


<details>
<summary>

#### Usage

</summary>

##### Common operations

Open Powershell, Command Prompt, or VSCode Terminal to input the following commands. You may get popups from Windows Process Manager when running these commands in VSCode Terminal - accept and continue.

Using ``list available`` will display all available versions of npm through nvm. 
```Powershell
nvm on
nvm list available
```

Use ``install`` to download the npm version you want.
```Powershell
# various examples of the 'install' command:
nvm install node # ('node' is alias for latest)
nvm install latest # same as above
# OR longterm support version
nvm install lts
# OR some specific version
nvm install 21.0.0
```

Use ``list`` to see which versions you currently have installed.
```Powershell
nvm list
# displays various downloaded versions
```

Use ``use`` to swap to a specific version.
```Powershell
# various examples of the 'use' command:
nvm use node
nvm use latest
nvm use lts
nvm use 21.0.0
```

##### Version verification

Enter this in VSCode terminal to see the current version of Node.js in use. It should return the version set by nvm. If this doesn't work, see below.

```Powershell
nvm use 21.0.0
node -v
# v21.0.0
```

##### FAQ: Alias command for Mac/Linux

VSCode (linux/iOS) comes bundled with its own Node version. Set a new alias called 'default' to the version you want to use to make sure VSCode uses NVM's version and not its own.  
As of nvm version 1.1.11, Mac iOS and Linux will support the ``alias`` command, while Windows 10 won't recognize the command. You can test this with:
```Powershell
nvm alias default 21.0.0 # Use 'default' as alias name to set VSCode npm version on linux/iOS
```
Another option is to create a .vscode/launch.json file in the project, which would specify the Node.js version via its "runtimeVersion" key-pair, but I haven't tried this myself. For source, see [VSCode docs: Launch config](#sources).

Just out of curiosity, you can try the alias command in Windows 10 to see what happens (spoiler; it doesn't work).
```Powershell
# In Windows 10 powershell/command prompt/vscode terminal, ...
nvm v
# 1.1.11
nvm alias testing123 21.0.0
# Terminal outputs all currently supported commands for nvm (which doesn't include 'alias')
nvm use testing123
# "testing123" is not a valid version or known alias.
# Available aliases: latest, node (latest), lts
``` 

</details>


<details>
<summary>

#### Sources

</summary>

[npm docs on installing Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

[freecodecamp: nvm install guide](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

[freecodecamp: nvm install node versions](https://www.freecodecamp.org/news/nvm-for-windows-how-to-download-and-install-node-version-manager-in-windows-10/)

[StackOverflow: VSCode to use node version by nvm (Mac/Linux)](https://stackoverflow.com/questions/44700432/visual-studio-code-to-use-node-version-specified-by-nvm)

[VSCode docs: Launch config](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)

</details>



### VSCode

VSCode is the code editor of choice here, though other tools like Eclipse are also viable alternatives. 
Instructions here will only walk through setting up VSCode, for the moment.  
Some of the benefits of using VSCode compared to Eclipse include ease of Documentation with .md files, more VSCode presence in online resources like tutorials, and faster jumpstart because it is used in official docs' quickstarts (especially for React, Next.Js, Node.Js).

<details>
<summary>

#### Installation

</summary>

Go to [https://code.visualstudio.com/download](https://code.visualstudio.com/download) and download the latest version for your OS.  
Use X64 unless you're working on a Raspberry Pi or similar Arm processor.

</details>


<details>
<summary>

#### Usage

</summary>


##### Extensions

Install the following extensions to assist with development.

<table>
  <thead>
    <tr>
      <td>Name</td>
      <td>Author</td>
      <td>Extension ID</td>
      <td>Marketplace Link</td>
      <td>Purpose</td>
    </tr>
  </thead>
  <tbody>
<tr>
  <td>Markdown All in One </td>
  <td>Yu Zhang</td>
  <td>yzhang.markdown-all-in-one</td>
  <td>

  [Link](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

  </td>
  <td>Auto-updates Table of Contents in md, shortcut for common edits, md previews</td>
</tr>
<tr>
  <td>Markdown Preview Github Styling </td>
  <td>Matt Bierner</td>
  <td>bierner.markdown-preview-github-styles</td>
  <td>

  [Link](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles)

  </td>
  <td>Extends VS Code's built-in markdown preview to match github's styling</td>
</tr>
  </tbody>
</table>
</details>



### Git

On the left-hand side of VSCode's default layout, there is a button called "Source control". Click on it and set up your Git. You may need a Github account.
You may get a download and installation instruction for a program called "Git" - it's the backbone of version control. Follow the installation prompts.  

<details> 
<summary>

#### Installation

</summary>
*To be further expanded on later...*
</details>


<details> 
<summary>

#### Usage

</summary>
*To be further expanded on later...*
</details>


### Github

An online platform for storing and managing version control of repositories (aka projects). Other options like Gitlab are available though for this project, Github will be used.  
Download the main branch to a local directory, make changes, commit changes, and push them onto the main branch to edit the repository. No Github account is needed to download iirc. If you are not the project owner, you may want to FORK the repository (make a copy of it with the owner set to yourself).

<details>
<summary>

#### Download

</summary>

Download the project repository [here](https://github.com/omgitskuei/omgitskuei.com) by:
1. Click the green "<> Code" button. 

![toolssetup_github_img1](readme_imgs/toolssetup_github_img1.png?raw=false "An image showing the green button")

2. Make sure it says "Local", and not "Codespace" on the earmark, unless you're using Github Codespace. Click the "Download ZIP" button

![toolssetup_github_img2](readme_imgs/toolssetup_github_img2.png?raw=false "An image showing the download button")

</details>


## Project development cycle

<details>
<summary>

### Packages installation

</summary>

In the previous step [Github > Project download](#project-download), you cloned the project to a local directory from Github.  
Continuing from there;

1. Open the project as a folder in VSCode.

2. Check to make sure nvm has successfully set the Node version. 
```Powershell
npm -v
node -v # same version as one set by nvm
```
> You may get a different version from the one you installed. This is because VSCode comes bundled with its own Node version. See the [NVM > Alias command for Mac/Linux ](#alias-command-for-maclinux) section above for solutions.

1. Use VSCode Terminal to ``cd`` to the directory where the project's ***package.json*** is located and run ``install`` and ``run`` commands.
> A package.json file is a manifest of your project that includes the packages and applications the project depends on and metadata like the name, description, and author of the project.  
[Source: nodesource.com/](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

1. Use the ``install`` command to download all modules listed as dependencies and devDependencies in the package.json into the current directory.
```Powershell
# 'cd' to the project root, or open the project 
cd omgitskueicom
# display contents of directory omgitskueicom
dir # it should list files including a "package.json"
npm install
```

</details>


<details>
<summary>

### Running the project

</summary>

Use the ``run`` command to start up the project. Giving it a "dev" option makes the project refresh so that new changes can be quickly previewed.

```Powershell
# dev makes the project refresh with every save
npm run dev 
```

</details>


<details>
<summary>

### Pushing code to Production

</summary>

<!-- Use the ``run`` command to start up the project. Giving it a "dev" option makes the project refresh so that new changes can be quickly previewed.

```Powershell
# dev makes the project refresh with every save
npm run dev 
``` -->

*To be further expanded on later...*

</details>