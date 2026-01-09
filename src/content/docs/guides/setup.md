---
title: Setup guide
---

## Required Hardware and Software

To participate in this course, the following hardware and software are necessary:

### Required Hardware

-   **Computer**: A desktop or laptop running the latest version of Windows or macOS.
-   **Webcam and Microphone**: A webcam and microphone capable of supporting video conferencing. Most laptops come with these built-in.
-   **Internet Connection**: A stable internet connection that can handle Zoom calls without interruptions in audio or video. If you're uncertain about your connection, let us know, and we can schedule a chat to help you assess it.

### Required Software – Part 1

#### Required GUI-Application Software

GUI-application software is software that operates with a graphical user interface (GUI) on your operating system.

##### Discord

Discord is a chat software and the primary mode of communication throughout this course. It enables communication across the school, within sections, and between individuals. Discord is widely used by tech communities globally for internal communication.

**Installation:**

-   Download the Discord mobile app from the [Android Play Store](https://play.google.com/store/apps/details?id=com.discord) or [iOS App Store](https://apps.apple.com/us/app/discord-chat-for-gamers/id985746746).
-   Download the Discord desktop app for your operating system [here](https://discord.com/download).

Discord is a cornerstone of this course. If you're new to Discord, check out the [quick-start guide](https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord) and make sure to read through the Discord House Rules before the course begins.

##### Zoom

Zoom is the video conferencing software used for this course. Each section has its own Zoom room, and the link to this room will be found at the top of each section's Discord channel.

**Installation:**

-   Download the [Zoom Client for Meetings here](https://zoom.us/download).
-   Start a new meeting to test your webcam and microphone.

##### Chrome

Chrome is the most popular web browser among software engineers due to its robust developer tools, which will be introduced in the course. Chrome also has an extensive library of browser extensions that assist developers in building and maintaining software.

**Installation:**

-   [Download Chrome for your operating system here](https://www.google.com/chrome/).

##### Visual Studio Code

VSCode is the most popular code editor globally. All code for SWE Fundamentals will be written using VSCode.

**Installation:**

-   [Download VSCode for your operating system here](https://code.visualstudio.com/download).

### Required Software – Part 2

This document outlines required software for the course. Please install this software before starting the course unless instructed otherwise. If you run into any issues or have questions while setting up, feel free to reach out to us via email or on the first day of zoom session. We’re here to help!

#### [Windows Only] Install Windows-specific software

##### Install and setup Windows Subsystem for Linux (WSL)

WSL allows us to run the Linux operating system on Windows machines. We do this because most programming uses Unix-based operating systems, of which MacOS is a descendant. Most SWEs that use Windows do their work in WSL to maximise compatibility between their work and work done on Linux machines. Before installing WSL, update Windows to the latest version.

-   [Install WSL here](https://docs.microsoft.com/en-us/windows/wsl/install).
-   Install the latest version of [Ubuntu here](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6). Ubuntu is a popular version of the Linux operating system.
-   Run `sudo apt install build-essential` in Ubuntu in WSL to install standard libraries Ubuntu needs to further install common packages.
-   Run `sudo apt-get install ca-certificates` in Ubuntu in WSL to get SSL verification certificates on Ubuntu for Ubuntu to communicate with VS Code on our computer.

##### Integrate VS Code with WSL

-   Install the [VS Code Remote Development extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) to enable VS Code to integrate with WSL.
-   Click the Remote Development extension icon in the bottom left corner of VS Code. A pop up will appear with a list of options. Click the first option "Remote-WSL: New Window" for the default distro.
-   You will see a notification "Starting VS Code in WSL...". This means VS Code is setting up a server inside WSL for the first time. Once installed, the VS Code of your Windows OS will sync automatically with the VS Code of your Ubuntu OS, and the VS Code terminal will show the Ubuntu terminal.

#### [Mac Only] Install Mac-specific software

##### Install Homebrew

-   Follow instructions at [https://brew.sh/](https://brew.sh/) to install Homebrew.

Homebrew is a package manager for MacOS that provides a single source of truth for which packages and package versions are installed. This is typically only relevant to command line packages; We typically do not install GUI applications via Homebrew.

Homebrew typically manages OS-specific packages, e.g. `node`, and not application-specific packages, e.g. `react`. Application-specific packages are typically managed by application-level package managers such as `npm` or `pip`. Application-specific packages are typically bundled and deployed together with an application, regardless of where those applications are running.

### Install and configure Git

#### Install Git

##### Windows

Open an Ubuntu terminal in VS Code and run the following commands separately.

```bash
sudo apt-get update
sudo apt-get install git
```

Verify correct installation by checking Git version

```bash
git --version
```

##### MacOS

1.  Download and install Git for MacOS

    ```bash
    brew install git
    ```

2.  Verify Git is installed by running the following command in the VS Code terminal. This should print out a version number on the next line, e.g., `git version 2.9.2`.

    ```bash
    git --version
    ```

3.  Download and install the Git Credential Manager

    To install the Git Credential Manager you may need to allow "unidentified developer apps". Don't worry, Git Credential Manager is created by Microsoft. [Instructions here](https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac).

    If you are using a company computer for this course you may not be able to override the security settings. You may need to create a personal access token instead.

#### Personal Access Tokens

##### Configure Git and GitHub

When using the HTTPS protocol on GitHub to retrieve repository information you will need to develop a personal access token on your GitHub account, you will then be able to use this token to authenticate your request. To create a personal access token please follow this [set of documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

After you have created the personal access token be sure to save it in a safe spot as it will be required when authenticating requests to the GitHub servers. You will be prompted to pass your GitHub username and password when trying to push to repositories, use your Personal Access Token in place of your password.

##### Configure Git default branch

Set the default Git branch to `main`. Some older versions of Git may still use `master` as the default branch name.

```bash
git config --global init.defaultBranch main
```

##### Configure Git default editor

Follow [instructions here](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) to enable the `code` command in terminal to open VS Code.

Set the default Git code editor to VS Code to avoid Git's default command line editor Vim, which requires learning Vim-specific keyboard shortcuts. We may need to use Vim on remote servers as SWEs, but to keep things simple during course we will stick to VS Code.

```bash
git config --global core.editor "code --wait"
```

##### Configure Git and GitHub Credentials

Set your GitHub account credentials on your computer through the command line. This will enable us to interact with GitHub via the command line, which we will do a lot. Please replace `<YOUR_GITHUB_USERNAME>` and `<YOUR_GITHUB_EMAIL>` with your GitHub username and email.

```bash
git config --global user.name "<YOUR_GITHUB_USERNAME>"
git config --global user.email "<YOUR_GITHUB_EMAIL>"
```

Type `git config -l` into the terminal to verify configuration success. If you see `user.name` and `user.email` in the output, we succeeded. If you see a `:` at the bottom of the output, you may need to press `Enter` until you see the lines starting with `user.name` and `user.email`.

After configuring your GitHub credentials you will be able to access GitHub repositories and make requests, however you will be prompted for your username and password every single request.

While this level of security is brilliant for companies it can be frustrating for the developers. To make your lives a tad easier you can run these commands in your CLI in order to save your credentials into the environment.

```bash
git config --global credential.helper store
git config --global credential.helper cache
```

After doing these commands you may need to go through git flow once before it has saved your credentials (including your personal access token, which should be used as a password when prompted for username and password.

### Install Node.js

Please follow this link [https://nodejs.org/en/download/package-manager](https://nodejs.org/en/download/package-manager) for complete documentation for installing Node.js

#### Windows

Open an Ubuntu terminal in VS Code and run the following commands separately.

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### MacOS

Install Node.js using Homebrew using the following commands. `install` installs the package and `link` makes the `node` command accessible in our terminal. Run these commands separately.

```bash
brew install node@20
brew link node@20
```

### Install Python on Windows

#### Download Python Installer

-   Go to the [Python official download page](https://www.python.org/downloads/).
-   Click on the latest version for Windows (e.g., Python 3.10 or higher).

#### Run the Installer

-   Double-click the downloaded `.exe` file to start the installer.
-   Check the box that says “Add Python to PATH” at the bottom of the installer window.
-   Click on “Customize Installation”.

#### Customize Installation

-   Leave the default settings as is, and click “Next”.
-   On the “Advanced Options” page, select “Install for all users”.
-   Click “Install” to begin the installation process.

#### Verify Installation

Open Command Prompt and run the following command to see the version of Python installed.

```bash
python --version
```

### Install Python on macOS

#### Install Homebrew (If Not Already Installed)

Homebrew is a package manager for macOS that simplifies the installation of software.

Open Terminal and run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Install Python

Run the following command in Terminal:

```bash
brew install python
```

#### Verify Installation

Run:

```bash
python3 --version
```

This should display the installed Python version.

### Verify Python and pip Installation

#### Check Python Version

Run the following command in your terminal or command prompt to see the installed Python version:

```bash
python --version
```

or

```bash
python3 --version
```

#### Check pip Version

Run:

```bash
pip --version
```

or

```bash
pip3 --version
```

#### Install pip if not available:

If `pip` is not installed, use the following command (for Linux):

```bash
sudo apt-get install python3-pip
```

#### Verify pip Installation:

After installation, run:

```bash
pip3 --version
```

This should display the installed `pip` version.

### Install Docker Desktop (Windows & macOS)

#### Download Docker Desktop:

-   Visit the [Docker Desktop download page](https://docs.docker.com/get-started/get-docker/)
-   select the version for your operating system.

#### Run the Installer:

-   **Windows**: Double-click the downloaded `.exe` file and follow the on-screen instructions.
-   **macOS**: Open the `.dmg` file and drag Docker to the Applications folder.

#### Complete the Installation:

-   Follow the installation instructions, agree to the terms and conditions, and select the necessary options (e.g., use WSL 2 for Windows).

#### Launch Docker:

-   Open Docker Desktop from the Start menu (Windows) or Applications (macOS).

#### Verify Installation:

Open a terminal or command prompt and run:

```bash
docker --version
```

You should see the Docker version displayed, indicating that Docker has been successfully installed.

### Extra & Optional

#### Install Code Formatters

##### Install Prettier

Prettier is a code formatter that will auto-format our code and make it more readable when we save our files.

-   Install the [Prettier extension for VS Code here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

##### Install ESLint

ESLint is a JavaScript code linter that helps us detect functional errors in our code prior to running it.

-   Install ESLint on your computer by running `sudo npm i -g eslint` from the terminal in VS Code. Enter your computer's password if prompted.
-   Install the [ESLint VS Code extension here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

##### Set VS Code formatting settings

1.  Open VS Code and open the command prompt with `Ctrl+Shift+P` on Windows or `Cmd+Shift+P` on Mac
2.  Start typing `Preferences: Open Settings (JSON)` and select this option when you see it in the search dropdown. VS Code should open a JSON settings file.
3.  Replace the contents of the file with the code below
4.  Save the settings file
5.  Restart VS Code to apply settings

```json
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "editor.tabSize": 2
}
```

#### GitHub and SSH

Another way developers are able to authenticate requests to GitHub is to create and use an SSH key on their personal machines. This SSH key acts as a unique signature that can be linked to your GitHub account online, essentially creating a connection between your machine and GitHub when used. SSH keys require a little more setup than using HTTPS but they will not prompt you for authentication every single request.

##### Setting up SSH

-   You will need to check for existing SSH keys on your machine, please follow these [docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys).
-   If you do not have you then you will need to generate a new SSH key please follow these [docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
-   Following this you will need to add the new SSH key into your GitHub account online please follow these [docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).