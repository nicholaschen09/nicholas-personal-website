---
title: "Staying out of insert mode will save your life"
listTitle: "vim insert mode"
category: tech
date: "2026-06-28"
author: "Amaan Bilwar"
published: true 
excerpt: "if you get used to this in vim, you're gonna be so much faster"
---

## why it's bad

when i first started using vim(all thanks to primeagen), it was so much work to even get the basic things done. that's where the `i` and `Esc` key came in handy.

the insert mode was where I was most comfortable with because thats what i was used to with other editors. but thats what makes it weak, and you might as well use any other editor.

soon enough i realized that Normal mode is where the big boy moves happen.

## how to get outta there

you're probably thingking just hit the `Esc` key. what's the fuss even about? This is not the best way to do this. If you wanna jump in and out of insert mode of all the time, you're going to want it to be as seamless as possible.

another way to get outta insert mode is to use the `Ctrl-[` (also known as `Ctrl-o`) key sequence to enter Normal mode.

```vim
inoremap kj <Esc>
```

how did i come up with this? the creator of [atuin](https://atuin.sh/) actually! [ellie](https://ellie.wtf/posts/switching-to-zed) has this blog post where she talks about switching to zed and she mentions using jj -> esc key. 

> the funny thing is that i was reading it because i was contributing to Zed when i found the post & i wanted to read what she hates about zed so i can contribute actually good fixes that people care about.

i literally just yoinked her keymap settings, made a few minor changes. Thank you Ellie! I LOVE ATUIN BTW (she's not reading this, is she?)

```vim
[{
  {
    "context": "Editor && vim_mode == insert",
    "bindings": {
      "j j": "vim::NormalBefore",
      "escape": null,
    },
  },
}]
```

so what if i actually wanna type "jj"? like if i'm writing a blog post such as this one? i'd just have to wait a beat for the first `j` to get inserted. how long vim waits for u to finish the sequence is the `timeoutlen` setting, which defaults to 1000ms. just do this instead in your vim config:

```vim
set timeoutlen=500
```

in zed's case they handle this on their own so we're chilling.

## good habit that might help you

You probably noticed, as a good habit to learn i also disabled the arrow keys(though im used to it now) for navigation in vim so i dont have to move my hands around much when typing and till i get my hands on a split keyboard this'll do.

```vim
{
  "context": "Editor && vim_mode",
  "bindings": {
    "left": null,
    "right": null,
    "up": null,
    "down": null,
  },
}
```
your real nvim config would become: 

```vim
inoremap <Left>  <NOP>
inoremap <Right> <NOP>
inoremap <Up>    <NOP>
inoremap <Down>  <NOP>
```

### wrap it up 

this is all i had to say in this one, hope this helps out
## References

- [https://ellie.wtf/posts/switching-to-zed/](https://ellie.wtf/posts/switching-to-zed/)
