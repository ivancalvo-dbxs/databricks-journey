---
sidebar_position: 2
---

# AWS

import useBaseUrl from '@docusaurus/useBaseUrl';

# 1. Create the Databricks Account

If you don't have a Databricks account yet, follow this video to create a new one:

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/psSblIqH93E"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

<br />
<br />
<br />

# 2. Create the first Workspace

:::info Goal
* Deploy the **dev workspace** using Terraform.
* Deploy on the **dev** AWS account.
:::

:::info Next goal
* Repeat the process for the **staging** and **production** workspaces.
* Deploy on the respective AWS Accounts.
:::

### Save time and clicks with Terraform (🔥)

To easily accomplish this task, use the following repo and Youtube Tutorial:

* [Terraform Databricks Workspaces 2025](https://github.com/ivancalvo-dbxs/terraform-databricks-workspaces-2025)


#### Youtube tutorial for the workspace creation

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/t5vyL1RKXUE"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>


### Manual approach through the UI (👎)

:::danger Not recommended
This approach is not recommended, highly prone to error and misconfigurations.
:::

Follow one of the following guides:

* [AWS: Manually create a workspace](https://docs.databricks.com/aws/en/admin/workspace/create-workspace)