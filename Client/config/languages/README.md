# Contribution
Hi! I don't expect anyone to translate the original en file but I like to make things accessible, so it supports language translation :)

# Format
The file format is JSON, and it works like so:
```json 
{
    "example": { // command name // function name // text "thing"
        // basically, for each line of text in the command, there are lines here
        "l1": "", // line 1
        "l2": "", // line 2
        "embed": { // if the command // function name // text "thing" has an embed
            "l1": "" // same thing, but lines within the embed
        },
        "embed2": { // same numbering principle exists here
            ...
        }
    }
}
```

# File-naming
Honestly, name it whatever you'd like- just make a PR to update the below section of the README.

# Available Languages
- English (en)