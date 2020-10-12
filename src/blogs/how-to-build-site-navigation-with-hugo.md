---
layout: layouts/post.njk
title: How to Build Site Navigation with Hugo
description: A quick look at how to build a sites navigation when using Hugo
date: 2020-10-12T04:00:00.000Z
featuredImage: /images/uploads/site-nav-hugo.jpg
---
I have been playing around with Hugo and doing research. I've come to find that there are a few different ways to build out the site navigation. This tends to be the case and differs from each static site generator. So how do we build out the site navigation with Hugo? Let's jump right into it!<br>
<br>
There are a few different ways, but there are two main ways that I use and find the most useful. If interested in a more in-depth explanation of the different ways, check out this [youtube](https://www.youtube.com/watch?v=E6bhmixcR5k&t=1199s) video I found when figuring this out myself.<br>
<br>
First, we'll go over the front matter option. Second, we will go over the completely customized navigation method. After explaining these two methods, we will see how to actually implement either option by looping over the menu option from either the front matter or custom navigation

## Front Matter

Using the front matter on markdown pages is a quick and easy solution. This is especially nice for smaller websites that don't use an extensive amount of pages. If you want to make a markdown file be part of your navigation just add the following in the front matter of the file:

```yaml
---
menu: "mainmenu"
---
```

You can name the menu anything you want. This will use the `title` attribute to name the actual navigation. Let's say you have a markdown file with the title of `About Me`, but you want the actual navigation link to say `About`. Then you would do the following instead of the above:
```yaml
---
menu:
    mainmenu:
        name: "About"
---
```
This can be done anytime to allow you to determine the name of the navigation link.

## Completely Custom Navigation

The above works well for a small site, but as the number of pages grows, it doesn't scale well. I tend to just use the custom navigation from the start, it flows well with how I develop and build my sites. To build the custom navigation, just go to the `config.toml` at the root of the Hugo project. Here we will add our custom menu. This will follow a similar pattern to the front matter when customizing the name. We will have our `menu` and then in that menu decide what the menu will be called - `menu.nav`. Again `nav` here can be named whatever you want to name the menu. Then for each navigation link, we will have:

- `identifier`: used to identify this specific link
- `name`: The name you want to appear on the site's navigation
- `url`: The **relative** url to the page you want the link to go to 
- `weight`: another way of saying the order

The above would be done for each navigation link. The below code snippet is the example code for what we talked about above, having a home page, about, and contact.

```toml
[menu]
    [[menu.nav]]
    identifier = "home"
    name = "Home"
    url = "/"
    weight = 1

    [[menu.nav]]
    identifier = "about"
    name = "About"
    url = "/about/"
    weight = 2

    [[menu.nav]]
    identifier = "connect"
    name = "Connect"
    url = "/connect/"
    weight = 5
```

## Implement the Navigation

Now, whether you used the front matter or custom navigation, we have to implement the navigation into the `nav` template file. To do so, I have a `nav.html` which holds everything in my `<nav></nav>` tags and I use this as a partial - love partials!. In Hugo, we can loop over these items using the `range` keyword and then dictate what menu to loop over. This would look like 
```
{{ range  .Site.Menus.nav }}

{{ end }}
```
The only thing that would be different for you possibly is again what you name your menu. I named mine `nav` so it is `.Site.Menus.nav`. If you kept the `mainmenu` from the template it would be `.Site.Menus.mainmenu`. Within this template block, you can now just write the normal HTML for the navigation. The final code should look similar to what I have below:
```html
<ul id="nav">
    {{ range .Site.Menus.nav }}
    <li><a href=" {{ .URL }}">{{ .Name }}</a></li>
    {{ end }}
</ul>
```
I hope you were able to learn some of the options to implement navigation in a Hugo site. I encourage you again to check out the youtube video linked above which helped me at the start as well. Until next time - Stay Coding!