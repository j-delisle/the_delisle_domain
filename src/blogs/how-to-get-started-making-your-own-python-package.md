---
layout: layouts/post.njk
title: How To Get Started Making Your Own Python Package
description: A quick intro of the minimum requirements needed in order to create
  your own python package
date: 2020-09-14T04:00:00.000Z
featuredImage: /images/uploads/python_original_wordmark_logo_icon_146382.png
---

Over the past few days - I've been looking into getting more involved in opensource - so I've been on Github just exploring different repositories and technologies. This got me thinking - how cool would it be to have a tool or program that could help other developers up on GitHub? Most of my stuff now is just websites - not full applications. But how do I start? How can I make my software available to others to use? After googling, I quickly realized I needed to make my own package! So here we will learn the basics of how to make your own Python package!

# What is a Package

A python package is just a bunch of files that do something. Similar to a python module - which ends up just being a `file.py` (module) that can be imported for use.

# Minimum Requirements

As I said above, this will go over everything needed at the most minimal level to create your own python package. So let's say you have this awesome idea for a package and you call it `my_package` - so original I know 🤣.

## File Structure

The below shows the minimum files and directory structure needed.

```
📦my_package
 ┣ 📂my_package
 ┃ ┗ 📜__init__.py
 ┣ 📂tests
 ┣ 📜LICENSE
 ┣ 📜README.md
 ┗ 📜setup.py
```

The root directory is the name of our package - my_package. Then inside this, we have another directory named the same thing. This is where all of the source code for the package will live - **Don't forget the **init**.py file!** At the root we also have

- a tests directory for all unit tests
- a LICENSE file so one can know the terms of use of your package - if you need help picking a license just visit [HERE](https://choosealicense.com/)
- a README written in markdown. This is where you explain all about your package like what it does, how to use it, how to download etc.
- Last is the setup.py file which is used as the build script by [setuptools](https://packaging.python.org/key_projects/#setuptools). This file contains things like the name of the package, the version, description, author, and more.

## Generating Release Requirements

After you have the needed files, we need to create the needed tools/files for a release, otherwise known as generating the [distribution packages](https://packaging.python.org/glossary/#term-Distribution-Package) for the package. These tools can quickly and easily be installed with `pip` on the command line as follows:

```shell
python3 -m pip install --user --upgrade setuptools wheel
```

after installing these run the below command from the package root directory:

```shell
python3 setup.py sdist bdist_wheel
```

**VOILA** and just like, that you've generated what is needed for distributing the package.

## Upload Your Awesome Package!

Now it is time to upload your package to the [Python Package Index](https://pypi.org/)

You will need to register for an account (if you don't already have one) on [PyPi](https://pypi.org/).

We can use [twine](https://packaging.python.org/key_projects/#twine) to now upload the package. First, you will need to install it if you don't already have it

```shell
python3 -m pip install --user --upgrade twine
```

Then run the below command to upload your package!

```shell
python3 -m twine upload dist/*
```

And just like that you now know what is the minimum needed requirements to upload a package to PyPi and be able to install that package with `pip`.

# Few Notes

If you have questions on any topic here - take a look at this [tutorial](https://packaging.python.org/tutorials/packaging-projects/) as it is what I followed to do so.

Also, note that the above tutorial shows how to also upload to TestPyPi and how to debug and make sure your package installs correctly etc.

Thanks for reading and can't wait to see what awesome package you come up with! Stay coding!
