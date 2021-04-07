---
layout: layouts/post.njk
title: How to Get Tailwind Integrated With a Hugo Site
description: A short guide to integrate Tailwind CSS into a Hugo Project and
  Introduction to GoWind Boilerplate
date: 2020-10-04T04:00:00.000Z
featuredImage: /images/uploads/my-post.jpg
---
I love static site generators. They are a great tool for backend work when it comes to whipping up sites quickly. This site (as of now) is built on eleventy and uses Tailwind for the styling of it. I wanted to expand my horizons and started to look at other static site generators. As I had said in my last [post](https://www.thedelisledomain.com/blogs/select-language-go/), I started to learn [Go](https://golang.org/). After I started to learn about other SSG's I came across [Hugo](https://gohugo.io/) and wanted to give it a try with those incredibly fast build speeds! In case you haven't also noticed, I love Tailwind! So I needed a way to quickly get started on a site using Hugo and with Tailwind already integrated. I did some research and found a few good resources - listed at the end of the post.

With the help of the resources - I spun up a quick boilerplate repo for myself (and whoever else would like) to use as a project starting point. **Welcome, GoWind!** You can find the repo [here](https://github.com/j-delisle/gowind). Below, I will go over the minimal steps needed to have Tailwind up and running in a great development environment workflow! You can follow these steps to know how GoWind works!

## Let's Get Started

First, we must set up npm and install the needed dependencies. You can use

```console
npm init -y
```

to quickly populate a `package.json` with all the default values in your project directory. Next, we must install the needed dependencies of Tailwind. I'm going to assume that you have Hugo installed and setup. To install the dependencies needed just run

```console
npm install --save-dev autoprefixer postcss postcss-cli postcss-import tailwindcss
```

This will install tailwind and postcss with cli and import support.

## Config Files

After we have the dependencies installed, we must create and code our config files. First, in the project root, create a directory/folder named `assets` and then another child directory named `css`. Within `assets/css` we are going to make 3 new files:

- `main.css` - this is where our tailwind directives will go
- `postcss.config.js` - this is where we will include tailwind as a postcss plugin
- `tailwind.config.js` - this is our tailwind config file.

### Main.css

Inside our `main.css` file, we are going to add our tailwind directives, which while generate the needed classes to use tailwind. This is quite simple, if you are unaware of how to do this, just check out the tailwind [docs](https://tailwindcss.com/docs/installation). Since we are using postcss-import we use the `@import` instead of `@tailwind` to avoid issues per tailwinds directions. The file should look like the below:

```css
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";
```

### Post CSS Config

In your `postcss.config.js` file we are going to dictate to postcss to include tailwind as a plugin, as well as postcss-import and autoprefixer. To do so we add the following code to the `postcss.config.js` file:

```js
module.exports = {
    plugins: [
        require('postcss-import')({
            path: ["assets/css"]
        }),
        require('tailwindcss')('assets/css/tailwind.config.js'),
        require('autoprefixer')
    ]
}
```

Notice the path arguments for both postcss-import and tailwindcss. If you prefer to have your `postcss.config.js` and `tailwind.config.js` files in another location, just adjust your path to match that.

### Tailwind Config

To automatically populate our `tailwind.config.js` file we can run the command:

```console
npx tailwindcss init
```

This will create a tailwind config file at the root project directory with all the tailwind defaults. **IMPORTANT** - make sure you move this file to the location that matches the path arg in your `postcss.config.js` file for tailwind!

## Add Tailwind to our HTML

Lastly, we must add tailwind to our HTML head area. One thing I love about Hugo and SSGs, in general, is the power of separating code into sections, and Hugo's partials do a great job at this for me. Hugo uses Go Templating language. So we first must declare a `$styles` variable like so:

```go
{{ $styles := resources.Get "css/main.css" | postCSS (dict "config" "./assets/css/postcss.config.js") }}
```

Here we declare the styles var and use the Hugo functionality to get resources. Notice that the path to the css file is relative to the `assets` directory. After grabbing the css file, we then pipe it to postCSS. Also, notice that the dict argument is telling Hugo the location of the PostCSS config file.

The last part of the code we need to add to the HTML `head` helps us do something different depending if we are in production or not. If we are in production we want to minify the css and purge unused classes and reducing the file size. However, if we are in the development environment, we don't need nor care about this. To do this we add the following code:

```go
  {{ if .Site.IsServer }}
  <link rel="stylesheet" href="{{ $styles.RelPermalink }}"/>
  {{ else }}
  {{ $styles := $styles | minify | fingerprint | resources.PostProcess }}
  <link rel="stylesheet" href="{{ $styles.Permalink }}" integrity="{{ $styles.Data.Integrity }}"/>
  {{ end }}
```

The `if .Site.IsServer` tag determines if we are in development. It is a hugo boolean global variable that is true if using Hugo's built-in server, otherwise known as `hugo server`. If we are in development, we just use the css. However, if we are not using the server, we are in production and Hugo Pipes  will minify and purge the unused css.

And that is it! We should be up and running and able to use tailwind's utility classes! Run your hugo server and add some HTML with Tailwind to make sure everything is working properly.

In my research to do this myself, I came across a great youtube video, seen [here](https://www.youtube.com/watch?v=8Hr19zVHCbo&t=1s) that helped me to understand the process. I modified it slightly and didn't use SASS like in the video. I like to keep things simple and just use pure CSS when needed.

That is all I have until next time - Staying Coding!
