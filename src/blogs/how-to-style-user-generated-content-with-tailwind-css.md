---
layout: layouts/post.njk
title: How to Style User-Generated Content with Tailwind CSS
description: A quick solution to style the markdown that is converted into
  user-generated HTML content when using Tailwind CSS with your favorite SSG!
date: 2020-09-16T04:00:00.000Z
featuredImage: /images/uploads/how-to-style-user-generated-content-with-tailwind.png
---

Lately, I've been fiddling around with [Tailwind](https://tailwindcss.com/) css and [Eleventy](https://www.11ty.dev/) - (The site is built with them 😉 - love them 😍). I'm not going to talk about either of them in much detail, I'll have later posts for that! I did encounter a problem though and I had no idea how to solve it. So I wanted to quickly write about the problem and solution for others if they have the same issue.

## The Problem

I had figured out how to style everything on my site using Tailwind - It is awesome and you should check it out if you haven't. I resonated with it as it goes along with my preference for writing HTML and not writing a lot of css. The problem was - I had no way of styling the user generated-markdown for my blog posts. At the time I had a few posts on the site and they weren't that good looking - which I knew and it was on my list of to-dos to update the UI of them. But I didn't know how to accomplish this. Static site generators convert markdown in HTML while using a template language that will inject content into the template language place holders. The code I had was as followed:

```html
<div class="container-lg text-sm mt-3">{{ content | safe }}</div>
```

But how would I select just the `<h1>` tag in my blog posts and not all the h1 tags site wide?? or the `<p>` tags of the user-generated content from the post?

## The Solution

Looking back, it was a simple solution, but at the moment I had no idea! After some quick google searching - I found quite the awesome solution. Just add a markdown class to the div holding the user-generated post! It is a simple solution and not something I came up with on my own - I came across this from the creator of [Tailwind](https://tailwindcss.com/docs/installation) css himself on a forum - if you'd like to see the blog and forum where I found this info have a look [here](https://news.ycombinator.com/item?id=20656118) & [here](https://tjaddison.com/blog/2019/08/styling-markdown-tailwind-gatsby/)! <br>
<br>
This allows for a way to specifically target the markdown generated HTML without the worry of selecting other tags site wide. So instead of my HTML looking like the above code block, it now has the added `markdown` class in the div as seen below:

```html
<div class="markdown container-lg text-sm mt-3">{{ content | safe }}</div>
```

PS - you can name the class whatever you like - I just stuck with the convention used in the blog post above as it seems the most intuitive. By adding this class selector I can now write some css in my main.css file to style my posts. And the best part?! I still can write it in tailwind using the `@apply` directive.

![Markdown code!](/images/uploads/markdown.png)

From here you can customize how you style your posts however you like! Again its a simple solution that I couldn't think of in the moment, but it is a great solution nonetheless!

Until next time - keep coding!
