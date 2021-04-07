---
layout: layouts/post.njk
title: Git Branch Workflows and What I Use
description: A quick overview of different Git branch workflows, the commands
  used in git, and what workflow I use
date: 2020-09-03T04:00:00.000Z
featuredImage: /images/uploads/file_type_git_icon_130581.png
---

Git is an awesome developer tool! I highly recommend getting more familiar with it if you haven't done so already, especially if you're just starting in software development. A main component of Git are branches, which allow another user to take a snapshot of the upstream code, copy it, and then allow that user to add/modify/make changes without affecting the original (master) branches code. This is used in many different ways between developers and software companies, but all in all, have the same function - to allow a better workflow of software development.

## Workflow Types

### Basic Workflow

The basic git workflow is really simple and thus doesn't do very well with complications added to it. The master branch is remote. When developers want to work on something in the code, they work on it on the local level and when done commit and push to master. This approach is simple and will work fine for the lone developer making small websites, but for a team of devs, this is asking for trouble. This doesn't allow for the benefit of what branches provide.

### Feature Branch Workflow

For a feature branch workflow, there is the master branch as in all workflows. Now let's say a developer has been assigned a task to add a new feature to the tool. He can create a new branch from the master and work on adding that feature independent of the stable production of master. While they are doing this, another dev can make another feature branch for a different feature. When the developer is done adding the feature, that feature branch can then be merged into master. This workflow keeps the feature branch and master separate, unlike the basic workflow.

### Gitflow Workflow

The Gitflow workflow is a newer method that was developed by Vincent Driessen in 2010. It is very similar to the feature branch workflow but has a major difference. let's say that you are working with a feature branch workflow. The developer implements a new feature in a branch and then merges their feature branch into the production master... and it breaks the site! The major plus of a gitflow workflow is added support for development. There is a master branch that is always clean and live - it is the live production code. Then downstream is the development branch which can be run daily with testing. Then when a developer adds a new feature, they merge their feature branch into the development branch. In this instance, the development branch is run through a nightly run every night of tests to test code. The development branch is merged into the master production at set intervals twice a week. This workflow allows for the pros of the feature branch workflow but adds better functionality in terms of testing and verifying new features that have been merged into the development branch.

Branches allow developers to do a lot! There are more workflows but these are the ones that I have seen to be the most useful to me in my software journey. Do a google search of git workflows to learn of others, there is a plethora of info out there by people way more versed in this subject than I am!

## Branch Workflow I Use

For this website, I use the Gitflow workflow. I have my master branch which I use as my production/live branch. Thanks to the awesome [Netlify](https://www.netlify.com/) - whenever I push anything to the `master` branch - my site will automatically rebuild and deploy. Under master, I have my `development` branch. This is where I will do quick fixes and changes that won't take a while and where I verify any new code before again merging into production. Lastly, I make new branches for any new features or modifications. For example, when I rebuilt my site using [TailwindCSS](https://tailwindcss.com/), I made a new feature branch `tailwind_convert`. Once completed this change in the new branch, I merged the code into master and deleted the branch.

## How To

Now for one of the reasons I wanted to write this post - so I can remember commands! It helps to have a place of reference for this.

- ### Create a New Branch

      ```properties
      git checkout -b new_branch_name
      ```

  The above command will create a new branch and check it out at the same time. **REMEMBER** you want to be in the branch that you wanted the new branch to be downstream from.

- ### Change Branches

      ```properties
      git checkout branch_name_to_switch_to
      ```

- ### Delete Branches

      ```properties
      git branch -d branch_to_delete
      ```

- ### Merge

      ```properties
      git checkout branch_to_merge_new_code_into
      git merge branch_to_merge_into_current_branch
      ```

  I hope you learned something new here and if not, at least now have a place to pull up a quick reference of git branch commands when you can't remember!
