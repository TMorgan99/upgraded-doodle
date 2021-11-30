# Dots.md

## Here is help for the dotfiles

When setting up a new device and workstation, some apps need to have a base level of configuration.
I always forget!

So now, for the first time, I have configured the text that helps set this stuff up!

Just grab the code (the copy button), and paste in into your shell.
You should be good to go.

### [git]
```bash
git config --global user.name       "Tim Morgan"
git config --global user.email      "tmorgan99@gmail.com"
```

### [ node ]
```bash
#!/bin/sh

# PREFERED_VERSION=$0, if exists.

# [node js Installation](https://github.com/nodejs/help/wiki/Installation)

    # This is a constant.
ARCHITECTURE="linux-armv7l"

    # Download Folder   ( where the browser leaves the files )
DOWNLOADS="$HOME/Downloads"
# echo "downloads $DOWNLOADS"
# ls  -l  $DOWNLOADS/node*

    # Target Folder for the archives
    # This keeps them with the pythons...
TARGET_FOLDER="/usr/local/lib" 
    # This exists in $PATH
PATH_EXE_FOLDER="/usr/local/bin"

LTS_VERSION="v16.13.0"
ALL_VERSIONS="v14.18.1 v16.11.1 v16.13.0 v17.0.0 v17.0.1 v17.1.0"

LATEST_VERSION="v17.1.0"

# Step 00 
# First, clean out all nodes 
            # ls  -ld     "$TARGET_FOLDER/"node-*
    # sudo    rm  -fr     "$TARGET_FOLDER/"node-*


# Step 01
# install the versions.
# configure for LTS or LATEST ? 


for VERSION in $LTS_VERSION
do

    echo "installing version: $VERSION"


    # # Tar file name in Downloads
    TAR_FILE="$DOWNLOADS/node-$VERSION-$ARCHITECTURE.tar.xz"
    # echo "tarfile: $TAR_FILE"


    # sudo    tar xf      "$TAR_FILE" -C "$TARGET_FOLDER"

#     # The tar is wrapped inside a folder.
#     # So we now have.
#     # /usr/local/lib/nodejs-v16.13.0/node.v16.13.0-linux-armv71/bin/*
#     # $TARGET_FOLDER/nodejs-$VERSION/node-$VERSION-$ARCHITECTURE/bin

    BIN_DIR="$TARGET_FOLDER/node-$VERSION-$ARCHITECTURE/bin"

    #     # Folder of the newly extracted binaries.
    for EXE in `basename -a "$BIN_DIR"/*`
    do
        echo    "==> "     "$EXE"
        # echo            
        sudo    ln -sf  "$BIN_DIR/$EXE" "$PATH_EXE_FOLDER/$EXE"
    done    # /BASENAMES

done        # /VERSIONS


#   # at the end of it all, what names to we have ?
    for EXE in `basename -a "$PATH_EXE_FOLDER"/*`
    do
        which "$EXE"
        # Show each $EXE that it can return a version number.
        echo "$EXE      `$EXE --version`"
    done    # /BASENAMES


    echo "checking version: $VERSION"

    NPM_GLOBAL_DIR="$TARGET_FOLDER/node-$VERSION-$ARCHITECTURE/lib"

    ls -ld "$NPM_GLOBAL_DIR"
    # echo "List the globally installed packages."
    npm list    --global


exit
```

### [npm]
```bash

sudo ln -sf `pwd`/node-v14.17.6-linux-x64/bin/* /usr/local/bin
sudo ln -sf `pwd`/node-v14.17.6-linux-x64/lib/* /usr/local/lib
node --version
npm config set init-author-name     "Tim Morgan <tmorgan99@gmail.com>"
npm config set init-version         "0.0.1"
```

Thanks, Github, for this little feature, all code blocks have a copy button.

But how can I get the same behavior on my locally hosted markdowns ....
