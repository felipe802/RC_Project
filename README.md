# RC_Project
 Um projeto de Redes de Computadores (UFABC) que é implementar o Protocolo HTTP usando C + Socket + Unix (FreeBSD)

# Download FreeBSD
 ```sh
 #!/bin/sh

 # Stop on Error
 set -e 

 # Environment FreeBSD
 FREEBSD_URL="https://download.freebsd.org/releases/amd64/amd64/ISO-IMAGES"
 FREEBSD_VER=$(curl -s "$FREEBSD_URL/" | sed -n 's/.*href="\([0-9]\+\.[0-9]\+\)\/".*/\1/p' | sort -V | tail -n 1)
 ISO_NAME="FreeBSD-$FREEBSD_VER-RELEASE-amd64-disc1.iso.xz"

 # Download FreeBSD
 curl -o "FreeBSD.iso.xz" "$FREEBSD_URL/$FREEBSD_VER/$ISO_NAME"

 # Verify Checksum
 curl -s "$FREEBSD_URL/$FREEBSD_VER/CHECKSUM.SHA256-FreeBSD-$FREEBSD_VER-RELEASE-amd64" | \
     grep "$ISO_NAME" | awk '{print $4 "  FreeBSD.iso.xz"}' | sha256sum -c -

 # Extract FreeBSD
 unxz -f "FreeBSD.iso.xz"
 ```

# Install FreeBSD
 ```sh
 #!/bin/sh
 ```

# Configuring FreeBSD
 ```sh
 #!/bin/sh

 ### ################################################################################################################################

 ### ################################
 ### Setup Shell
 ### ################################

 # Config Shell
 cat << 'EOF' | tee -a "$HOME/.shrc" | sudo tee -a "/root/.shrc" > "/dev/null"
 ### ################################
 ### SHELL ENVIRONMENT
 ### ################################

 os_version=$(freebsd-version)
 sh_name=$(ps -p $$ -o comm=)
 if [ "$(id -u)" -eq 0 ]; then
 	usr_color="\033[1;31m"
 else
 	usr_color="\033[1;32m"
 fi
 export PS1="
 \033[0;33m\033[1;31m \033[1;35m${os_version}\033[0;33m─\033[1;34m \033[1;35m${sh_name}\033[0;33m
 \033[0;33m┌──❮ \033[1;33m \033[1;36m\w\033[0;33m ❯─ ❮\033[1;34m ${usr_color}\u\033[0;33m❯
 \033[0;33m└─\033[1;34m\033[0m "

 ### ################################
 ### SHELL ALIAS
 ### ################################

 ### ################################
 ### SHELL CONFIGURATION
 ### ################################
 EOF

 ### ################################
 ### Setup Zsh
 ### ################################

 # Zsh
 sudo pkg install --yes zsh
 zsh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

 # Zsh
 su -
 zsh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
 exit

 # Config Zsh
 cat << 'EOF' | tee -a "$HOME/.zshrc" | sudo tee -a "/root/.zshrc" > "/dev/null"
 ### ################################
 ### SHELL OPTIONS SETUP
 ### ################################

 # History OPTIONS
 setopt SHARE_HISTORY
 setopt HIST_IGNORE_DUPS
 setopt HIST_IGNORE_SPACE
 setopt HIST_REDUCE_BLANKS

 # Globbing & Expansion OPTIONS
 setopt EXTENDED_GLOB
 setopt GLOB_DOTS
 setopt PROMPT_SUBST

 # Interaction OPTIONS
 setopt CORRECT
 setopt INTERACTIVE_COMMENTS
 unsetopt BEEP

 # Navigation OPTIONS
 setopt AUTO_CD

 ### ################################
 ### SHELL ENVIRONMENT
 ### ################################

 os_version=$(freebsd-version)
 sh_name=$(ps -p $$ -o comm=)
 if [ "$(id -u)" -eq 0 ]; then
 	usr_color="%B%F{red}"
 else
 	usr_color="%B%F{green}"
 fi
 export PROMPT=$'
 %b%F{yellow}%B%F{red} %F{magenta}${os_version}%b%F{yellow}─%B%F{blue} %F{magenta}${sh_name}%b%F{yellow}
 %b%F{yellow}┌──❮ %B%F{green} %*%b%F{yellow} ❯─❮ %B%F{green} %D{%d/%m/%y}%b%F{yellow} ❯─❮ %B%F{yellow} %B%F{cyan}%c%b%F{yellow} ❯─ ❮%B%F{blue} ${usr_color}%n%b%F{yellow}❯
 %b%F{yellow}└─%B%F{blue}%f%b '

 ### ################################
 ### SHELL FUNCTIONS
 ### ################################

 ### ################################
 ### SHELL ALIAS
 ### ################################

 ### ################################
 ### SHELL CONFIGURATION
 ### ################################
 EOF
 ```
