#!/bin/sh
MOODLE_DIR=/data/www/html
BRANCH=MOODLE_26_STABLE
REPO=integration
#integration->git@actechlab.warwick.ac.uk:techteam/moodle_integration.git 
cd $MOODLE_DIR
#fetch and merge the desired branch
git fetch $REPO
git merge $REPO/$BRANCH
