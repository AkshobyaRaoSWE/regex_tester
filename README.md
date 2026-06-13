# Regex Tester

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

A small, no-frills regular-expression tester. Type some text and a pattern, hit match, and
see what it returns. Runs entirely in the browser.

## Features

- Accepts both a bare pattern (`\d+`) and full literal syntax with flags (`/\d+/gi`); the
  flags are parsed out of the `/.../flags` form.
- Falls back to a case-insensitive match when no flags are given.
- Reports the match result, or a clear "Invalid regex format" message when the pattern does
  not parse.

## How it works

The input is classified by whether it contains a `/`: literal form is matched against
`/^\/(.+)\/([a-z]*)$/i` to split the body and flags, otherwise the whole string is treated
as the pattern. A `RegExp` is built from that and run against the text with `String.match`.

## Tech stack

- **Next.js (App Router) + React + TypeScript**
- **Tailwind CSS + daisyUI**

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Project layout

```
src/app/
  page.tsx     # text + pattern inputs, regex parsing, match result
```
