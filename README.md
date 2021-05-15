# GitHub Actions for Feishu Robot

### Usage

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

### License

[MIT](./LICENSE)
