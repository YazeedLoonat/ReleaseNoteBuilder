# Installation

```bash
$ yarn install
```

# How To Execute
to execute you would run a command like 
```bash
$ node index.js <github token> <repo> <owner> "<date since last release>"
```

<ol>
    <li>
        <b>github token</b> is a token created via github to allow for authentication. <a href="https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28"> More Info here </a>
    </li>
    <li> 
        <b>repo</b> is the repo you are looking for. For example: https://github.com/housingbayarea/bloom/pull/769 the repo would be <i>housingbayarea</i>
    </li>
    <li> 
        <b>owner</b> is the owner of the repo. For example https://github.com/housingbayarea/bloom/pull/769 the owner would be <i>bloom</i>
    </li>
    <li>
        <b>date since last release</b> is the last date a release went out. for example `08/26/2024` as the last release date would grab all prs that were merged in >= to that date
    </li>
</ol>

# output
the output will look like a sreies of: '- `pr title` (`url for pr`)\n'
