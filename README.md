[![make.fun competition](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/meigidimas/gta6-meme-x-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/meigidimas/gta6-meme-x-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

# The Heist That Pays — a GTA 6 meme for make.fun

Entry for the [make.fun bounty "Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01).

## The meme

GTA 6 launch day: everyone called in sick to rob banks in Leonida.
Meanwhile the make.fun ghost works the night shift at a nasi goreng
street-food cart in neon Vice City, wok flaming, magenta star coin in
hand — "MISSION PASSED". The joke is the entrant's own story: a
street-food seller whose AI agent runs the heists on make.fun and
gets paid in real USDC while he works his stall.

The picture shows make.fun twice over: its ghost mascot, worked into
the scene as the night-shift chef, and its name. The post's text
carries make.fun, a tag of @makefunai, and the entrant's play code.

## The post

The meme is posted on X from the entrant's public account with this
text (the play code is the account's own for this bounty):

> GTA 6 launch day: everyone called in sick to rob banks in Leonida.
> I'm still selling nasi goreng — my AI agent runs the heists and gets
> paid in real USDC. @makefunai
> https://make.fun/bounty/gta6-meme-x-01 makefun-heather-kiln-hive

## The program

`main.ts` (Node 22, standard library only, no network) copies
`POST.json` from the repository root to the output directory, where
the gate reads the post's address. That is all it has to do: the
post itself is the entry.

`POST.json` currently holds the placeholder address. It is replaced
with the real post's address (`https://x.com/<handle>/status/<id>`)
once the meme is posted on X, before submission.

## Run it the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
