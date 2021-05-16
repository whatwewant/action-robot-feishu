# GitHub Actions for Feishu Robot

![https://github.com/whatwewant/action-robot-feishu](https://img.shields.io/github/v/release/whatwewant/action-robot-feishu)
![https://github.com/whatwewant/action-robot-feishu](https://github.com/whatwewant/action-robot-feishu/workflows/test/badge.svg)

An simple github action robot for feishu notification.

### Usage

| option | required | description            |
| ------ | -------- | ---------------------- |
| url    | true     | feishu bot webhook url |
| title  | true     | title                  |
| text   | true     | text content           |

### Example

```yml
name: CI
on: [push]
jobs:
  build:
    name: Test
    runs-on: ubuntu-latest
    steps:
      - name: Feishu Robot Nessage
        uses: whatwewant/action-robot-feishu@v0.0.1
        with:
          url: ${{ secrets.FEISHU_ROBOT_WEBHOOK_URL }}
          title: notice
          text: |
            from github action test
            repository: ${{ github.repository }}
            committer: ${{ github.actor }}
            compare: ${{ github.event.compare }}
            job status: ${{ job.status }}
```

### TODO

- [x] support send text message
- [x] support send rich message
- [ ] support `@` somebody in group

### License

[MIT](./LICENSE)
