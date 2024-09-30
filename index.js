import { Octokit } from "octokit";

const main = async () => {
  const args = process.argv;

  const octokit = new Octokit({
    auth: args[2],
  });

  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();

  if (!login) {
    console.log("failed to logged in");
    return;
  }

  const commits = await octokit.request(
    `GET /repos/${args[3]}/${args[4]}/commits?since=${new Date(
      args[5]
    ).toISOString()}&per_page=100`
  );

  if (!commits.data) {
    console.log("No new commits Found");
    return;
  }

  const toOutput = {};

  for (const commit of commits.data) {
    const pullRequests = await octokit.request(
      `GET /repos/${args[3]}/${args[4]}/commits/${commit.sha}/pulls`
    );

    if (!pullRequests.data) {
      console.log(`No pull request found for commit ${commit.sha}`);
    }

    for (const pr of pullRequests.data) {
      const { html_url, title } = pr;

      if (!toOutput[html_url]) {
        toOutput[html_url] = `- ${title} (${html_url})`;
      }
    }
  }

  for (const str in toOutput) {
    console.log(toOutput[str]);
  }
};

main();
