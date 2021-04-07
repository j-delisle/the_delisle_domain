---
layout: layouts/post.njk
title: How to Slice Strings - The Pythonic Way
description: A quick walkthrough of slicing strings in Python
date: 2020-07-08T04:00:00.000Z
featuredImage: /images/uploads/caspar-camille-rubin-7sdoly3fv_0-unsplash.jpg
---
## Slicing?

Slicing is the act of taking a string and basically chopping it up - into segments or pieces of the original string. In python - this returns a new substring, keeping the original string.

## What is our **location**?

In order to work with strings, to modify their size, to create substrings - we first have to know the size of the string we are dealing with as well as what character we are at - our location - within the string of interest. Python makes this easy - in order to know the length of a string, we can use `len(string)` which will return the number of characters found in string `string`.

For instance lets say we have `str = 'I love cars and motorcycles'` . If we were to pass `str` into `len(str)`we find that it has 27 characters! Now in order to know our location in the whole string, we use a method called indexing, or the index of our location. This starts at 0 for the first character and counts up for every character. NOTICE though that the character number IS NOT equal to the index - the index is one less.

For example, the ‘l’ in ‘l’ove’ is character 3, but is at index position 2. The use of index positioning is the fundamental principle we use in order to slice strings in Python. The indexing of strings is the same syntax that is used for list positions.

## I Want …

As mentioned above, you can imagine a string as a list in order to find its position. The syntax that Python uses in order to slice strings actually pulls from the syntax used with lists.

All we need to do to slice the string is to add \[] to the end of the string variable. The syntax and arguments of string slicing are as follows:

```python
string[start : end : step]
```

Going back to our `str` - let’s say that we only wanted it to say ‘I love cars’. We would perform the following code:

```python
new_string = str[:11]
#Output:
new_string = 'I love cars'
```

Let’s say we wanted just the last word of the original string - we can accomplish this two ways:
1 - The first way is with positive slicing as we did above

```python
new_str = str[16:]
#Output:
new_str = 'motorcycles' 
```

Starting at the 16th character and stopping at the last we get ‘motorcycles’

2 - We can also do this in a more pythonic efficient way using negative slicing - we can start at the end of the string seeing we want the last word. This would look like the below:

```python
new_str = str[-11 : -1]
#Output:
new_str = 'motorcycle'
```

Or

```python
new_str = str[-11:]
#Output:
new_str = 'motorcycles'
```

The first example we start at -11 index and go until the -1 index - which cuts the s off. The example above completely grabs the last word as it starts at -11 index and goes until the end of the original string.

Lastly, let’s go over the step functionality. If we were to get every other character it would look like so:

```python
new_str = str[::2}
#Output:
new_str = 'Ilv asadmtryls'
```

The possibilities for using slicing in python are endless and it tends to be a quick, efficient, and readable way to slice strings into substrings - keeping the original string unmodified.
